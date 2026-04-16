import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMART-CliM | Global Integrator",
  description: "Sistema de Gestión de Colas Federado de Próxima Generación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
