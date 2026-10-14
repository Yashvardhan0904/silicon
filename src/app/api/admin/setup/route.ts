import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const REQUIRED_COUNTERS = [
  'teamsCounter',
  'cardsLegendaryCounter',
  'cardsRareCounter',
  'cardsCommonCounter',
];

// GET /api/admin/setup - Check counters status
export async function GET() {
  try {
    const existingCounters = await prisma.counter.findMany({
      where: {
        name: { in: REQUIRED_COUNTERS },
      },
    });

    const existingNames = new Set(existingCounters.map((c) => c.name));

    const status: Record<string, boolean> = {
      teams: existingNames.has('teamsCounter'),
      cardsLegendaryCounter: existingNames.has('cardsLegendaryCounter'),
      cardsRareCounter: existingNames.has('cardsRareCounter'),
      cardsCommonCounter: existingNames.has('cardsCommonCounter'),
    };

    status.cards =
      status.cardsLegendaryCounter &&
      status.cardsRareCounter &&
      status.cardsCommonCounter;

    return NextResponse.json(status);
  } catch (error) {
    console.error('Error checking counters:', error);
    return NextResponse.json(
      { error: 'Failed to check counters' },
      { status: 500 }
    );
  }
}

// POST /api/admin/setup - Initialize counters
export async function POST() {
  try {
    for (const name of REQUIRED_COUNTERS) {
      await prisma.counter.upsert({
        where: { name },
        update: {},
        create: { name, count: 0 },
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Counters initialized successfully',
    });
  } catch (error) {
    console.error('Error initializing counters:', error);
    return NextResponse.json(
      { error: 'Failed to initialize counters' },
      { status: 500 }
    );
  }
}
