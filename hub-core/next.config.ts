import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 
     Movemos el archivo node.db a la carpeta prisma/ para evitar loops de recompilación.
     Prisma y Next.js gestionan mejor los archivos dentro de esa carpeta.
  */
  distDir: process.env.PORT ? `.next_${process.env.PORT}` : '.next',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        net: false,
        tls: false,
        child_process: false,
      };
    }
    return config;
  },
  turbopack: {}, 
};

export default nextConfig;
