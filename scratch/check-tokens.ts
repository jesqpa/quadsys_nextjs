import { prisma } from "../src/lib/prisma";

async function main() {
  const tokens = await prisma.stationToken.findMany({
    include: { station: true }
  });
  console.log("Tokens en el Hub:", JSON.stringify(tokens, null, 2));
}

main().catch(console.error).finally(() => process.exit());
