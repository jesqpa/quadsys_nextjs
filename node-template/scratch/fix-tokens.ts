import { prisma } from "../src/lib/prisma";

async function main() {
  const token = "test-station-token";
  
  // Buscar la estación "Mesa de Atención 1" y actualizar su token
  const station = await prisma.station.findFirst({
    where: { name: "Mesa de Atención 1" }
  });

  if (station) {
    await prisma.stationToken.upsert({
      where: { stationId: station.id },
      update: { token, isActive: true },
      create: { stationId: station.id, token, isActive: true }
    });
    console.log("Token for 'Mesa de Atención 1' updated to:", token);
  } else {
    console.log("Station 'Mesa de Atención 1' not found.");
  }
}

main().catch(console.error).finally(() => process.exit());
