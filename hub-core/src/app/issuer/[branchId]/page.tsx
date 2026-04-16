"use client";

import { motion } from "framer-motion";
import { User, Users, Calendar, Fingerprint, Printer } from "lucide-react";
import { useState, use } from "react";
import { issueTicket } from "../../node-actions";

export default function TicketIssuer({ params }: { params: Promise<{ branchId: string }> }) {
  const { branchId } = use(params);
  const [lastTicket, setLastTicket] = useState<string | null>(null);
  const [isPrinting, setIsPrinting] = useState(false);

  const handleIssue = async (category: string, isPriority: boolean = false) => {
    setIsPrinting(true);
    const result = await issueTicket(branchId, category, isPriority);
    
    if (result.success && result.ticket) {
      setLastTicket(result.ticket.number);
      setTimeout(() => {
        setIsPrinting(false);
        setLastTicket(null);
      }, 4000);
    } else {
      alert("Error al emitir ticket: " + (result.error || "Uknown"));
      setIsPrinting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Neon Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.05)_0%,_transparent_70%)] pointer-events-none" />

      {/* Header */}
      <header className="absolute top-12 left-1/2 -translate-x-1/2 text-center space-y-2">
        <h1 className="text-4xl font-black italic tracking-tighter uppercase">Smart-CliM</h1>
        <p className="text-xs text-primary font-bold tracking-[0.4em] uppercase">Por favor, seleccione su trámite</p>
      </header>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl relative z-10">
        <CategoryCard 
          icon={<Users size={48} />} 
          label="ATENCIÓN GENERAL" 
          desc="Trámites comunes y consultas de primer nivel" 
          color="primary"
          onClick={() => handleIssue('A')}
        />
        <CategoryCard 
          icon={<Fingerprint size={48} />} 
          label="PRIORITARIO" 
          desc="Embarazadas, Adultos Mayores y Personas con discapacidad" 
          color="accent"
          onClick={() => handleIssue('B', true)}
        />
        <CategoryCard 
          icon={<Calendar size={48} />} 
          label="CITAS RESERVADAS" 
          desc="Usuarios con turno agendado previamente" 
          color="secondary"
          onClick={() => handleIssue('C')}
        />
      </div>

      {/* Printing Overlay */}
      {isPrinting && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex flex-col items-center justify-center"
        >
          <motion.div 
            animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-32 h-32 rounded-3xl bg-primary/20 flex items-center justify-center neon-border mb-8 shadow-[0_0_50px_rgba(0,255,255,0.4)]"
          >
            <Printer size={64} className="text-primary" />
          </motion.div>
          <h2 className="text-3xl font-black italic uppercase tracking-widest mb-2">Imprimiendo Ticket</h2>
          <p className="text-primary font-mono text-xl">{lastTicket}</p>
          <div className="mt-8 text-neutral-500 animate-pulse uppercase text-xs font-bold tracking-[0.5em]">Retire su comprobante</div>
        </motion.div>
      )}

      {/* Footer Info */}
      <footer className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <div className="px-4 py-2 glass rounded-full flex items-center gap-3 border-white/5">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] uppercase font-black tracking-widest text-neutral-400 italic">Sistema Operativo • Conexión Hub Ok</span>
        </div>
      </footer>
    </main>
  );
}

function CategoryCard({ icon, label, desc, color, onClick }: { icon: React.ReactNode, label: string, desc: string, color: 'primary' | 'secondary' | 'accent', onClick: () => void }) {
  const colorMap = {
    primary: "border-primary/20 hover:border-primary/60 text-primary",
    secondary: "border-secondary/20 hover:border-secondary/60 text-secondary",
    accent: "border-accent/20 hover:border-accent/60 text-accent",
  };

  const bgActiveMap = {
    primary: "rgba(0, 255, 255, 0.05)",
    secondary: "rgba(168, 85, 247, 0.05)",
    accent: "rgba(255, 170, 0, 0.05)",
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`glass h-[400px] rounded-[40px] border p-10 flex flex-col items-center justify-center text-center group transition-all duration-500 ${colorMap[color]}`}
    >
      <div className={`mb-8 w-24 h-24 rounded-3xl flex items-center justify-center bg-white/5 border border-white/5 group-hover:neon-glow transition-all`}>
        {icon}
      </div>
      <h3 className="text-2xl font-black tracking-tighter mb-4 italic uppercase">{label}</h3>
      <p className="text-sm font-medium text-neutral-500 leading-relaxed px-4">{desc}</p>
      
      <div className="mt-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Oprimir para imprimir</span>
      </div>
    </motion.button>
  );
}
