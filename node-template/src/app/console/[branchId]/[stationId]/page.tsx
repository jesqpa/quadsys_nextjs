"use client";

import { motion } from "framer-motion";
import { User, PhoneForwarded, CheckCircle2, XCircle, Timer, Users, UserPlus, Loader2 } from "lucide-react";
import { useState, useEffect, use } from "react";
import { callNextTicket, completeTicket, getQueueSnapshot } from "../../../node-actions";

export default function OperatorConsole({ params }: { params: Promise<{ branchId: string, stationId: string }> }) {
  const { branchId, stationId } = use(params);
  const [isServing, setIsServing] = useState(false);
  const [currentTicket, setCurrentTicket] = useState<any>(null);
  const [queue, setQueue] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);

  const fetchQueue = async () => {
    const data = await getQueueSnapshot(branchId);
    setQueue(data);
  };

  useEffect(() => {
    fetchQueue();
    const interval = setInterval(fetchQueue, 10000); // Polling cada 10s
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let interval: any;
    if (isServing) {
      interval = setInterval(() => setTimer(t => t + 1), 1000);
    } else {
      setTimer(0);
    }
    return () => clearInterval(interval);
  }, [isServing]);

  const handleNext = async () => {
    setLoading(true);
    const result = await callNextTicket(branchId, stationId, "Juan Pérez");
    if (result.success && result.ticket) {
      setCurrentTicket(result.ticket);
      setIsServing(true);
    } else {
      alert(result.error || "No hay tickets disponibles");
    }
    setLoading(false);
    fetchQueue();
  };

  const handleFinish = async () => {
    if (!currentTicket) return;
    setLoading(true);
    const result = await completeTicket(branchId, currentTicket.id, stationId);
    if (result.success) {
      setIsServing(false);
      setCurrentTicket(null);
    }
    setLoading(false);
    fetchQueue();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const activeHeaderStyle = "bg-primary/20 border-primary/40 neon-border p-6 rounded-3xl transition-all duration-500 shadow-[0_0_30px_rgba(0,255,255,0.1)]";
  const idleHeaderStyle = "glass p-6 rounded-3xl border-white/5 opacity-50";

  return (
    <main className="min-h-screen bg-black text-white p-6 space-y-6 flex flex-col max-w-5xl mx-auto relative overflow-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.1)_0%,_black_70%)]" />

      {/* Header Info */}
      <header className="flex items-center justify-between p-4 glass rounded-2xl border-white/5 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
            <User className="text-primary w-5 h-5" />
          </div>
          <div>
            <h1 className="text-sm font-black tracking-widest uppercase">Operador: Juan Pérez</h1>
            <p className="text-[10px] text-primary italic font-bold">Mesa {stationId.slice(-1)} • {branchId === "test-branch-id" ? "Sucursal Central" : "Sucursal Norte"}</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <StatMini label="En espera" value={queue.length.toString()} icon={<Users size={12}/>} />
          <StatMini label="Tiempo Promedio" value="08:24" icon={<Timer size={12}/>} />
        </div>
      </header>

      {/* Call Area */}
      <section className={`${isServing ? activeHeaderStyle : idleHeaderStyle} relative z-10`}>
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            {isServing ? (
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                <span className="text-[10px] uppercase font-black text-primary tracking-[0.3em] mb-2 block">Atendiendo Ahora</span>
                <div className="flex items-end gap-4">
                  <h2 className="text-7xl font-black tracking-tighter text-white">{currentTicket?.number}</h2>
                  <span className="text-sm font-bold bg-white/10 px-3 py-1 rounded-full mb-3 text-neutral-400 border border-white/5">
                    {currentTicket?.isPriority ? "PRIORITARIO" : "GENERAL"}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-4 text-primary font-mono text-lg animate-pulse">
                  <Timer size={18} />
                  {formatTime(timer)} en atención
                </div>
              </motion.div>
            ) : (
              <div className="text-neutral-500 font-bold uppercase tracking-widest text-sm flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-neutral-700" />
                No hay atención activa
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3">
            {!isServing ? (
              <button 
                onClick={handleNext}
                disabled={loading}
                className="group relative overflow-hidden px-8 py-5 rounded-3xl bg-primary text-primary-foreground font-black text-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-4 neon-glow disabled:opacity-50"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                {loading ? <Loader2 className="animate-spin relative z-10" /> : <PhoneForwarded className="relative z-10" />}
                <span className="relative z-10 italic">SIGUIENTE TURNO</span>
              </button>
            ) : (
              <div className="flex gap-3">
                <ActionButton icon={<XCircle size={20}/>} label="CANCELAR" color="text-red-500 border-red-500/20 bg-red-500/5" onClick={() => setIsServing(false)} />
                <ActionButton icon={loading ? <Loader2 className="animate-spin"/> : <CheckCircle2 size={24}/>} label="TERMINAR" color="text-green-500 border-green-500/20 bg-green-500/10" variant="lg" onClick={handleFinish} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Control Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 relative z-10">
        <div className="glass rounded-[40px] p-8 border-white/5 space-y-6">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500 mb-6 font-bold">Controles Avanzados</h3>
          <div className="grid grid-cols-2 gap-4">
            <SecondaryButton icon={<PhoneForwarded size={16}/>} label="RE-LLAMAR" />
            <SecondaryButton icon={<UserPlus size={16}/>} label="RE-ASIGNAR" />
            <SecondaryButton icon={<PhoneForwarded size={16} className="rotate-90"/>} label="TRANSFERIR" />
            <SecondaryButton icon={<User size={16}/>} label="EDITAR FICHA" />
          </div>
        </div>

        <div className="glass rounded-[40px] p-8 border-white/5 flex flex-col">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500 mb-6 font-bold flex items-center justify-between">
            Próximos en Fila
            <span className="text-[10px] bg-white/5 px-2 py-1 rounded-lg">{queue.length} esperando</span>
          </h3>
          <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {queue.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center opacity-20 italic text-sm">
                Sin tickets pendientes
              </div>
            ) : (
              queue.map(item => (
                <QueueItem 
                  key={item.id}
                  num={item.number} 
                  label={item.isPriority ? "Prioritario" : "General"} 
                  time={new Date(item.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} 
                  emoji={item.isPriority ? "⭐" : "👤"} 
                />
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function StatMini({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-end">
      <span className="text-[9px] uppercase font-black text-neutral-500 tracking-widest mb-1">{label}</span>
      <div className="flex items-center gap-2 font-mono text-sm font-bold text-white/80">
        {icon}
        {value}
      </div>
    </div>
  );
}

function ActionButton({ icon, label, color, variant = "md", onClick }: { icon: React.ReactNode, label: string, color: string, variant?: "md" | "lg", onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-4 rounded-3xl border transition-all hover:scale-105 active:scale-95 ${color} ${variant === "lg" ? "px-10" : ""}`}
    >
      {icon}
      <span className="text-[10px] font-black uppercase tracking-widest mt-2 italic">{label}</span>
    </button>
  );
}

function SecondaryButton({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-primary/10 hover:border-primary/20 hover:text-primary transition-all text-xs font-black uppercase italic tracking-widest">
      {icon}
      {label}
    </button>
  );
}

function QueueItem({ num, label, time, emoji }: { num: string, label: string, time: string, emoji: string }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-white/2">
      <div className="flex items-center gap-4">
        <span className="text-lg font-black tracking-tight">{num}</span>
        <div className="flex flex-col">
          <span className="text-[9px] font-bold text-neutral-500 uppercase flex items-center gap-1">
            {emoji} {label}
          </span>
          <span className="text-[9px] text-neutral-600">{time}</span>
        </div>
      </div>
      <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
    </div>
  );
}
