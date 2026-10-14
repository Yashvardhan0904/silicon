import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { generateNextId } from '@/lib/idGenerator';

// GET /api/teams - List all teams ordered by score descending
export async function GET() {
  try {
    const teams = await prisma.team.findMany({
      orderBy: { score: 'desc' },
    });

    return NextResponse.json(teams);
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
