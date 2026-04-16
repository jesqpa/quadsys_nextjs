import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 
     Movemos el archivo node.db a la carpeta prisma/ para evitar loops de recompilación.
     Prisma y Next.js gestionan mejor los archivos dentro de esa carpeta.
  */
  turbopack: {}, 
};

export default nextConfig;
