"use client";

import { useEffect, useRef } from "react";
import type { Team } from "@/types";

interface LeaderboardProps {
  teams: Team[];
  selectedTeamId: string | null;
  onTeamSelect?: (teamId: string) => void;
  isSelectable?: boolean;
}

export default function Leaderboard({
  teams,
  selectedTeamId,
  onTeamSelect,
  isSelectable = false,
}: LeaderboardProps) {
  const leaderboardRef = useRef<HTMLDivElement>(null);
  const selectedTeamRef = useRef<HTMLDivElement>(null);

  // Scroll to selected team when it changes
  useEffect(() => {
    if (selectedTeamId && selectedTeamRef.current && leaderboardRef.current) {
      setTimeout(() => {
        selectedTeamRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [selectedTeamId]);

  const handleTeamClick = (teamId: string) => {
    if (isSelectable && onTeamSelect) {
      onTeamSelect(teamId);
    }
  };

  return (
    <div className="w-full">
      <div
        ref={leaderboardRef}
        className="space-y-2 max-h-72 sm:max-h-80 overflow-y-auto pr-1 scrollbar-none"
      >
        {teams.length === 0 ? (
          <div className="text-center py-8 bg-zinc-950/50 border border-zinc-900 rounded-2xl">
            <p className="text-zinc-500 text-sm font-mono">No teams registered yet</p>
          </div>
        ) : (
          teams.map((team, index) => {
            const isSelected = team.id === selectedTeamId;
            return (
              <div
                key={team.id}
                ref={isSelected ? selectedTeamRef : null}
                onClick={() => handleTeamClick(team.id)}
                className={`relative rounded-xl p-3 sm:p-3.5 transition-all duration-300 border ${
                  isSelectable
                    ? "cursor-pointer hover:border-orange-500/60 hover:bg-zinc-900"
                    : ""
                } ${
                  isSelected
                    ? "bg-zinc-900/90 border-orange-500 shadow-lg shadow-orange-500/20 scale-[1.01]"
                    : "bg-black/70 border-zinc-800/80 hover:border-zinc-700"
                }`}
              >
                {/* Active indicator dot */}
                {isSelected && (
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-6 bg-orange-500 rounded-r"></div>
                )}

                <div className="flex items-center gap-3">
                  {/* Rank Badge */}
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center font-mono font-black text-xs sm:text-sm flex-shrink-0 ${
                      index === 0
                        ? "bg-orange-500 text-black shadow-md shadow-orange-500/40"
                        : index === 1
                        ? "bg-white text-black shadow-md shadow-white/20"
                        : index === 2
                        ? "bg-zinc-700 text-orange-300 border border-orange-500/30"
                        : "bg-zinc-900 text-zinc-400 border border-zinc-800"
                    }`}
                  >
                    #{index + 1}
                  </div>

                  {/* Team Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h3
                        className={`font-mono text-sm truncate font-bold ${
                          isSelected ? "text-orange-400" : "text-white"
                        }`}
                      >
                        {team.teamName}
                      </h3>
                      <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                        <span className="text-orange-500 text-xs font-bold font-mono">⚡</span>
                        <span className="text-white font-mono font-black text-sm">
                          {team.score}
                        </span>
                        <span className="text-[10px] text-zinc-500 font-mono">PTS</span>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="text-[10px] font-mono text-orange-400 font-semibold tracking-wider mt-0.5">
                        YOUR SQUAD
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
