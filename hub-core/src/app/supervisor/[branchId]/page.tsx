"use client";

import { motion } from "framer-motion";
import { Activity, Users, Clock, AlertTriangle, Play, Pause, RefreshCw, BarChart3, Radio } from "lucide-react";

export default function LocalSupervisor({ params }: { params: { branchId: string } }) {
  return (
    <main className="min-h-screen bg-black text-white p-8 space-y-8 flex flex-col max-w-7xl mx-auto">
      {/* Header */}
      <header className="flex items-center justify-between glass p-6 rounded-3xl border-white/5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center border border-secondary/30">
            <BarChart3 className="text-secondary w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter uppercase italic">Monitoreo Local: Sucursal Central</h1>
            <p className="text-[10px] text-secondary font-bold tracking-[0.3em] uppercase">Control de Piso • Tiempo Real</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <StatusBadge label="RED FEDERADA" value="SINCRONIZADA" color="green" />
          <div className="h-8 w-px bg-white/10" />
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-black text-xs hover:scale-105 transition-all">
             <RefreshCw size={14} className="animate-spin" />
             ACTUALIZAR
          </button>
        </div>
      </header>

      {/* KPI Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard label="Personas en Sala" value="24" sub="+5 en última hora" icon={<Users className="text-primary" />} />
        <KPICard label="Espera Promedio" value="14:20" sub="Meta: 10:00" icon={<Clock className="text-accent" />} color="accent" />
        <KPICard label="Saturación" value="68%" sub="Nivel Moderado" icon={<Activity className="text-green-500" />} />
        <KPICard label="Alertas Críticas" value="2" sub="Atención demorada" icon={<AlertTriangle className="text-destructive animate-pulse" />} color="destructive" />
      </div>

      {/* Main Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1">
        {/* Active Stations */}
        <section className="lg:col-span-2 glass rounded-[40px] p-8 border-white/5 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500">Operadores Activos (4)</h2>
            <Radio size={16} className="text-green-500 animate-pulse" />
          </div>
          
          <div className="space-y-4 flex-1 overflow-y-auto pr-4 custom-scrollbar">
            <StationStatus name="Juan Pérez" station="Mesa 4" state="Atendiendo" ticket="A-42" time="04:15" color="text-primary bg-primary/10" />
            <StationStatus name="María Elena" station="Mesa 1" state="Esperando" ticket="--" time="00:00" color="text-neutral-500 bg-white/5" />
            <StationStatus name="Carlos Ruiz" station="Mesa 5" state="Descanso" ticket="--" time="15:00" color="text-accent bg-accent/10" />
            <StationStatus name="Sofía Luna" station="Mesa 2" state="Atendiendo" ticket="B-14" time="12:05" color="text-primary bg-primary/10" />
          </div>
        </section>

        {/* Global Controls */}
        <aside className="space-y-6">
          <div className="glass rounded-[40px] p-8 border-white/5 space-y-6">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500 mb-6">Controles de Sala</h2>
            
            <div className="space-y-3">
              <ControlAction icon={<Pause />} label="PAUSAR TODAS LAS COLAS" desc="Congela la emisión y llamado" color="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20" />
              <ControlAction icon={<Play />} label="REANUDAR OPERACIÓN" desc="Vuelve al flujo normal de turnos" color="bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20" />
              <ControlAction icon={<RefreshCw />} label="REINICIAR CONTADORES" desc="Limpia registros del día local" color="bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500/20" />
            </div>
          </div>

          <div className="glass rounded-[40px] p-8 border-primary/10 bg-primary/2">
            <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-2">Sugerencia de Flujo</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Detectamos alta saturación en **Atención General**. Considere reasignar al Operador de la **Mesa 1** para agilizar la cola.
            </p>
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

function KPICard({ label, value, sub, icon, color = "primary" }: { label: string, value: string, sub: string, icon: React.ReactNode, color?: 'primary' | 'secondary' | 'accent' | 'destructive' }) {
  const colorMap = {
    primary: "border-primary/20",
    secondary: "border-secondary/20",
    accent: "border-accent/20",
    destructive: "border-destructive/30",
  };

  return (
    <div className={`glass rounded-3xl p-6 border ${colorMap[color]}`}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">{label}</span>
        <div className="p-2 bg-white/5 rounded-xl border border-white/5">
          {icon}
        </div>
      </div>
      <h4 className="text-4xl font-black tracking-tighter mb-1">{value}</h4>
      <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest italic">{sub}</p>
    </div>
  );
}

function StationStatus({ name, station, state, ticket, time, color }: { name: string, station: string, state: string, ticket: string, time: string, color: string }) {
  return (
    <div className="p-5 glass border border-white/5 rounded-3xl flex items-center justify-between group hover:border-primary/20 transition-all">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center font-black text-xs text-neutral-600">
           {station.replace('Mesa ', '')}
        </div>
        <div>
          <h4 className="text-sm font-black tracking-tight">{name}</h4>
          <p className="text-[10px] uppercase font-bold text-neutral-500 tracking-[0.2em]">{station}</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex flex-col items-end">
          <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${color}`}>
            {state}
          </span>
          {ticket !== '--' && <span className="text-lg font-black tracking-tighter mt-1">{ticket}</span>}
        </div>
        
        <div className="flex flex-col items-end min-w-[60px]">
          <span className="text-[9px] uppercase font-black text-neutral-600 mb-1">Activo</span>
          <span className="text-xs font-bold text-primary italic">{time}</span>
        </div>
      </div>
    </div>
  );
}

function ControlAction({ icon, label, desc, color }: { icon: React.ReactNode, label: string, desc: string, color: string }) {
  return (
    <button className={`w-full p-4 rounded-3xl border text-left group transition-all duration-300 ${color}`}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-black italic tracking-tighter uppercase">{label}</span>
        <div className="group-hover:neon-glow transition-all">{icon}</div>
      </div>
      <p className="text-[10px] font-medium opacity-60 leading-tight">{desc}</p>
    </button>
  );
}

function StatusBadge({ label, value, color }: { label: string, value: string, color: 'green' | 'amber' | 'red' }) {
  const colorMap = {
    green: "text-green-500 border-green-500/20 bg-green-500/5",
    amber: "text-accent border-accent/20 bg-accent/5",
    red: "text-destructive border-destructive/20 bg-destructive/5",
  };

  return (
    <div className={`px-4 py-2 rounded-xl border flex flex-col items-end ${colorMap[color]}`}>
      <span className="text-[8px] font-black text-neutral-500 tracking-widest">{label}</span>
      <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none mt-1">{value}</span>
    </div>
  );
}
