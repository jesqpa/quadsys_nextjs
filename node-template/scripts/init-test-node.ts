import { PrismaClient } from '../src/generated/node-client'
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3"
import Database from "better-sqlite3"

const adapter = new PrismaBetterSqlite3({ url: 'file:node.db' })
const prismaNode = new PrismaClient({ adapter });

async function main() {
  console.log('📦 Inicializando Nodo Local de Pruebas...');

  // Limpiar configuración previa si existe
  await prismaNode.localConfig.deleteMany();

  // 1. Configurar Nodo (Sucursal Central de Pruebas)
  const config = await prismaNode.localConfig.create({
    data: {
      id: 1,
      branchId: 'test-branch-id',
      branchName: 'Sucursal Alpha (Pruebas)',
      organizationId: 'test-org-id',
      hubToken: 'DEBUG_DESK_TOKEN_123',
    },
  });
  console.log(`✔ Nodo configurado: ${config.branchName}`);

  // 2. Mock: Crear algunos tickets en espera
  await prismaNode.localTicket.createMany({
    data: [
        { number: 'A-01', status: 'WAITING', isPriority: false, priorityLevel: 10 },
        { number: 'A-02', status: 'WAITING', isPriority: false, priorityLevel: 20 },
        { number: 'B-01', status: 'WAITING', isPriority: true, priorityLevel: 100 },
        { number: 'C-01', status: 'WAITING', hasAppointment: true, priorityLevel: 50 },
    ]
  });
  console.log('✔ Fichas de prueba creadas (4)');

  console.log('🎉 Nodo listo para el primer ciclo de atención.');
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prismaNode.$disconnect()
  })
