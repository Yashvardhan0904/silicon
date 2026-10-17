import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const LEGENDARY_TARGET_MAPPING = {
  c1001: 0, // Mew Two
  c1004: 1, // Alienx
  c1005: 2, // Muzan
  c1010: 3, // Madara
  c1006: 4, // Beerus
  c1007: 5, // Goku
  c1008: 6, // Satoru Gojo
  c1011: 7, // Sakuna
  c1012: 8, // Eren
  c1009: 9, // Hornet
};

async function sync() {
  console.log("Synchronizing Legendary cards targetIndex with legendary.mind...");
  for (const [id, targetIndex] of Object.entries(LEGENDARY_TARGET_MAPPING)) {
    const updated = await prisma.card.update({
      where: { id },
      data: { targetIndex },
    });
    console.log(`Updated ${updated.name.padEnd(14)} (${id}) -> targetIndex: ${targetIndex}`);
  }
  console.log("Legendary sync completed successfully!");
}

sync().catch(console.error).finally(() => prisma.$disconnect());
