import { useState } from "react";

interface Card {
  id: string;
  name: string;
  question: string;
  options: string[];
  correctAnswer: number;
  image: string;
  mindFile: string;
  modelUrl: string;
  isCaught: boolean;
  caughtByTeam: string;
}

interface CardsManagementProps {
  cards: Card[];
  isLoading: boolean;
  deleteConfirm: string | null;
  onAddCard: () => void;
  onEditCard: (card: Card) => void;
  onDeleteCard: (cardId: string) => void;
  onCancelDelete: () => void;
}

export const CardsManagement = ({
  cards,
  isLoading,
  deleteConfirm,
  onAddCard,
  onEditCard,
  onDeleteCard,
  onCancelDelete,
}: CardsManagementProps) => {
  const [compilingCardId, setCompilingCardId] = useState<string | null>(null);
  const [compileStatus, setCompileStatus] = useState<string | null>(null);

  const getTierBadge = (card: Card) => {
    const cardId = card.id.toLowerCase();
    let tierColor = "bg-purple-600";
    let tierName = "Common";

    if (cardId.startsWith("c1")) {
      tierColor = "bg-yellow-600";
      tierName = "Legendary";
    } else if (cardId.startsWith("c2")) {
      tierColor = "bg-gray-400";
      tierName = "Rare";
    } else if (cardId.startsWith("c3")) {
      tierColor = "bg-purple-600";
      tierName = "Common";
    }

    return (
      <span
        className={`${tierColor} text-white text-xs px-2 py-1 rounded-full`}
      >
        {tierName}
      </span>
    );
  };

  const handleCompileCard = async (card: Card) => {
    if (!card.image) {
      alert("This card does not have an image URL to compile!");
      return;
    }

    try {
      setCompilingCardId(card.id);
      setCompileStatus("Loading compiler...");

      // Ensure compiler script is loaded
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

      setCompileStatus("Loading image...");
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = card.image;
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () =>
          reject(new Error("Failed to load card image from URL"));
      });

      setCompileStatus("Compiling...");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const compiler = new (window as any).MINDAR.IMAGE.Compiler();
      await compiler.compileImageTargets([img], (progress: number) => {
        setCompileStatus(`Compiling: ${Math.round(progress * 100)}%`);
      });

      setCompileStatus("Exporting...");
      const exportedBuffer = await compiler.exportData();

      setCompileStatus("Saving...");
      let tier = "common";
      if (card.id.toLowerCase().startsWith("c1")) tier = "legendary";
      else if (card.id.toLowerCase().startsWith("c2")) tier = "rare";

      const res = await fetch(
        `/api/targets?tier=${tier}&filename=${tier}.mind`,
        {
          method: "POST",
          headers: { "Content-Type": "application/octet-stream" },
          body: exportedBuffer,
        }
      );

      if (!res.ok) throw new Error("Failed to save target on server");

      setCompileStatus("Done!");
      alert(`Success! Card "${card.name}" compiled and saved to ${tier}.mind!`);
    } catch (err: unknown) {
      console.error("Compile error:", err);
      const message = err instanceof Error ? err.message : String(err);
      alert(`Error compiling AR target: ${message}`);
    } finally {
      setCompilingCardId(null);
      setCompileStatus(null);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">Cards</h3>
          {compileStatus && (
            <p className="text-xs text-orange-400 font-mono animate-pulse">
              {compileStatus}
            </p>
          )}
        </div>
        <button
          onClick={onAddCard}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md 
                   transition-colors shadow-lg shadow-indigo-500/20"
        >
          Add New Card
        </button>
      </div>

      {isLoading ? (
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
                  Question
                </th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-300">
                  Tier
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
                  <td className="px-4 py-3 text-sm text-gray-400 max-w-md">
                    <div className="line-clamp-2 break-words">
                      {card.question}
                    </div>
                  </td>
                  <td className="px-4 py-3">{getTierBadge(card)}</td>
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
                        onClick={() => handleCompileCard(card)}
                        disabled={compilingCardId === card.id}
                        className="px-2.5 py-1 bg-orange-600 hover:bg-orange-500 text-white rounded
                                 transition-colors text-xs whitespace-nowrap font-mono font-bold"
                        title="Compile card image into .mind file"
                      >
                        {compilingCardId === card.id
                          ? compileStatus || "Compiling..."
                          : "⚡ Compile AR"}
                      </button>
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
