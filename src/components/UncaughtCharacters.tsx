"use client";

import { useEffect, useState, useCallback } from "react";
import { getUncaughtCards } from "@/services/firestore";
import { getImageSrc, shouldDisplayAsText } from "@/utils/imageUtils";
import type { Card } from "@/types";

interface UncaughtCharactersProps {
  isOpen: boolean;
  onClose: () => void;
  onCountChange?: (count: number) => void;
}

export default function UncaughtCharacters({
  isOpen,
  onClose,
  onCountChange,
}: UncaughtCharactersProps) {
  const [uncaughtCards, setUncaughtCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUncaughtCards = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const cards = await getUncaughtCards();
      setUncaughtCards(cards);
      onCountChange?.(cards.length);
    } catch (err) {
      console.error("Error fetching uncaught cards:", err);
      setError("Failed to load uncaught targets");
    } finally {
      setLoading(false);
    }
  }, [onCountChange]);

  useEffect(() => {
    if (isOpen) {
      fetchUncaughtCards();
    }
  }, [isOpen, fetchUncaughtCards]);

  const getTierBadge = (tier?: string) => {
    switch (tier) {
      case "Legendary":
        return {
          label: "SSR",
          style: "bg-orange-500 text-black font-black border-orange-400",
          border: "border-orange-500 shadow-orange-500/20",
        };
      case "Rare":
        return {
          label: "SR",
          style: "bg-white text-black font-bold border-zinc-200",
          border: "border-zinc-400 shadow-white/10",
        };
      default:
        return {
          label: "R",
          style: "bg-zinc-800 text-zinc-300 font-medium border-zinc-700",
          border: "border-zinc-800",
        };
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fadeIn select-none"
      onClick={onClose}
    >
      <div
        className="bg-zinc-950 border-2 border-orange-500/40 rounded-3xl w-full max-w-lg p-5 shadow-2xl shadow-orange-500/10 animate-scaleIn max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
          <div>
            <h2 className="text-white font-mono font-black text-lg sm:text-xl tracking-wider flex items-center gap-2">
              <span className="text-orange-500">CODEX //</span>
              <span>UNCAUGHT</span>
            </h2>
            <p className="text-zinc-400 text-xs font-mono mt-0.5">
              {uncaughtCards.length} targets currently active in the field
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-orange-500 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3 pr-1 scrollbar-none">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-10 h-10 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mb-3"></div>
              <p className="text-zinc-400 text-xs font-mono">Syncing field radar...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-400 text-sm font-mono">{error}</p>
            </div>
          ) : uncaughtCards.length === 0 ? (
            <div className="text-center py-12 bg-zinc-900/50 rounded-2xl border border-zinc-800">
              <p className="text-orange-400 font-mono font-bold text-base">ALL TARGETS CAPTURED!</p>
              <p className="text-zinc-400 text-xs font-mono mt-1">Every character has been successfully caught.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {uncaughtCards.map((card) => {
                const tierInfo = getTierBadge(card.tier);
                const imageSrc = getImageSrc(card.image);
                const displayAsText = shouldDisplayAsText(card.image);

                return (
                  <div
                    key={card.id}
                    className={`bg-zinc-900/80 rounded-xl border ${tierInfo.border} p-2 flex flex-col items-center relative overflow-hidden transition-all duration-200 hover:scale-[1.02]`}
                  >
                    {/* Rarity Pill */}
                    <span
                      className={`absolute top-1.5 left-1.5 text-[9px] px-1.5 py-0.2 rounded border font-mono ${tierInfo.style}`}
                    >
                      {tierInfo.label}
                    </span>

                    {/* Image / Icon */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 my-1 rounded-lg overflow-hidden bg-black/60 flex items-center justify-center border border-zinc-800">
                      {imageSrc ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={imageSrc}
                          alt={card.name}
                          className="w-full h-full object-cover"
                        />
                      ) : displayAsText ? (
                        <span className="text-2xl">{card.image?.trim()}</span>
                      ) : (
                        <span className="text-xl text-zinc-600 font-mono">?</span>
                      )}
                    </div>

                    {/* Card Info */}
                    <div className="w-full text-center mt-1">
                      <h4 className="text-white text-xs font-mono font-bold truncate">
                        {card.name}
                      </h4>
                      <p className="text-orange-400 text-[11px] font-mono font-black">
                        +{card.value} PTS
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-zinc-800 text-center">
          <p className="text-[11px] font-mono text-zinc-500">
            Find and scan these cards with your AR Camera to score points
          </p>
        </div>
      </div>
    </div>
  );
}
