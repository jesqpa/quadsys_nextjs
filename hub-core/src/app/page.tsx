"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, 
  LayoutDashboard, 
  Server, 
  Shield, 
  Globe, 
  Plus, 
  Copy, 
  Check, 
  Loader2, 
  Info,
  RefreshCw
} from "lucide-react";
import { getDashboardStats, generateNewToken, getFederatedNodes } from "./actions";

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");
  const [stats, setStats] = useState({ activeNodes: 0, totalTickets: 0, status: "Loading..." });
  const [nodes, setNodes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [newToken, setNewToken] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const fetchAll = async () => {
    setLoading(true);
    const [s, n] = await Promise.all([getDashboardStats(), getFederatedNodes()]);
    setStats(s);
    setNodes(n);
    setLoading(false);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleGenerateToken = async () => {
    setGenerating(true);
    const result = await generateNewToken();
    if (result.success) {
      setNewToken(result.token || "");
    } else {
      alert("Error: " + result.error);
    }
    setGenerating(false);
    fetchAll();
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black text-white p-6">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none mb-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* Navbar */}
        <nav className="flex items-center justify-between p-4 glass rounded-2xl border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center neon-glow">
              <Globe className="text-primary-foreground w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tighter">SMART-CliM</h1>
              <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-semibold">Global Integrator</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={fetchAll}
              className="p-2 rounded-xl hover:bg-white/5 transition-colors text-neutral-400 hover:text-white"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-neutral-400">Hub Active</span>
            </div>
            <button className="p-2 rounded-xl hover:bg-white/5 transition-colors">
              <Shield className="w-5 h-5 text-neutral-400" />
            </button>
          </div>
        </nav>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <aside className="md:col-span-1 space-y-4">
            <div className="glass rounded-2xl p-2 space-y-1">
              <NavItem 
                icon={<LayoutDashboard size={18}/>} 
                label="Overview" 
                active={activeTab === "overview"} 
                onClick={() => setActiveTab("overview")} 
              />
              <NavItem 
                icon={<Server size={18}/>} 
                label="Federated Nodes" 
                active={activeTab === "nodes"} 
                onClick={() => setActiveTab("nodes")} 
              />
              <NavItem 
                icon={<Activity size={18}/>} 
                label="System Analytics" 
                active={activeTab === "analytics"} 
                onClick={() => setActiveTab("analytics")} 
              />
            </div>

            <div className="glass rounded-2xl p-6 border-primary/20 bg-primary/5">
              <h3 className="text-sm font-semibold mb-2">Provisión de Nodos</h3>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed">Genera nuevos tokens de enlace para sucursales físicas o instancias cloud.</p>
              <button 
                onClick={handleGenerateToken}
                disabled={generating}
                className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {generating ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />}
                Nuevo Token
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <section className="md:col-span-3 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard label="Nodos Activos" value={stats.activeNodes.toString()} sub="Federados" icon={<Server className="text-primary" />} />
              <StatCard label="Turnos Hoy" value={stats.totalTickets.toString()} sub="Sync Global" icon={<Activity className="text-secondary" />} />
              <StatCard label="Saturación" value={stats.status} sub="Health Check" icon={<Shield className={stats.status === "Optimum" ? "text-green-500" : "text-yellow-500"} />} />
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div 
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  {newToken && (
                    <div className="p-6 rounded-3xl bg-secondary/10 border border-secondary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center">
                          <Check className="text-secondary" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-secondary uppercase tracking-wider">Token Generado</p>
                          <p className="font-mono text-sm">{newToken}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => copyToClipboard(newToken)}
                          className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
                        >
                          {copied ? <Check size={14} /> : <Copy size={14} />}
                          {copied ? "Copiado" : "Copiar Token"}
                        </button>
                        <button 
                          onClick={() => setNewToken(null)}
                          className="px-4 py-2 rounded-xl text-xs font-bold text-neutral-500 hover:text-white transition-all"
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="glass rounded-3xl p-8 border-white/5 min-h-[400px] flex items-center justify-center text-center">
                    {loading ? (
                      <Loader2 className="w-10 h-10 text-primary animate-spin" />
                    ) : nodes.length === 0 ? (
                      <div className="max-w-md">
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
                          <Server className="w-8 h-8 text-neutral-500" />
                        </div>
                        <h2 className="text-2xl font-bold mb-3 tracking-tight">No se detectan Nodos</h2>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                          Comienza el despliegue federado generando un token de provisión para tu primera sucursal. Los nodos aparecerán aquí en tiempo real una vez enlazados.
                        </p>
                        <button className="px-6 py-3 rounded-2xl border border-white/10 hover:bg-white/5 transition-all text-sm font-semibold">
                          Ver Guía de Despliegue
                        </button>
                      </div>
                    ) : (
                      <div className="w-full text-left self-start">
                         <h3 className="text-xl font-bold mb-6">Nodos Recientes</h3>
                         <div className="grid grid-cols-1 gap-4">
                           {nodes.map(node => (
                             <div key={node.id} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                               <div className="flex items-center gap-4">
                                 <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                   <Server size={20} className="text-primary" />
                                 </div>
                                 <div>
                                   <h4 className="font-bold">{node.name}</h4>
                                   <p className="text-xs text-neutral-500">{node.location || 'Ubicación remota'}</p>
                                 </div>
                                </div>
                                <div className="flex items-center gap-6">
                                  <div className="text-right">
                                    <p className="text-xs text-neutral-500 uppercase font-semibold">Estaciones</p>
                                    <p className="font-bold">{node.stations.length}</p>
                                  </div>
                                  <div className="w-2 h-2 rounded-full bg-green-500 neon-glow shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                </div>
                             </div>
                           ))}
                         </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === "nodes" && (
                <motion.div 
                  key="nodes"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="glass rounded-3xl p-8 border-white/5 min-h-[400px]"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight">Infraestructura Federada</h2>
                      <p className="text-sm text-neutral-500">Gestión de sucursales físicas y nodos lógicos.</p>
                    </div>
                    <button 
                      onClick={() => {
                        const name = prompt("Nombre de la Sucursal:");
                        const loc = prompt("Ubicación:");
                        if (name && loc) {
                          import("./actions").then(async ({ createBranch }) => {
                            setGenerating(true);
                            const res = await createBranch(name, loc);
                            if (res.success) {
                              setNewToken(res.token || "");
                              fetchAll();
                            } else {
                              alert("Error: " + res.error);
                            }
                            setGenerating(false);
                          });
                        }
                      }}
                      className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs flex items-center gap-2"
                    >
                      <Plus size={14} />
                      Añadir Sucursal
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {nodes.map(node => (
                      <div key={node.id} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                              <Globe className="text-primary" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold">{node.name}</h3>
                              <p className="text-xs text-neutral-500">ID: {node.id}</p>
                            </div>
                          </div>
                          <button className="p-2 rounded-lg hover:bg-white/5 text-neutral-500">
                            <Info size={18} />
                          </button>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-white/5">
                          {node.stations.map((station: any) => (
                            <div key={station.id} className="p-3 rounded-xl bg-black/40 border border-white/5">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] font-bold text-neutral-500 uppercase">{station.type}</span>
                                <div className={`w-1.5 h-1.5 rounded-full ${station.token?.isActive ? 'bg-green-500' : 'bg-red-500'}`} />
                              </div>
                              <p className="text-sm font-semibold">{station.name}</p>
                              {station.token && (
                                <p className="text-[10px] font-mono text-neutral-600 mt-1 truncate">{station.token.token}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "analytics" && (
                <motion.div 
                  key="analytics"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="glass rounded-3xl p-8 border-white/5 min-h-[400px] flex items-center justify-center"
                >
                   <div className="text-center">
                    <Activity className="w-12 h-12 text-primary mx-auto mb-4 opacity-20" />
                    <h3 className="text-lg font-bold text-neutral-400">Analíticas en tiempo real próximamente</h3>
                    <p className="text-sm text-neutral-600">Conectando con el motor BullMQ para visualización de carga.</p>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>
      </div>
    </main>
  );
}

function NavItem({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active ? 'bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20' : 'hover:bg-white/5 text-neutral-400'}`}
    >
      {icon}
      <span className="text-sm">{label}</span>
      {active && (
        <motion.div 
          layoutId="active-pill"
          className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-foreground" 
        />
      )}
    </button>
  );
}

function StatCard({ label, value, sub, icon }: { label: string, value: string, sub: string, icon: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl p-6 border-white/5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">{label}</span>
        <div className="p-2 bg-white/5 rounded-lg border border-white/5">
          {icon}
        </div>
      </div>
      <div className="space-y-1">
        <h4 className="text-3xl font-bold tracking-tighter">{value}</h4>
        <p className="text-xs text-neutral-500">{sub}</p>
      </div>
    </div>
  );
}
