import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface Params {
  params: Promise<{ id: string }>;
}

// POST /api/cards/[id]/catch - Atomically catch a character by a team
export async function POST(request: Request, { params }: Params) {
  try {
    const { id: characterId } = await params;
    const body = await request.json();
    const { teamId, characterValue } = body;

    if (!teamId) {
      return NextResponse.json(
        { error: 'teamId is required' },
        { status: 400 }
      );
    }

    const value = typeof characterValue === 'number' ? characterValue : 8;

    // Execute atomic transaction in PostgreSQL
    const result = await prisma.$transaction(async (tx) => {
      const card = await tx.card.findUnique({
        where: { id: characterId },
      });

      if (!card) {
        throw new Error('Character does not exist');
      }

      // Check if already caught (race condition check)
      if (card.isCaught) {
        return {
          success: false,
          alreadyCaught: true,
          caughtByTeam: card.caughtByTeam,
        };
      }

      // Mark card as caught
      await tx.card.update({
        where: { id: characterId },
        data: {
          isCaught: true,
          caughtByTeam: teamId,
        },
      });

      // Update team document: score increment and add card to cardsCaught array
      const team = await tx.team.findUnique({
        where: { id: teamId },
      });

      if (!team) {
        throw new Error('Team does not exist');
      }

      const updatedCardsCaught = team.cardsCaught.includes(characterId)
        ? team.cardsCaught
        : [...team.cardsCaught, characterId];

      await tx.team.update({
        where: { id: teamId },
        data: {
          score: { increment: value },
          cardsCaught: updatedCardsCaught,
        },
      });

      return { success: true };
    });

    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Error catching character';
    console.error('Error catching character:', error);
    return NextResponse.json(
      { error: message, success: false },
      { status: 400 }
    );
  }
}
