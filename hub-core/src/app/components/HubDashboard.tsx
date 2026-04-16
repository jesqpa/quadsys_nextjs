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
import { getDashboardStats, generateNewToken, getFederatedNodes, createBranch } from "../actions";

export default function HubDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [stats, setStats] = useState({ activeNodes: 0, totalTickets: 0, status: "Loading..." });
  const [nodes, setNodes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [deployedNode, setDeployedNode] = useState<{ id: string, name: string, token: string } | null>(null);
  const [showProvisionModal, setShowProvisionModal] = useState(false);
  const [provisionData, setProvisionData] = useState({ name: "", location: "" });
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

  const handleProvision = async (e: React.FormEvent) => {
    e.preventDefault();
    setGenerating(true);
    const result = await createBranch(provisionData.name, provisionData.location);
    if (result.success) {
      setDeployedNode({ 
        id: result.branchId || "N/A", 
        name: result.branchName || provisionData.name, 
        token: result.token || "" 
      });
      setShowProvisionModal(false);
      setProvisionData({ name: "", location: "" });
      setActiveTab("overview");
      fetchAll();
    } else {
      alert("Error: " + result.error);
    }
    setGenerating(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black text-white p-6">
      <div className="fixed inset-0 overflow-hidden pointer-events-none mb-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
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
            <button onClick={fetchAll} className="p-2 rounded-xl hover:bg-white/5 transition-colors text-neutral-400 hover:text-white">
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-neutral-400">Hub Active</span>
            </div>
          </div>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="md:col-span-1 space-y-4">
            <div className="glass rounded-2xl p-2 space-y-1">
              <NavItem icon={<LayoutDashboard size={18}/>} label="Overview" active={activeTab === "overview"} onClick={() => setActiveTab("overview")} />
              <NavItem icon={<Server size={18}/>} label="Federated Nodes" active={activeTab === "nodes"} onClick={() => setActiveTab("nodes")} />
            </div>

            <div className="glass rounded-2xl p-6 border-primary/20 bg-primary/5">
              <h3 className="text-sm font-semibold mb-2">Provisión de Nodos</h3>
              <button 
                onClick={() => setShowProvisionModal(true)}
                disabled={generating}
                className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
              >
                {generating ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />}
                Provisionar Nodo
              </button>
            </div>
          </aside>

          <section className="md:col-span-3 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard label="Nodos Activos" value={stats.activeNodes.toString()} sub="Federados" icon={<Server className="text-primary" />} />
              <StatCard label="Turnos Hoy" value={stats.totalTickets.toString()} sub="Sync Global" icon={<Activity className="text-secondary" />} />
              <StatCard label="Saturación" value={stats.status} sub="Health Check" icon={<Shield className="text-green-500" />} />
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div key="overview" className="space-y-6">
                  {deployedNode && (
                    <div className="p-8 rounded-[32px] bg-secondary/10 border border-secondary/20 relative">
                      <div className="flex flex-col gap-6">
                        <h3 className="text-xl font-bold">Sucursal Creada con Éxito</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl bg-white/5 space-y-1">
                            <p className="text-[10px] text-neutral-500 uppercase">Station Token</p>
                            <p className="font-mono text-xs truncate">{deployedNode.token}</p>
                          </div>
                        </div>
                        <div className="p-4 rounded-xl bg-black/40 border border-secondary/30">
                          <p className="text-xs text-neutral-400 italic">
                            * Crea el archivo <span className="text-secondary font-bold">.env_{deployedNode.token}</span> en la raíz.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="glass rounded-3xl p-8 border-white/5 min-h-[400px]">
                    <h3 className="text-xl font-bold mb-6">Nodos Recientes</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {nodes.map(node => (
                        <div key={node.id} className="p-4 rounded-2xl bg-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <Server size={20} className="text-primary" />
                            <div>
                              <h4 className="font-bold">{node.name}</h4>
                              <p className="text-xs text-neutral-500">{node.location}</p>
                            </div>
                          </div>
                          <div className="w-2 h-2 rounded-full bg-green-500 neon-glow" />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>
      </div>

      <AnimatePresence>
        {showProvisionModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowProvisionModal(false)} />
            <motion.div className="relative w-full max-w-lg glass rounded-[32px] p-8">
              <h2 className="text-2xl font-bold mb-8">Provisionar Nodo</h2>
              <form onSubmit={handleProvision} className="space-y-6">
                <input required type="text" placeholder="Nombre" value={provisionData.name} onChange={(e) => setProvisionData({...provisionData, name: e.target.value})} className="w-full bg-white/5 rounded-2xl px-5 py-4 border border-white/10" />
                <input required type="text" placeholder="Ubicación" value={provisionData.location} onChange={(e) => setProvisionData({...provisionData, location: e.target.value})} className="w-full bg-white/5 rounded-2xl px-5 py-4 border border-white/10" />
                <button type="submit" className="w-full py-4 rounded-2xl bg-primary text-black font-bold">Confirmar</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavItem({ icon, label, active = false, onClick }: any) {
  return (
    <button onClick={onClick} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active ? 'bg-primary text-black font-bold' : 'hover:bg-white/5 text-neutral-400'}`}>
      {icon} <span className="text-sm">{label}</span>
    </button>
  );
}

function StatCard({ label, value, sub, icon }: any) {
  return (
    <div className="glass rounded-2xl p-6 border-white/5">
      <div className="flex items-center justify-between mb-4">{icon}</div>
      <h4 className="text-3xl font-bold tracking-tighter">{value}</h4>
      <p className="text-xs text-neutral-500">{sub}</p>
    </div>
  );
}
