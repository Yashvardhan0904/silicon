import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { generateNextId } from '@/lib/idGenerator';

// GET /api/teams - List all teams ordered by score descending (tie-breaker: earlier last caught card time)
export async function GET() {
  try {
    const teams = await prisma.team.findMany();

    // Sort teams:
    // 1. Primary: Score descending (highest score first)
    // 2. Secondary (Tie-breaker): Team that achieved that last point first (earliest lastCaughtAt)
    // 3. Fallback: Registration time (createdAt ascending)
    const sortedTeams = teams.sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      const aTime = a.lastCaughtAt ? new Date(a.lastCaughtAt).getTime() : null;
      const bTime = b.lastCaughtAt ? new Date(b.lastCaughtAt).getTime() : null;

      if (aTime !== null && bTime !== null) {
        if (aTime !== bTime) {
          return aTime - bTime; // earlier timestamp = achieved point first
        }
      } else if (aTime !== null) {
        return -1;
      } else if (bTime !== null) {
        return 1;
      }

      const aCreated = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const bCreated = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return aCreated - bCreated;
    });

    return NextResponse.json(sortedTeams);
  } catch (error) {
    console.error('Error fetching teams:', error);
    return NextResponse.json(
      { error: 'Failed to fetch teams' },
      { status: 500 }
    );
  }
}

// POST /api/teams - Create a new team with auto-generated ID
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { teamName } = body;

    if (!teamName || typeof teamName !== 'string' || !teamName.trim()) {
      return NextResponse.json(
        { error: 'Team name is required' },
        { status: 400 }
      );
    }

    const newTeamId = await generateNextId('teams', 'team_');

    const newTeam = await prisma.team.create({
      data: {
        id: newTeamId,
        teamName: teamName.trim(),
        score: 0,
        cardsCaught: [],
      },
    });

    return NextResponse.json(newTeam, { status: 201 });
  } catch (error) {
    console.error('Error creating team:', error);
    return NextResponse.json(
      { error: 'Failed to create team' },
      { status: 500 }
    );
  }
}
