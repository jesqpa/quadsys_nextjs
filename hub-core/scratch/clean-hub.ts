import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from "@prisma/adapter-pg"
import pg from "pg"

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🧹 Iniciando limpieza de nodos en el Hub...');

  try {
    // Eliminar en orden de dependencia para respetar llaves foráneas
    const tickets = await prisma.hubTicket.deleteMany({});
    console.log(`- ${tickets.count} tickets eliminados.`);

    const tokens = await prisma.stationToken.deleteMany({});
    console.log(`- ${tokens.count} tokens eliminados.`);

    const stations = await prisma.station.deleteMany({});
    console.log(`- ${stations.count} estaciones eliminadas.`);

    const branches = await prisma.branch.deleteMany({});
    console.log(`- ${branches.count} sucursales eliminadas.`);

    console.log('✨ Hub limpio y listo para nuevas provisiones.');
  } catch (error) {
    console.error('❌ Error durante la limpieza:', error);
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
    await pool.end()
  })
