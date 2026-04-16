import "dotenv/config";
import { defineConfig } from "prisma/config";

const isNodeSchema = process.env["PRISMA_SCHEMA"] === "node";

export default defineConfig({
  schema: isNodeSchema ? "prisma/node.prisma" : "prisma/schema.prisma",
  migrations: {
    path: isNodeSchema ? "prisma/node_migrations" : "prisma/migrations",
  },
  datasource: {
    url: isNodeSchema 
      ? (process.env["LOCAL_DB_URL"] || "file:E:/Proyectos desarrollo/quadsys_node.db") 
      : (process.env["DATABASE_URL"] || "postgresql://postgres:postgres@localhost:5432/quadsys"),
  },
});
