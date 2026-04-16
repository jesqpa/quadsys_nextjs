import { PrismaClient } from "../generated/node-client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const clients: Record<string, PrismaClient> = {};

export function getPrismaNode(branchId: string) {
  if (clients[branchId]) return clients[branchId];

  let dbUrl = process.env.LOCAL_DB_URL || "file:./data/node.db";
  
  if (branchId !== "test-branch-id" && !process.env.LOCAL_DB_URL) {
    dbUrl = `file:../data/node_${branchId.slice(0, 8)}.db`;
  }

  console.log(`[Database Selector] Branch: ${branchId} -> DB: ${dbUrl}`);

  const adapter = new PrismaBetterSqlite3({ url: dbUrl });
  const client = new PrismaClient({ adapter });
  
  clients[branchId] = client;
  return client;
}
