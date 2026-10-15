interface HeaderOverlayProps {
  teamName: string;
  onClose: () => void;
  mindFiles?: Array<{ value: string; label: string }>;
  activeMindFile?: string | null;
  onMindFileChange?: (value: string) => void;
}

export const HeaderOverlay = ({
  teamName,
  onClose,
  mindFiles,
  activeMindFile,
  onMindFileChange,
}: HeaderOverlayProps) => (
  <>
    {/* Close button with highest z-index to stay above all modals */}
    <button
      onClick={onClose}
      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/80 border-2 border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white hover:border-orange-500 hover:bg-orange-500/20 transition-all z-[60] shadow-xl"
      aria-label="Close AR camera"
    >
      ✕
    </button>

    <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none select-none">
      <div className="flex flex-col gap-2.5">
        <div className="flex justify-between items-start">
          <div className="pointer-events-auto">
            <h2 className="text-white font-mono font-black text-base sm:text-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse-fast"></span>
              <span>HUNTER SCANNER</span>
            </h2>
            <p className="text-orange-400 font-mono text-xs font-bold">
              SQUAD: <span className="text-white">{teamName}</span>
            </p>
          </div>
          {/* Space for close button */}
          <div className="w-10 h-10"></div>
        </div>

        {mindFiles && mindFiles.length > 1 && onMindFileChange && (
          <div className="flex flex-col gap-1 pointer-events-auto">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
              TARGET TIER
            </span>
            <div className="flex flex-wrap gap-1.5">
              {mindFiles.map((option) => {
                const isActive = option.value === activeMindFile;
                return (
                  <button
                    key={option.value}
                    onClick={() => onMindFileChange(option.value)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all border ${
                      isActive
                        ? "bg-orange-500 border-orange-400 text-black shadow-md shadow-orange-500/30"
                        : "bg-black/80 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600"
                    }`}
                  >
                    {option.label ?? option.value}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  </>
);
