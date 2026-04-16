"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, use } from "react";
import { Clock, Volume2, Wifi, WifiOff } from "lucide-react";
import { getDisplayData } from "../../node-actions";

export default function PublicDisplay({ params }: { params: Promise<{ branchId: string }> }) {
  const { branchId } = use(params);
  const [currentTicket, setCurrentTicket] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [isOnline, setIsOnline] = useState(true);
  const [time, setTime] = useState(new Date());

  const fetchData = async () => {
    const data = await getDisplayData(branchId);
    setCurrentTicket(data.current);
    setHistory(data.history);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 3000); // Polling cada 3s para el visor
    return () => clearInterval(interval);
  }, []); // Dependencia vacía para evitar bucles de actualización

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-hidden flex flex-col p-8 selection:bg-primary/30">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full" />
      </div>

      {/* Header */}
      <header className="flex justify-between items-center mb-12 relative z-10 glass p-6 rounded-3xl border-white/5">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center neon-glow">
            <span className="text-2xl font-black text-primary-foreground">Q</span>
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tighter uppercase italic">Smart-CliM</h1>
            <p className="text-xs text-primary font-bold tracking-[0.4em] uppercase">Sucursal Central</p>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2 text-primary font-mono text-2xl font-bold">
              <Clock size={20} />
              {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="flex items-center gap-2 mt-1">
              {isOnline ? <Wifi size={14} className="text-green-500" /> : <WifiOff size={14} className="text-red-500" />}
              <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest">
                {isOnline ? "Cloud Sync Active" : "Local Mode Only"}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        {/* Current Calling Section */}
        <section className="lg:col-span-2 flex flex-col">
          <div className="flex-1 glass rounded-[40px] border-primary/20 flex flex-col items-center justify-center text-center p-12 relative overflow-hidden">
            {/* Animated Ring Decor */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[600px] h-[600px] border border-primary/5 rounded-full"
            />
            
            <AnimatePresence mode="wait">
              {currentTicket ? (
                <motion.div
                  key={currentTicket.number}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.2, opacity: 0 }}
                  className="space-y-4"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-[22vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-primary to-primary/50 drop-shadow-[0_0_30px_rgba(0,255,255,0.3)]"
                  >
                    {currentTicket.number}
                  </motion.div>
                  
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-12 bg-primary/30" />
                    <span className="text-4xl font-bold text-neutral-400 uppercase tracking-[0.2em]">
                        {currentTicket.assignedTo || "Estación"}
                    </span>
                    <div className="h-px w-12 bg-primary/30" />
                  </div>
                </motion.div>
              ) : (
                <div className="text-neutral-600 text-6xl font-black italic uppercase tracking-widest opacity-20">
                  Esperando...
                </div>
              )}
            </AnimatePresence>

            {/* Calling Alert */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/30 neon-border">
              <Volume2 className="text-primary animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-widest">Atención en sala</span>
            </div>
          </div>
        </section>

        {/* History Section */}
        <aside className="glass rounded-[40px] border-white/5 flex flex-col p-8 overflow-hidden">
          <h2 className="text-xl font-black uppercase tracking-[0.2em] mb-8 text-neutral-400 border-b border-white/5 pb-4">Últimos Llamados</h2>
          
          <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
            <AnimatePresence>
              {history.map((t, idx) => (
                <motion.div
                  key={`${t.id}-${idx}`}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className={`p-6 rounded-3xl border border-white/5 flex items-center justify-between transition-all ${idx === 0 ? 'bg-white/5 border-primary/20' : 'opacity-40'}`}
                >
                  <div>
                    <div className="text-3xl font-black tracking-tight">{t.number}</div>
                    <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">{t.assignedTo || 'Estación'}</div>
                  </div>
                  {idx === 0 && (
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Volume2 size={16} className="text-primary" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 text-[10px] text-center text-neutral-600 uppercase font-black tracking-[0.4em]">
            Smart-CliM Hybrid Engine v2.0
          </div>
        </aside>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
      `}</style>
    </main>
  );
}
