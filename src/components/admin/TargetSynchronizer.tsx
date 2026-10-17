import { useState, useEffect, useCallback } from 'react';

interface DBстроенCard {
  id: string;
  name: string;
  value: number;
  tier: string;
  targetIndex: number | null;
  image?: string;
  question: string;
}

interface TargetSlot {
  targetIndex: number;
  previewUrl: string;
  width: number;
  height: number;
  card: DBстроенCard | null;
}

interface SyncData {
  tiers: {
    Common: TargetSlot[];
    Rare: TargetSlot[];
    Legendary: TargetSlot[];
    Common_unmappedCards?: DBстроенCard[];
    Rare_unmappedCards?: DBстроенCard[];
    Legendary_unmappedCards?: DBстроенCard[];
  };
  totalCards: number;
}

interface TargetSynchronizerProps {
  onAddCardWithTarget?: (tier: 'Common' | 'Rare' | 'Legendary', targetIndex: number) => void;
  onEditCard?: (card: DBстроенCard) => void;
}

export const TargetSynchronizer = ({
  onAddCardWithTarget,
  onEditCard,
}: TargetSynchronizerProps) => {
  const [selectedTier, setSelectedTier] = useState<'Legendary' | 'Rare' | 'Common'>('Legendary');
  const [syncData, setSyncData] = useState<SyncData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [bindingCardId, setBindingCardId] = useState<Record<number, string>>({});
  const [isUpdating, setIsUpdating] = useState<number | null>(null);

  const fetchSyncData = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/admin/targets/sync');
      if (!res.ok) throw new Error('Failed to fetch sync catalog');
      const data = await res.json();
      setSyncData(data);
    } catch (err) {
      console.error('Error loading target sync data:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSyncData();
  }, [fetchSyncData]);

  const handleBind = async (targetIndex: number) => {
    const cardId = bindingCardId[targetIndex];
    if (!cardId) return;

    try {
      setIsUpdating(targetIndex);
      const res = await fetch('/api/admin/targets/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardId, targetIndex }),
      });

      if (!res.ok) throw new Error('Failed to bind card');
      await fetchSyncData();
    } catch (err) {
      console.error('Bind error:', err);
      alert('Failed to bind card to target index');
    } finally {
      setIsUpdating(null);
    }
  };

  const currentTargets = syncData?.tiers[selectedTier] || [];
  const unmappedCards =
    (syncData?.tiers as Record<string, unknown>)?.[`${selectedTier}_unmappedCards`] as
      | DBстроенCard[]
      | undefined || [];

  const mappedCount = currentTargets.filter((t) => !!t.card).length;
  const totalTargets = currentTargets.length;

  return (
    <div className="space-y-6">
      {/* Header and Tier Selector */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gray-800/80 p-4 rounded-xl border border-gray-700">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span>🎯</span> AR Target Synchronizer
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Pre-compiled .mind files are the source of truth. Link database cards directly to their target slots.
          </p>
        </div>

        {/* Tier Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedTier('Legendary')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              selectedTier === 'Legendary'
                ? 'bg-yellow-600 text-white shadow-lg shadow-yellow-600/30'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Legendary (10)
          </button>
          <button
            onClick={() => setSelectedTier('Rare')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              selectedTier === 'Rare'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Rare (25)
          </button>
          <button
            onClick={() => setSelectedTier('Common')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              selectedTier === 'Common'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Common (65)
          </button>
        </div>
      </div>

      {/* Sync Status Banner */}
      <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-3 h-3 rounded-full ${
              mappedCount === totalTargets && totalTargets > 0
                ? 'bg-green-500 animate-pulse'
                : 'bg-amber-500'
            }`}
          />
          <span className="text-sm font-medium text-white">
            {selectedTier} Tier:{' '}
            <strong className="text-indigo-400">{mappedCount}</strong> of{' '}
            <strong className="text-gray-300">{totalTargets}</strong> targets mapped in database
          </span>
        </div>

        {unmappedCards.length > 0 && (
          <div className="text-xs text-amber-400 font-mono bg-amber-950/40 border border-amber-500/30 px-3 py-1.5 rounded-md">
            ⚠️ {unmappedCards.length} {selectedTier} card(s) in DB are currently unmapped: (
            {unmappedCards.map((c) => c.name).join(', ')})
          </div>
        )}
      </div>

      {isLoading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
          <p className="mt-2 text-gray-400 text-sm">Loading target catalog from .mind files...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {currentTargets.map((target) => {
            const isMapped = !!target.card;

            return (
              <div
                key={target.targetIndex}
                className={`flex flex-col bg-gray-800/90 rounded-xl overflow-hidden border transition-all ${
                  isMapped
                    ? 'border-gray-700 hover:border-indigo-500/50'
                    : 'border-dashed border-gray-600 hover:border-amber-500/50'
                }`}
              >
                {/* Target Header */}
                <div className="px-3 py-2 bg-gray-900/80 flex items-center justify-between border-b border-gray-700/60">
                  <span className="text-xs font-mono font-bold text-amber-400">
                    Target #{target.targetIndex}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">
                    {target.width} × {target.height}
                  </span>
                </div>

                {/* Target Preview Image */}
                <div className="relative aspect-[3/4] bg-black/60 flex items-center justify-center p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={target.previewUrl}
                    alt={`Target ${target.targetIndex}`}
                    className="max-h-full max-w-full object-contain rounded border border-gray-700/40"
                    loading="lazy"
                  />
                  {!isMapped && (
                    <div className="absolute top-2 right-2 bg-amber-600/90 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                      Unmapped
                    </div>
                  )}
                </div>

                {/* Target Card Info / Actions */}
                <div className="p-3 flex-1 flex flex-col justify-between gap-3 bg-gray-800/40">
                  {isMapped ? (
                    <div>
                      <div className="text-sm font-bold text-white truncate" title={target.card!.name}>
                        {target.card!.name}
                      </div>
                      <div className="text-[11px] font-mono text-gray-400 flex items-center justify-between mt-1">
                        <span>ID: {target.card!.id}</span>
                        <span className="text-green-400 font-semibold">Synced</span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-xs text-gray-400 italic">No card linked to target #{target.targetIndex}</p>
                    </div>
                  )}

                  <div className="space-y-2 pt-2 border-t border-gray-700/50">
                    {isMapped ? (
                      <div className="flex gap-2">
                        {onEditCard && (
                          <button
                            onClick={() => onEditCard(target.card!)}
                            className="flex-1 px-2.5 py-1 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded transition-colors"
                          >
                            Edit Card
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {unmappedCards.length > 0 && (
                          <div className="flex gap-1">
                            <select
                              value={bindingCardId[target.targetIndex] || ''}
                              onChange={(e) =>
                                setBindingCardId({
                                  ...bindingCardId,
                                  [target.targetIndex]: e.target.value,
                                })
                              }
                              className="flex-1 bg-gray-900 border border-gray-700 rounded text-xs text-white px-2 py-1"
                            >
                              <option value="">Select unmapped card...</option>
                              {unmappedCards.map((c) => (
                                <option key={c.id} value={c.id}>
                                  {c.name} ({c.id})
                                </option>
                              ))}
                            </select>
                            <button
                              onClick={() => handleBind(target.targetIndex)}
                              disabled={!bindingCardId[target.targetIndex] || isUpdating === target.targetIndex}
                              className="px-2 py-1 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white text-xs rounded font-bold"
                            >
                              Bind
                            </button>
                          </div>
                        )}

                        {onAddCardWithTarget && (
                          <button
                            onClick={() => onAddCardWithTarget(selectedTier, target.targetIndex)}
                            className="w-full px-2.5 py-1 bg-indigo-600/80 hover:bg-indigo-600 text-white text-xs rounded font-medium transition-colors"
                          >
                            + Create Card for #{target.targetIndex}
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
