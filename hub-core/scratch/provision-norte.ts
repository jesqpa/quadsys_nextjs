import { createBranch } from "../src/app/actions";
import * as fs from "fs";
import * as path from "path";

async function main() {
  console.log("Creando Sucursal Norte en el Hub...");
  const result = await createBranch("Sucursal Norte", "Av. Libertador 4500, Norte");
  
  if (result.success) {
    console.log("Sucursal creada con éxito.");
    console.log("ID:", result.branchId);
    console.log("Token:", result.token);

    const envContent = `# Configuración Sucursal Norte
HUB_URL="http://localhost:3000"
STATION_TOKEN="${result.token}"
BRANCH_ID="${result.branchId}"
LOCAL_DB_URL="file:../data/node_norte.db"
PRISMA_SCHEMA="node"
`;

    const fileName = `.env_${result.token}`;
    fs.writeFileSync(path.join(process.cwd(), fileName), envContent);
    console.log(`Archivo ${fileName} generado.`);
  } else {
    console.error("Error creando sucursal:", result.error);
    process.exit(1);
  }
}

main().catch(console.error).finally(() => process.exit());
