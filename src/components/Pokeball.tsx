"use client";

interface PokeballProps {
  onClick: () => void;
  isExploding: boolean;
}

export default function Pokeball({ onClick, isExploding }: PokeballProps) {
  return (
    <div className="flex flex-col items-center justify-center my-4 select-none">
      {/* Outer interactive container */}
      <div
        onClick={onClick}
        className="relative group cursor-pointer flex items-center justify-center p-3"
      >
        {/* Background ambient orange aura glow */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-400 blur-2xl transition-all duration-500 ${
            isExploding
              ? "opacity-100 scale-150 animate-pulse-fast"
              : "opacity-35 group-hover:opacity-70 group-hover:scale-110"
          }`}
        ></div>

        {/* Outer rotating holographic radar ring */}
        <div className="absolute w-32 h-32 rounded-full border border-dashed border-orange-500/40 animate-radar pointer-events-none"></div>
        <div className="absolute w-36 h-36 rounded-full border border-orange-500/20 pointer-events-none"></div>

        {/* Anime Pokeball / Summon Sphere */}
        <div
          className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-black bg-black shadow-2xl shadow-orange-500/40 overflow-hidden transition-all duration-300 transform ${
            isExploding
              ? "animate-explode opacity-0 pointer-events-none"
              : "group-hover:scale-105 active:scale-95 group-hover:border-orange-500"
          }`}
        >
          {/* Top half: Fiery Vibrant Anime Orange */}
          <div className="w-full h-1/2 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden">
            {/* Glossy anime highlight arc */}
            <div className="absolute top-1 left-3 right-3 h-3 bg-white/40 rounded-full blur-[1px]"></div>
          </div>

          {/* Bottom half: Crisp Stark White */}
          <div className="w-full h-1/2 bg-gradient-to-b from-white via-zinc-100 to-zinc-200"></div>

          {/* Center Black Divider Line */}
          <div className="absolute top-1/2 left-0 right-0 h-3 -translate-y-1/2 bg-black border-y border-black"></div>

          {/* Center Button Housing */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black border-2 border-orange-500 flex items-center justify-center shadow-lg">
            {/* Center Button Button */}
            <div className="w-5 h-5 rounded-full bg-white border border-zinc-300 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-sm shadow-orange-500 animate-pulse-fast"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Action Call-to-Action Pill */}
      <button
        onClick={onClick}
        type="button"
        disabled={isExploding}
        className="mt-2 group/btn relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/90 border-2 border-orange-500/70 text-white font-mono text-xs font-black tracking-widest uppercase hover:border-orange-400 hover:bg-orange-600 hover:text-black transition-all duration-300 shadow-lg shadow-orange-500/20 active:scale-95"
      >
        <span className="w-2 h-2 rounded-full bg-orange-500 group-hover/btn:bg-black animate-pulse-fast"></span>
        <span>TAP TO SCAN CARD</span>
        <span className="text-orange-400 group-hover/btn:text-black font-bold">⚡</span>
      </button>
    </div>
  );
}
