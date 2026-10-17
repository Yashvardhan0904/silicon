import { useState } from "react";
import { TargetSynchronizer } from "./TargetSynchronizer";

interface Card {
  id: string;
  name: string;
  question: string;
  options: string[];
  correctAnswer: number;
  image: string;
  mindFile: string;
  modelUrl: string;
  targetIndex?: number | null;
  isCaught: boolean;
  caughtByTeam: string;
}

interface CardsManagementProps {
  cards: Card[];
  isLoading: boolean;
  deleteConfirm: string | null;
  onAddCard: () => void;
  onAddCardWithTarget?: (tier: 'Common' | 'Rare' | 'Legendary', targetIndex: number) => void;
  onEditCard: (card: Card) => void;
  onDeleteCard: (cardId: string) => void;
  onCancelDelete: () => void;
}

export const CardsManagement = ({
  cards,
  isLoading,
  deleteConfirm,
  onAddCard,
  onAddCardWithTarget,
  onEditCard,
  onDeleteCard,
  onCancelDelete,
}: CardsManagementProps) => {
  const [viewMode, setViewMode] = useState<"table" | "synchronizer">("table");
  const [compilingTier, setCompilingTier] = useState<string | null>(null);
  const [compileStatus, setCompileStatus] = useState<string | null>(null);

  const getTierBadge = (card: Card) => {
    const cardId = card.id.toLowerCase();
    let tierColor = "bg-purple-600";
    let tierName = "Common";

    if (cardId.startsWith("c1")) {
      tierColor = "bg-yellow-600";
      tierName = "Legendary";
    } else if (cardId.startsWith("c2")) {
      tierColor = "bg-blue-600";
      tierName = "Rare";
    } else if (cardId.startsWith("c3")) {
      tierColor = "bg-purple-600";
      tierName = "Common";
    }

    return (
      <span
        className={`${tierColor} text-white text-xs px-2 py-1 rounded-full font-medium`}
      >
        {tierName}
      </span>
    );
  };

  const handleCompileTier = async (selectedTier: "Legendary" | "Rare" | "Common") => {
    const prefix =
      selectedTier === "Legendary" ? "c1" : selectedTier === "Rare" ? "c2" : "c3";

    const tierCards = cards
      .filter((c) => c.tier === selectedTier || c.id.toLowerCase().startsWith(prefix))
      .sort((a, b) => {
        const aIndex = typeof a.targetIndex === "number" ? a.targetIndex : Infinity;
        const bIndex = typeof b.targetIndex === "number" ? b.targetIndex : Infinity;
        if (aIndex !== bIndex) {
          return aIndex - bIndex;
        }
        return a.id.localeCompare(b.id);
      });

    if (tierCards.length === 0) {
      alert(`No cards found in ${selectedTier} tier to compile.`);
      return;
    }

    const missingImages = tierCards.filter((c) => !c.image?.trim());
    if (missingImages.length > 0) {
      alert(
        `Cannot compile ${selectedTier} tier: ${missingImages.length} card(s) (${missingImages
          .map((c) => c.name)
          .join(", ")}) do not have image URLs!`
      );
      return;
    }

    const confirmCompile = window.confirm(
      `Compile all ${tierCards.length} ${selectedTier} cards into ${selectedTier.toLowerCase()}.mind?\n\n` +
        `This will compile targets in order (0 to ${tierCards.length - 1}) and synchronize their database target indices.`
    );
    if (!confirmCompile) return;

    try {
      setCompilingTier(selectedTier);
      setCompileStatus(`Loading compiler library...`);

      // Ensure MindAR compiler is loaded
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (!(window as any).MINDAR?.IMAGE?.Compiler) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src =
            "https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image.prod.js";
          script.onload = () => resolve();
          script.onerror = () =>
            reject(new Error("Failed to load MindAR compiler library"));
          document.head.appendChild(script);
        });
      }

      // Load all images
      setCompileStatus(`Loading ${tierCards.length} images...`);
      const loadedImages: HTMLImageElement[] = [];

      for (let i = 0; i < tierCards.length; i++) {
        const card = tierCards[i];
        setCompileStatus(`Loading image ${i + 1}/${tierCards.length}: ${card.name}...`);

        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = card.image;
        await new Promise<void>((resolve, reject) => {
          img.onload = () => resolve();
          img.onerror = () =>
            reject(new Error(`Failed to load image for card "${card.name}" (${card.id})`));
        });
        loadedImages.push(img);
      }

      setCompileStatus(`Compiling ${tierCards.length} targets (this may take a minute)...`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const compiler = new (window as any).MINDAR.IMAGE.Compiler();
      await compiler.compileImageTargets(loadedImages, (progress: number) => {
        setCompileStatus(`Compiling ${selectedTier}: ${Math.round(progress * 100)}%`);
      });

      setCompileStatus("Exporting .mind file...");
      const exportedBuffer = await compiler.exportData();

      setCompileStatus(`Saving ${selectedTier.toLowerCase()}.mind on server...`);
      const tierParam = selectedTier.toLowerCase();
      const res = await fetch(
        `/api/targets?tier=${tierParam}&filename=${tierParam}.mind`,
        {
          method: "POST",
          headers: { "Content-Type": "application/octet-stream" },
          body: exportedBuffer,
        }
      );

      if (!res.ok) throw new Error("Failed to save target on server");

      // Synchronize database targetIndex for every card
      setCompileStatus("Synchronizing target indices with database...");
      for (let i = 0; i < tierCards.length; i++) {
        const card = tierCards[i];
        if (card.targetIndex !== i) {
          await fetch(`/api/cards/${card.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ targetIndex: i }),
          });
        }
      }

      setCompileStatus("Done!");
      alert(
        `Success! Compiled ${tierCards.length} ${selectedTier} cards into ${tierParam}.mind!\nTarget indices 0 to ${tierCards.length - 1} are active.`
      );
      window.location.reload();
    } catch (err: unknown) {
      console.error("Compile error:", err);
      const message = err instanceof Error ? err.message : String(err);
      alert(`Error compiling ${selectedTier} AR targets: ${message}`);
    } finally {
      setCompilingTier(null);
      setCompileStatus(null);
    }
  };

  const legendaryCount = cards.filter((c) => c.tier === "Legendary" || c.id.toLowerCase().startsWith("c1")).length;
  const rareCount = cards.filter((c) => c.tier === "Rare" || c.id.toLowerCase().startsWith("c2")).length;
  const commonCount = cards.filter((c) => c.tier === "Common" || c.id.toLowerCase().startsWith("c3")).length;

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-semibold text-white">Cards Management</h3>
          <div className="flex bg-gray-900 border border-gray-700 rounded-lg p-0.5">
            <button
              onClick={() => setViewMode("table")}
              className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-colors ${
                viewMode === "table"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              📋 Cards Table
            </button>
            <button
              onClick={() => setViewMode("synchronizer")}
              className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-colors ${
                viewMode === "synchronizer"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              🎯 Target Synchronizer
            </button>
          </div>
          {compileStatus && (
            <p className="text-xs text-orange-400 font-mono animate-pulse mt-1">
              ⚡ {compileStatus}
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <div className="flex items-center gap-1 bg-gray-900 border border-gray-700 rounded-md p-1">
            <span className="text-xs text-gray-400 px-2 font-mono">Compile Tier:</span>
            <button
              onClick={() => handleCompileTier("Legendary")}
              disabled={!!compilingTier || legendaryCount === 0}
              className="px-2.5 py-1 bg-yellow-600 hover:bg-yellow-500 disabled:opacity-50 text-white rounded text-xs font-mono font-bold transition-colors"
              title="Compile all Legendary cards into legendary.mind"
            >
              {compilingTier === "Legendary" ? "Compiling..." : `Legendary (${legendaryCount})`}
            </button>
            <button
              onClick={() => handleCompileTier("Rare")}
              disabled={!!compilingTier || rareCount === 0}
              className="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded text-xs font-mono font-bold transition-colors"
              title="Compile all Rare cards into rare.mind"
            >
              {compilingTier === "Rare" ? "Compiling..." : `Rare (${rareCount})`}
            </button>
            <button
              onClick={() => handleCompileTier("Common")}
              disabled={!!compilingTier || commonCount === 0}
              className="px-2.5 py-1 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white rounded text-xs font-mono font-bold transition-colors"
              title="Compile all Common cards into common.mind"
            >
              {compilingTier === "Common" ? "Compiling..." : `Common (${commonCount})`}
            </button>
          </div>

          <button
            onClick={onAddCard}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md 
                     transition-colors shadow-lg shadow-indigo-500/20 text-sm font-medium"
          >
            Add New Card
          </button>
        </div>
      </div>

      {viewMode === "synchronizer" ? (
        <TargetSynchronizer
          onAddCardWithTarget={onAddCardWithTarget}
          onEditCard={(targetCard) => {
            const found = cards.find((c) => c.id === targetCard.id);
            if (found) onEditCard(found);
          }}
        />
      ) : isLoading ? (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
          <p className="mt-2 text-gray-400">Loading cards...</p>
        </div>
      ) : cards.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400">
            No cards found. Create one to get started!
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-800 border-b border-gray-700">
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-300">
                  ID
                </th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-300">
                  Name
                </th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-300">
                  Tier
                </th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-300">
                  Target Index
                </th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-300">
                  Status
                </th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-300">
                  Caught By
                </th>
                <th className="text-right px-4 py-3 text-sm font-semibold text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {cards.map((card) => (
                <tr
                  key={card.id}
                  className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
                >
                  <td className="px-4 py-3 text-xs font-mono text-gray-400">
                    {card.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-white font-medium">
                    {card.name}
                  </td>
                  <td className="px-4 py-3">{getTierBadge(card)}</td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-amber-400">
                    {typeof card.targetIndex === "number" ? `#${card.targetIndex}` : "—"}
                  </td>
                  <td className="px-4 py-3">
                    {card.isCaught ? (
                      <span className="inline-flex items-center gap-1 bg-green-900/30 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/30">
                        Caught
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded-full border border-blue-500/30">
                        Available
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">
                    {card.isCaught && card.caughtByTeam ? (
                      <span className="text-gray-300">{card.caughtByTeam}</span>
                    ) : (
                      <span className="text-gray-600">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex gap-2 justify-end">
                      <button
                        onClick={() => onEditCard(card)}
                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded
                                 transition-colors text-sm whitespace-nowrap"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          if (deleteConfirm === card.id) {
                            onDeleteCard(card.id);
                          } else {
                            onDeleteCard(card.id);
                          }
                        }}
                        onMouseLeave={onCancelDelete}
                        className={`px-3 py-1 rounded transition-colors text-sm whitespace-nowrap ${
                          deleteConfirm === card.id
                            ? "bg-red-700 hover:bg-red-800 text-white"
                            : "bg-red-600 hover:bg-red-700 text-white"
                        }`}
                      >
                        {deleteConfirm === card.id ? "Confirm?" : "Delete"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
