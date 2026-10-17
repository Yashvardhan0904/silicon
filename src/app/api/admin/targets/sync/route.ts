import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import fs from 'fs';
import path from 'path';

interface MindTarget {
  targetIndex: number;
  previewUrl: string;
  width: number;
  height: number;
}

interface TargetCatalog {
  Common: MindTarget[];
  Rare: MindTarget[];
  Legendary: MindTarget[];
}

export async function GET() {
  try {
    const catalogPath = path.join(process.cwd(), 'src', 'data', 'mindTargets.json');
    let catalog: TargetCatalog = { Common: [], Rare: [], Legendary: [] };

    if (fs.existsSync(catalogPath)) {
      const content = fs.readFileSync(catalogPath, 'utf8');
      catalog = JSON.parse(content);
    }

    const cards = await prisma.card.findMany({
      orderBy: [{ tier: 'asc' }, { targetIndex: 'asc' }, { id: 'asc' }],
    });

    const result = {
      Common: [] as Array<MindTarget & { card: typeof cards[0] | null }>,
      Rare: [] as Array<MindTarget & { card: typeof cards[0] | null }>,
      Legendary: [] as Array<MindTarget & { card: typeof cards[0] | null }>,
    };

    const tiers = ['Common', 'Rare', 'Legendary'] as const;

    for (const tier of tiers) {
      const tierTargets = catalog[tier] || [];
      const tierCards = cards.filter((c) => c.tier === tier);

      const mappedCardIds = new Set<string>();

      for (const target of tierTargets) {
        const matchingCard = tierCards.find((c) => c.targetIndex === target.targetIndex);
        if (matchingCard) {
          mappedCardIds.add(matchingCard.id);
        }
        result[tier].push({
          ...target,
          card: matchingCard || null,
        });
      }

      // Also track any cards in this tier that have targetIndex outside the mind file or null
      const unmappedCards = tierCards.filter((c) => !mappedCardIds.has(c.id));
      (result as Record<string, unknown>)[`${tier}_unmappedCards`] = unmappedCards;
    }

    return NextResponse.json({
      success: true,
      tiers: result,
      totalCards: cards.length,
    });
  } catch (error) {
    console.error('Error fetching target sync catalog:', error);
    return NextResponse.json(
      { error: 'Failed to fetch target sync catalog' },
      { status: 500 }
    );
  }
}

// POST: Bind card to target index
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { cardId, targetIndex } = body;

    if (!cardId || typeof targetIndex !== 'number') {
      return NextResponse.json(
        { error: 'cardId and numeric targetIndex are required' },
        { status: 400 }
      );
    }

    const updated = await prisma.card.update({
      where: { id: cardId },
      data: { targetIndex },
    });

    return NextResponse.json({
      success: true,
      card: updated,
    });
  } catch (error) {
    console.error('Error binding card to target index:', error);
    return NextResponse.json(
      { error: 'Failed to bind card' },
      { status: 500 }
    );
  }
}
