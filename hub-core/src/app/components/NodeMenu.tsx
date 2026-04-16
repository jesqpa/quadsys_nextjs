"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { motion } from "framer-motion";
import { Laptop, Monitor, Ticket, Settings, ShieldCheck, Database } from 'lucide-react';
import { getNodeConfig } from "../node-actions";

export default function NodeMenu() {
  const [config, setConfig] = useState({ branchId: '', branchName: '' });

  useEffect(() => {
    getNodeConfig().then(setConfig);
  }, []);

  const menuItems = [
    { 
      title: "Emisor de Tickets", 
      desc: "Interfaz de apertura para clientes (Tótem)", 
      href: `/issuer/${config.branchId}`,
      icon: <Ticket className="text-primary" />,
      color: "from-primary/20"
    },
    { 
      title: "Consola de Operador", 
      desc: "Gestión y llamado de turnos por estación", 
      href: `/console/${config.branchId}/station-1`,
      icon: <Laptop className="text-blue-500" />,
      color: "from-blue-500/20"
    },
    { 
      title: "Visor Público", 
      desc: "Pantalla de turnos para sala de espera", 
      href: `/display/${config.branchId}`,
      icon: <Monitor className="text-green-500" />,
      color: "from-green-500/20"
    },
    { 
      title: "Estado de Sincronización", 
      desc: "Monitor de tickets locales y respaldo en nube", 
      href: `/sync-status`,
      icon: <ShieldCheck className="text-amber-500" />,
      color: "from-amber-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center font-sans overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl w-full space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-neutral-500"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Micro-Nodo Federado • Online
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-6xl font-black italic tracking-tighter uppercase text-white mb-2 leading-none">
              {config.branchName.split(' ')[0]} <span className="text-primary italic">{config.branchName.split(' ')[1] || 'Node'}</span>
            </h1>
            <p className="text-sm text-neutral-400 font-medium tracking-wide">ID de Sucursal: <span className="font-mono text-neutral-600">{config.branchId}</span></p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
            >
              <Link 
                href={item.href}
                className="group block relative p-8 glass rounded-[32px] border-white/5 hover:border-white/20 transition-all overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="relative z-10 flex items-start gap-6">
                  <div className="p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>

                <div className="absolute bottom-6 right-8 opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-8 pt-8 border-t border-white/5"
        >
          <div className="flex items-center gap-2 text-[10px] text-neutral-600 font-bold uppercase tracking-wider">
            <Database size={12} /> Local SQLite Ready
          </div>
          <div className="flex items-center gap-2 text-[10px] text-neutral-600 font-bold uppercase tracking-wider">
            <ShieldCheck size={12} /> Encrypted Sync
          </div>
        </motion.div>
      </div>
    </div>
  );
}
