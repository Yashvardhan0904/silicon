import type { Team, Card, Character } from '@/types';

// Fetch all teams ordered by score (descending)
export async function getTeams(): Promise<Team[]> {
  const res = await fetch('/api/teams', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch teams');
  return res.json();
}

// Fetch a single team by ID
export async function getTeamById(teamId: string): Promise<Team | null> {
  const res = await fetch(`/api/teams/${encodeURIComponent(teamId)}`, { cache: 'no-store' });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Failed to fetch team');
  return res.json();
}

// Add a character to team's collected characters
export async function addCharacterToTeam(teamId: string, characterId: string): Promise<void> {
  const team = await getTeamById(teamId);
  if (!team) throw new Error('Team not found');

  const cardsCaught = team.cardsCaught || [];
  if (!cardsCaught.includes(characterId)) {
    cardsCaught.push(characterId);
  }

  const res = await fetch(`/api/teams/${encodeURIComponent(teamId)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      cardsCaught,
      score: team.score + 1,
    }),
  });

  if (!res.ok) throw new Error('Failed to add character to team');
}

// Fetch all characters (aliased to getCards for quiz questions)
export async function getCharacters(): Promise<Character[]> {
  return getARCharacters();
}

// Fetch all cards
export async function getCards(): Promise<Card[]> {
  const res = await fetch('/api/cards', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch cards');
  return res.json();
}

// Fetch uncaught cards (isCaught = false)
export async function getUncaughtCards(): Promise<Card[]> {
  const res = await fetch('/api/cards?uncaught=true', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch uncaught cards');
  return res.json();
}

// Fetch cards caught by a specific team
export async function getCardsCaughtByTeam(teamId: string): Promise<Card[]> {
  const res = await fetch(`/api/cards?caughtByTeam=${encodeURIComponent(teamId)}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch cards caught by team');
  return res.json();
}

// Mark a card as caught by a team
export async function markCardAsCaught(cardId: string, teamId: string): Promise<void> {
  const res = await fetch(`/api/cards/${encodeURIComponent(cardId)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      isCaught: true,
      caughtByTeam: teamId,
    }),
  });
  if (!res.ok) throw new Error('Failed to mark card as caught');
}

// Fetch AR-enabled characters with their scan data
export async function getARCharacters(): Promise<Character[]> {
  const res = await fetch('/api/cards?ar=true', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch AR characters');
  return res.json();
}

// Fetch a single character by ID (for real-time updates)
export async function getCharacterById(characterId: string): Promise<Character | null> {
  const res = await fetch(`/api/cards/${encodeURIComponent(characterId)}`, {
    cache: 'no-store',
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Failed to fetch character by ID');
  return res.json();
}

// Catch a character (atomic operation)
export async function catchCharacter(
  characterId: string,
  teamId: string,
  characterValue: number
): Promise<{ success: boolean; alreadyCaught?: boolean; caughtByTeam?: string }> {
  const res = await fetch(`/api/cards/${encodeURIComponent(characterId)}/catch`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ teamId, characterValue }),
  });

  const data = await res.json();
  return data;
}

// Check if a character is already caught
export async function isCharacterCaught(characterId: string): Promise<boolean> {
  const card = await getCharacterById(characterId);
  return card?.isCaught === true;
}

// Create a new team
export async function createTeam(teamName: string): Promise<Team> {
  const res = await fetch('/api/teams', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ teamName }),
  });
  if (!res.ok) throw new Error('Failed to create team');
  return res.json();
}

// Update an existing team
export async function updateTeam(teamId: string, teamName: string): Promise<Team> {
  const res = await fetch(`/api/teams/${encodeURIComponent(teamId)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ teamName }),
  });
  if (!res.ok) throw new Error('Failed to update team');
  return res.json();
}

// Delete a team
export async function deleteTeam(teamId: string): Promise<void> {
  const res = await fetch(`/api/teams/${encodeURIComponent(teamId)}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete team');
}

// Create a new card
export async function createCard(cardData: Partial<Card> & { question?: string; options?: string[]; correctAnswer?: number; mindFile?: string; modelUrl?: string }): Promise<Card> {
  const res = await fetch('/api/cards', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cardData),
  });
  if (!res.ok) throw new Error('Failed to create card');
  return res.json();
}

// Update an existing card
export async function updateCard(cardId: string, cardData: Partial<Card> & { question?: string; options?: string[]; correctAnswer?: number; mindFile?: string; modelUrl?: string }): Promise<Card> {
  const res = await fetch(`/api/cards/${encodeURIComponent(cardId)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cardData),
  });
  if (!res.ok) throw new Error('Failed to update card');
  return res.json();
}

// Delete a card
export async function deleteCard(cardId: string): Promise<void> {
  const res = await fetch(`/api/cards/${encodeURIComponent(cardId)}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete card');
}

// Reset database: Mark all cards as uncaught and reset team scores
export async function resetDatabase(): Promise<void> {
  const res = await fetch('/api/admin/reset', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'reset' }),
  });
  if (!res.ok) throw new Error('Failed to reset database');
}

// Create a snapshot of current database state for undo
export async function createDatabaseSnapshot(): Promise<{
  teams: Team[];
  cards: Card[];
}> {
  const res = await fetch('/api/admin/reset', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'snapshot' }),
  });
  if (!res.ok) throw new Error('Failed to create snapshot');
  return res.json();
}

// Restore database from snapshot
export async function restoreDatabaseFromSnapshot(snapshot: {
  teams: Team[] | Array<{ id: string; [key: string]: unknown }>;
  cards: Card[] | Array<{ id: string; [key: string]: unknown }>;
}): Promise<void> {
  const res = await fetch('/api/admin/reset', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'restore', snapshot }),
  });
  if (!res.ok) throw new Error('Failed to restore database from snapshot');
}

// Check counter setup
export async function checkCounters(): Promise<Record<string, boolean>> {
  const res = await fetch('/api/admin/setup', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to check counters');
  return res.json();
}

// Initialize counters
export async function initializeFirestoreCounters(): Promise<void> {
  const res = await fetch('/api/admin/setup', { method: 'POST' });
  if (!res.ok) throw new Error('Failed to initialize counters');
}
