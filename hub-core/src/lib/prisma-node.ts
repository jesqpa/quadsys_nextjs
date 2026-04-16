import { PrismaClient } from "../generated/node-client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const clients: Record<string, PrismaClient> = {};

export function getPrismaNode(branchId: string) {
  if (clients[branchId]) return clients[branchId];

  let dbUrl = "file:E:/Proyectos desarrollo/quadsys_node.db";
  
  if (branchId !== "test-branch-id") {
    dbUrl = `file:E:/Proyectos desarrollo/quadsys_node_${branchId.slice(0, 8)}.db`;
    if (branchId === "bfcc673a-aa09-48bf-ad9e-701192a349df") {
        dbUrl = "file:E:/Proyectos desarrollo/quadsys_node_norte.db";
    }
  }

  console.log(`[Database Selector] Branch: ${branchId} -> DB: ${dbUrl}`);

  const adapter = new PrismaBetterSqlite3({ url: dbUrl });
  const client = new PrismaClient({ adapter });
  
  clients[branchId] = client;
  return client;
}
