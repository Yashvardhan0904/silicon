import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface Params {
  params: Promise<{ id: string }>;
}

// GET /api/teams/[id] - Fetch single team by ID
export async function GET(request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const team = await prisma.team.findUnique({
      where: { id },
    });

    if (!team) {
      return NextResponse.json(
        { error: 'Team not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(team);
  } catch (error) {
    console.error('Error fetching team:', error);
    return NextResponse.json(
      { error: 'Failed to fetch team' },
      { status: 500 }
    );
  }
}

// PUT /api/teams/[id] - Update team
export async function PUT(request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const body = await request.json();

    const updated = await prisma.team.update({
      where: { id },
      data: {
        ...(body.teamName !== undefined && { teamName: body.teamName.trim() }),
        ...(body.score !== undefined && { score: body.score }),
        ...(body.cardsCaught !== undefined && { cardsCaught: body.cardsCaught }),
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating team:', error);
    return NextResponse.json(
      { error: 'Failed to update team' },
      { status: 500 }
    );
  }
}

// DELETE /api/teams/[id] - Delete team
export async function DELETE(request: Request, { params }: Params) {
  try {
    const { id } = await params;
    await prisma.team.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting team:', error);
    return NextResponse.json(
      { error: 'Failed to delete team' },
      { status: 500 }
    );
  }
}
