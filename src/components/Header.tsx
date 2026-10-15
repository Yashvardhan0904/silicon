"use client";

import { useEffect, useRef } from "react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export default function Header({
  title = "SILICON QUEST",
  subtitle = "ACM USAR",
}: HeaderProps) {
  const tapCountRef = useRef(0);
  const tapTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check for ?admin=true in URL on load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("admin") === "true") {
        window.dispatchEvent(new Event("open-admin-portal"));
      }
    }
  }, []);

  // Secret 5-tap gesture to unlock Admin Portal without public buttons
  const handleSecretTap = () => {
    tapCountRef.current += 1;
    if (tapTimerRef.current) clearTimeout(tapTimerRef.current);

    if (tapCountRef.current >= 5) {
      tapCountRef.current = 0;
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("open-admin-portal"));
      }
    } else {
      tapTimerRef.current = setTimeout(() => {
        tapCountRef.current = 0;
      }, 1500);
    }
  };

  return (
    <header className="relative w-full bg-black/90 border border-orange-500/30 rounded-2xl px-4 py-3 backdrop-blur-md shadow-lg shadow-orange-500/5 select-none">
      {/* Top orange neon highlight edge */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

      <div className="flex justify-between items-center">
        {/* Title with secret multi-tap listener */}
        <div
          onClick={handleSecretTap}
          className="flex items-center gap-2 cursor-default active:opacity-80 transition-opacity"
        >
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse-fast shadow-md shadow-orange-500"></div>
          <div>
            <h1 className="text-white font-black tracking-wider text-sm sm:text-base flex items-center gap-1.5 font-mono">
              <span>{title}</span>
              <span className="text-[10px] text-orange-500 font-bold px-1.5 py-0.2 bg-orange-500/10 border border-orange-500/40 rounded">
                HUNTER OS
              </span>
            </h1>
          </div>
        </div>

        {/* Subtle decorative organization badge (hidden from admin purpose) */}
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-mono text-zinc-400 font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800">
            {subtitle}
          </span>
        </div>
      </div>
    </header>
  );
}
