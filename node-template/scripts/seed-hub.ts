import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from "@prisma/adapter-pg"
import pg from "pg"
import { v4 as uuidv4 } from 'uuid';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🚀 Iniciando seeding del Hub de Pruebas...');

  // 1. Crear Organización de Prueba
  const org = await prisma.organization.upsert({
    where: { id: 'test-org-id' },
    update: {},
    create: {
      id: 'test-org-id',
      name: 'Corporación de Pruebas Tech',
    },
  });
  console.log(`✔ Org creada: ${org.name}`);

  // 2. Crear Sucursal de Prueba (Node)
  const branch = await prisma.branch.upsert({
    where: { id: 'test-branch-id' },
    update: {},
    create: {
      id: 'test-branch-id',
      name: 'Sucursal Alpha (Pruebas)',
      organizationId: org.id,
      location: 'Laboratorio de Desarrollo',
    },
  });
  console.log(`✔ Sucursal creada: ${branch.name}`);

  // 3. Crear Estaciones de Prueba
  const desk = await prisma.station.create({
    data: {
      id: uuidv4(),
      name: 'Mesa de Atención 1',
      type: 'DESK',
      branchId: branch.id,
    },
  });
  
  const totem = await prisma.station.create({
    data: {
      id: uuidv4(),
      name: 'Emisor Totem Acceso',
      type: 'TOTEM',
      branchId: branch.id,
    },
  });

  // 4. Generar Tokens de Provisión para las estaciones
  const deskToken = await prisma.stationToken.create({
    data: {
      stationId: desk.id,
      token: 'DEBUG_DESK_TOKEN_123',
      isActive: true,
    }
  });

  const totemToken = await prisma.stationToken.create({
    data: {
      stationId: totem.id,
      token: 'DEBUG_TOTEM_TOKEN_456',
      isActive: true,
    }
  });

  console.log('\n--- 🔑 TOKENS DE PRUEBA GENERADOS ---');
  console.log(`DESK TOKEN:  ${deskToken.token}`);
  console.log(`TOTEM TOKEN: ${totemToken.token}`);
  console.log('-------------------------------------\n');
  
  console.log('🎉 Ambiente del Hub preparado para el primer enlace.');
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
