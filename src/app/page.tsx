"use client";

import { useState, useEffect, useCallback } from "react";
import Header from "@/components/Header";
import Pokeball from "@/components/Pokeball";
import ARCamera from "@/components/ARCamera";
import Leaderboard from "@/components/Leaderboard";
import UncaughtCharacters from "@/components/UncaughtCharacters";
import {
  getTeams,
  getUncaughtCards,
  getCardsCaughtByTeam,
} from "@/services/firestore";
import { getImageSrc, shouldDisplayAsText } from "@/utils/imageUtils";
import type { Team, Card } from "@/types";

export default function Home() {
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoadingTeams, setIsLoadingTeams] = useState(true);
  const [charactersCaught, setCharactersCaught] = useState<Card[]>([]);
  const [isLoadingCaught, setIsLoadingCaught] = useState(false);
  const [isARActive, setIsARActive] = useState(false);
  const [isPokeballExploding, setIsPokeballExploding] = useState(false);
  const [showUncaughtModal, setShowUncaughtModal] = useState(false);
  const [uncaughtCount, setUncaughtCount] = useState<number | null>(null);
  const [teamSearchQuery, setTeamSearchQuery] = useState("");
  const [activeBottomTab, setActiveBottomTab] = useState<"collection" | "leaderboard">("collection");

  // Load teams with realtime polling
  useEffect(() => {
    let isMounted = true;

    const fetchTeams = async (initial = false) => {
      try {
        if (initial) setIsLoadingTeams(true);
        const teamsData = await getTeams();
        if (isMounted) {
          setTeams(teamsData);
        }
      } catch (error) {
        console.error("Error loading teams:", error);
      } finally {
        if (initial && isMounted) {
          setIsLoadingTeams(false);
        }
      }
    };

    fetchTeams(true);

    // Poll every 3 seconds so leaderboard updates in realtime
    const interval = setInterval(() => {
      fetchTeams(false);
    }, 3000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // Load selected team from localStorage
  useEffect(() => {
    const storedTeamId = localStorage.getItem("selectedTeamId");
    if (storedTeamId) {
      setSelectedTeamId(storedTeamId);
    }
  }, []);

  const fetchCaughtCharacters = useCallback(async (teamId: string) => {
    try {
      setIsLoadingCaught(true);
      const caughtCards = await getCardsCaughtByTeam(teamId);
      setCharactersCaught(caughtCards);
    } catch (error) {
      console.error("Error loading caught characters:", error);
      setCharactersCaught([]);
    } finally {
      setIsLoadingCaught(false);
    }
  }, []);

  const loadUncaughtCount = useCallback(async () => {
    try {
      const cards = await getUncaughtCards();
      setUncaughtCount(cards.length);
    } catch (error) {
      console.error("Error loading uncaught characters count:", error);
    }
  }, []);

  useEffect(() => {
    loadUncaughtCount();

    const interval = setInterval(() => {
      loadUncaughtCount();
    }, 5000);

    return () => clearInterval(interval);
  }, [loadUncaughtCount]);

  useEffect(() => {
    if (selectedTeamId) {
      fetchCaughtCharacters(selectedTeamId);
    } else {
      setCharactersCaught([]);
    }
  }, [selectedTeamId, fetchCaughtCharacters]);

  const handleTeamSelect = (teamId: string) => {
    setSelectedTeamId(teamId);
    localStorage.setItem("selectedTeamId", teamId);
  };

  const handlePokeballClick = () => {
    if (!selectedTeam) return;

    setIsPokeballExploding(true);

    setTimeout(() => {
      setIsARActive(true);
      setIsPokeballExploding(false);
    }, 550);
  };

  const handleARClose = () => {
    setIsARActive(false);
  };

  const handleCharacterCollected = () => {
    if (selectedTeamId) {
      fetchCaughtCharacters(selectedTeamId);
      // Re-fetch teams to get updated team score for the leaderboard
      getTeams().then(setTeams).catch(console.error);
    }

    setUncaughtCount((prev) =>
      typeof prev === "number" ? Math.max(prev - 1, 0) : prev
    );
  };

  const handleUncaughtCountChange = useCallback((count: number) => {
    setUncaughtCount(count);
  }, []);

  const handleChangeTeam = () => {
    setSelectedTeamId(null);
    localStorage.removeItem("selectedTeamId");
    setCharactersCaught([]);
    setIsARActive(false);
    setTeamSearchQuery("");
  };

  const selectedTeam = teams.find((t) => t.id === selectedTeamId);

  const filteredTeams = teams.filter((team) =>
    team.teamName.toLowerCase().includes(teamSearchQuery.toLowerCase())
  );

  if (isLoadingTeams) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center anime-grid-bg p-4">
        <div className="w-12 h-12 border-3 border-orange-500 border-t-transparent rounded-full animate-spin mb-3"></div>
        <p className="text-white font-mono text-xs uppercase tracking-widest animate-pulse-fast">
          INITIALIZING HUNTER OS...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070707] text-white anime-grid-bg flex flex-col items-center justify-start p-3 sm:p-5 select-none">
      <div className="w-full max-w-md flex flex-col gap-4 animate-fadeIn">
        {/* Top Header */}
        <Header />

        {/* ============================================================== */}
        {/* PHASE 1: TEAM SELECTION LOBBY (If no team selected)           */}
        {/* ============================================================== */}
        {!selectedTeam ? (
          <div className="flex flex-col gap-4 animate-slideUp">
            {/* Mission Brief Card */}
            <div className="bg-zinc-950/90 border-2 border-orange-500/40 rounded-2xl p-4 sm:p-5 shadow-xl shadow-orange-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse-fast"></span>
                  <h2 className="font-mono font-black text-sm tracking-wider text-white">
                    SELECT YOUR SQUAD
                  </h2>
                </div>
                <span className="text-[10px] font-mono text-orange-400 bg-orange-500/10 border border-orange-500/30 px-2 py-0.5 rounded">
                  {teams.length} SQUADS ACTIVE
                </span>
              </div>

              {/* Search Teams */}
              <div className="relative mb-3">
                <input
                  type="text"
                  value={teamSearchQuery}
                  onChange={(e) => setTeamSearchQuery(e.target.value)}
                  placeholder="Search squad name..."
                  className="w-full px-3.5 py-2 pl-9 bg-black border border-zinc-800 rounded-xl text-white font-mono text-xs placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                {teamSearchQuery && (
                  <button
                    onClick={() => setTeamSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Teams Roster List */}
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1 scrollbar-none">
                {filteredTeams.length === 0 ? (
                  <div className="text-center py-6 bg-black/60 rounded-xl border border-zinc-900">
                    <p className="text-zinc-500 font-mono text-xs">
                      No squads found matching &quot;{teamSearchQuery}&quot;
                    </p>
                  </div>
                ) : (
                  filteredTeams.map((team) => (
                    <div
                      key={team.id}
                      onClick={() => handleTeamSelect(team.id)}
                      className="group flex items-center justify-between p-3 rounded-xl bg-black/70 border border-zinc-800 hover:border-orange-500 hover:bg-zinc-900/90 transition-all duration-200 cursor-pointer active:scale-[0.99]"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-mono font-bold text-white group-hover:border-orange-500 group-hover:text-orange-400">
                          ⚡
                        </div>
                        <span className="font-mono text-xs sm:text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">
                          {team.teamName}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-black text-orange-400">
                          {team.score} PTS
                        </span>
                        <span className="text-xs text-zinc-500 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all">
                          →
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Leaderboard Section in Lobby */}
            <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-800/80">
                <h3 className="font-mono font-black text-xs tracking-wider text-zinc-400 uppercase">
                   TOURNAMENT RANKINGS
                </h3>
                <span className="text-[10px] font-mono text-zinc-500">LIVE</span>
              </div>
              <Leaderboard teams={teams} selectedTeamId={selectedTeamId} />
            </div>
          </div>
        ) : (
          /* ============================================================== */
          /* PHASE 2: HUNTER COCKPIT HUD (When team is selected)           */
          /* ============================================================== */
          <div className="flex flex-col gap-3.5 animate-slideUp">
            {/* Squad Status & Mission Bar */}
            <div className="bg-black/90 border border-orange-500/40 rounded-2xl p-3.5 shadow-lg shadow-orange-500/5">
              <div className="flex items-center justify-between">
                {/* Left: Squad & Score */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/50 flex items-center justify-center font-mono font-bold text-sm text-orange-400">
                    ⚡
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-white font-mono font-black text-sm tracking-wide truncate max-w-[130px] sm:max-w-[180px]">
                        {selectedTeam.teamName}
                      </h2>
                      <button
                        onClick={handleChangeTeam}
                        className="text-[10px] font-mono text-zinc-400 hover:text-orange-400 transition-colors uppercase px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800"
                      >
                        ⇄ SWITCH
                      </button>
                    </div>
                    <p className="text-[11px] font-mono font-black text-orange-400">
                      {selectedTeam.score} <span className="text-zinc-500 font-normal">POINTS</span>
                    </p>
                  </div>
                </div>

                {/* Right: Uncaught Targets Badge */}
                <button
                  onClick={() => setShowUncaughtModal(true)}
                  className="flex flex-col items-end px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-orange-500/40 hover:border-orange-400 hover:bg-orange-500/10 transition-all group"
                >
                  <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider group-hover:text-orange-400">
                    CODEX
                  </span>
                  <div className="flex items-center gap-1 font-mono font-black text-xs text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse-fast"></span>
                    <span>
                      {typeof uncaughtCount === "number" ? uncaughtCount : "--"} LEFT
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Central Hero Scanner Arena */}
            <div className="relative bg-black/85 border border-zinc-800/90 rounded-3xl p-4 flex flex-col items-center justify-center overflow-hidden shadow-2xl">
              {/* Subtle anime corner accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-orange-500"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-orange-500"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-orange-500"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-orange-500"></div>

              <Pokeball
                onClick={handlePokeballClick}
                isExploding={isPokeballExploding}
              />
            </div>

            {/* Bottom Segmented Switcher (Team Collection vs Leaderboard) */}
            <div className="flex flex-col gap-2.5">
              <div className="grid grid-cols-2 p-1 bg-black/90 border border-zinc-800 rounded-xl">
                <button
                  type="button"
                  onClick={() => setActiveBottomTab("collection")}
                  className={`py-2 rounded-lg font-mono text-xs font-black tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5 ${
                    activeBottomTab === "collection"
                      ? "bg-orange-500 text-black shadow-md shadow-orange-500/30"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <span> SQUAD CARDS</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      activeBottomTab === "collection"
                        ? "bg-black text-orange-400"
                        : "bg-zinc-800 text-zinc-300"
                    }`}
                  >
                    {charactersCaught.length}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveBottomTab("leaderboard")}
                  className={`py-2 rounded-lg font-mono text-xs font-black tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5 ${
                    activeBottomTab === "leaderboard"
                      ? "bg-orange-500 text-black shadow-md shadow-orange-500/30"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <span>RANKINGS</span>
                </button>
              </div>

              {/* Dynamic Bottom Viewport */}
              <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-3.5 min-h-[200px]">
                {activeBottomTab === "collection" ? (
                  /* TAB 1: SQUAD CAUGHT CARDS */
                  <div>
                    {isLoadingCaught ? (
                      <div className="flex flex-col items-center justify-center py-10">
                        <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                        <p className="text-zinc-500 text-xs font-mono">Loading squad cards...</p>
                      </div>
                    ) : charactersCaught.length === 0 ? (
                      <div className="flex flex-col items-center justify-center text-center py-8 px-4">
                        <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl mb-2 text-zinc-500">
                          🎴
                        </div>
                        <p className="text-white text-xs font-mono font-bold">
                          NO CARDS CAUGHT YET
                        </p>
                        <p className="text-zinc-500 text-[11px] font-mono mt-1 max-w-xs">
                          Point the AR Scanner at character cards to catch them and score points for your squad!
                        </p>
                      </div>
                    ) : (
                      <div className="flex gap-2.5 overflow-x-auto pb-2 pt-1 scrollbar-none scroll-smooth">
                        {charactersCaught.map((character) => {
                          const imageSrc = getImageSrc(character.image);
                          const displayAsText = shouldDisplayAsText(character.image);

                          return (
                            <div
                              key={character.id}
                              className="flex-shrink-0 w-28 bg-black rounded-xl border-2 border-orange-500/50 p-2 flex flex-col items-center relative overflow-hidden transition-all duration-300 hover:scale-105 hover:border-orange-400 shadow-md shadow-orange-500/10"
                            >
                              {/* Rarity Tag */}
                              <span className="absolute top-1 right-1 text-[8px] font-mono font-black bg-orange-500 text-black px-1.5 py-0.2 rounded">
                                {character.tier === "Legendary" ? "SSR" : character.tier === "Rare" ? "SR" : "R"}
                              </span>

                              {/* Card Image */}
                              <div className="w-20 h-24 my-1 rounded-lg overflow-hidden bg-zinc-900 flex items-center justify-center border border-zinc-800">
                                {imageSrc ? (
                                  // eslint-disable-next-line @next/next/no-img-element
                                  <img
                                    src={imageSrc}
                                    alt={character.name}
                                    className="w-full h-full object-cover"
                                  />
                                ) : displayAsText ? (
                                  <span className="text-3xl">{character.image?.trim()}</span>
                                ) : (
                                  <span className="text-2xl text-zinc-600 font-mono">?</span>
                                )}
                              </div>

                              {/* Card Info */}
                              <div className="w-full text-center mt-1">
                                <h4 className="text-white text-[11px] font-mono font-bold truncate">
                                  {character.name}
                                </h4>
                                <p className="text-orange-400 text-[10px] font-mono font-black">
                                  +{character.value} PTS
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  /* TAB 2: TOURNAMENT LEADERBOARD */
                  <div>
                    <Leaderboard teams={teams} selectedTeamId={selectedTeamId} />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* AR Camera Overlay */}
      {isARActive && selectedTeam && (
        <ARCamera
          teamName={selectedTeam.teamName}
          teamId={selectedTeam.id}
          onClose={handleARClose}
          onCharacterCollected={handleCharacterCollected}
        />
      )}

      {/* Uncaught Characters Modal */}
      <UncaughtCharacters
        isOpen={showUncaughtModal}
        onClose={() => setShowUncaughtModal(false)}
        onCountChange={handleUncaughtCountChange}
      />
    </div>
  );
}
