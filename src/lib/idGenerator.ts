import { prisma } from './prisma';

/**
 * Generates a sequential, padded ID for a new document in a collection.
 * Uses a Prisma transaction to ensure atomicity of the counter increment.
 *
 * @param collectionName - The name of the collection ('cards' or 'teams')
 * @param prefix - The prefix to use for the ID ('char_', 'team_', 'c1', 'c2', 'c3')
 * @returns A formatted ID string (e.g., 'c101', 'c201', 'c301', 'team_001')
 */
export async function generateNextId(
  collectionName: 'cards' | 'teams',
  prefix: 'char_' | 'team_' | 'c1' | 'c2' | 'c3'
): Promise<string> {
  const counterSuffix =
    prefix === 'c1' ? 'Legendary' :
    prefix === 'c2' ? 'Rare' :
    prefix === 'c3' ? 'Common' : '';

  const counterName = counterSuffix
    ? `${collectionName}${counterSuffix}Counter`
    : `${collectionName}Counter`;

  return await prisma.$transaction(async (tx) => {
    const counter = await tx.counter.upsert({
      where: { name: counterName },
      update: { count: { increment: 1 } },
      create: { name: counterName, count: 1 },
    });

    return `${prefix}${counter.count.toString().padStart(3, '0')}`;
  });
}

export function isValidId(id: string, prefix: 'char_' | 'team_' | 'c1' | 'c2' | 'c3'): boolean {
  const pattern = new RegExp(`^${prefix}\\d{2,3}$`);
  return pattern.test(id);
}

export function getIdNumber(id: string): number | null {
  const match = id.match(/\d+$/);
  if (!match) return null;
  return parseInt(match[0], 10);
}
