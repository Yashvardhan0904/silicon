import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { Team, Card } from '@prisma/client';

// POST /api/admin/reset - Reset database, snapshot, or restore
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, snapshot } = body;

    if (action === 'snapshot') {
      const teams = await prisma.team.findMany();
      const cards = await prisma.card.findMany();
      return NextResponse.json({ teams, cards });
    }

    if (action === 'reset') {
      // Create snapshot before resetting for undo capability
      const teamsBefore = await prisma.team.findMany();
      const cardsBefore = await prisma.card.findMany();

      await prisma.$transaction([
        prisma.card.updateMany({
          data: {
            isCaught: false,
            caughtByTeam: '',
          },
        }),
        prisma.team.updateMany({
          data: {
            score: 0,
            cardsCaught: [],
          },
        }),
      ]);

      return NextResponse.json({
        success: true,
        message: 'Database reset successfully',
        snapshot: {
          teams: teamsBefore,
          cards: cardsBefore,
        },
      });
    }

    if (action === 'restore') {
      if (!snapshot || !Array.isArray(snapshot.teams) || !Array.isArray(snapshot.cards)) {
        return NextResponse.json(
          { error: 'Valid snapshot with teams and cards is required' },
          { status: 400 }
        );
      }

      await prisma.$transaction(async (tx) => {
        // Restore teams
        for (const team of snapshot.teams as Team[]) {
          await tx.team.upsert({
            where: { id: team.id },
            update: {
              teamName: team.teamName,
              score: team.score,
              cardsCaught: team.cardsCaught || [],
            },
            create: {
              id: team.id,
              teamName: team.teamName,
              score: team.score,
              cardsCaught: team.cardsCaught || [],
            },
          });
        }

        // Restore cards
        for (const card of snapshot.cards as Card[]) {
          await tx.card.upsert({
            where: { id: card.id },
            update: {
              name: card.name,
              value: card.value,
              tier: card.tier || 'Common',
              image: card.image || '',
              targetIndex: card.targetIndex ?? null,
              isCaught: card.isCaught,
              caughtByTeam: card.caughtByTeam || '',
            },
            create: {
              id: card.id,
              name: card.name,
              value: card.value,
              tier: card.tier || 'Common',
              image: card.image || '',
              question: card.question || '',
              options: card.options || [],
              correctAnswer: card.correctAnswer || 0,
              mindFile: card.mindFile || '',
              modelUrl: card.modelUrl || '',
              targetIndex: card.targetIndex ?? null,
              isCaught: card.isCaught,
              caughtByTeam: card.caughtByTeam || '',
            },
          });
        }
      });

      return NextResponse.json({
        success: true,
        message: 'Database restored from snapshot successfully',
      });
    }

    return NextResponse.json(
      { error: 'Invalid action. Expected "snapshot", "reset", or "restore"' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error during reset/restore operation:', error);
    return NextResponse.json(
      { error: 'Operation failed' },
      { status: 500 }
    );
  }
}
