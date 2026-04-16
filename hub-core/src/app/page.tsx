"use client";

import { useState, useEffect } from "react";
import HubDashboard from "./components/HubDashboard";
import NodeMenu from "./components/NodeMenu";
import { Loader2 } from "lucide-react";

export default function RootPage() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    // Obtenemos el rol desde una API o variable inyectada para evitar problemas de SSR
    fetch('/api/system/role')
      .then(res => res.json())
      .then(data => setRole(data.role))
      .catch(() => setRole('HUB'));
  }, []);

  if (!role) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  return role === "NODE" ? <NodeMenu /> : <HubDashboard />;
}
