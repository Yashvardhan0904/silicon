import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const RARE_TARGET_MAPPING = {
  c2005: 2,  // Charizard
  c2016: 3,  // Rengoku
  c2019: 4,  // Whis
  c2010: 5,  // Itadori
  c2015: 6,  // Reiner
  c2006: 7,  // Erwin
  c2002: 8,  // brolly
  c2012: 9,  // Nezuko
  c2013: 10, // Nobara
  c2014: 11, // Pikachu
  c2018: 12, // Tanjiro
  c2017: 13, // Snorlax
  c2009: 14, // HeatBlast
  c2011: 15, // Megumi
  c2007: 16, // DiamondHead
  c2021: 17, // Armin
  c2020: 18, // XLR8
  c2008: 19, // Four Arms
};

async function sync() {
  console.log("Synchronizing Rare cards targetIndex with rare.mind...");
  for (const [id, targetIndex] of Object.entries(RARE_TARGET_MAPPING)) {
    const updated = await prisma.card.update({
      where: { id },
      data: { targetIndex },
    });
    console.log(`Updated ${updated.name.padEnd(14)} (${id}) -> targetIndex: ${targetIndex}`);
  }
  console.log("Sync completed successfully!");
}

sync().catch(console.error).finally(() => prisma.$disconnect());
