"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cloud, CloudOff, RefreshCw, Layers, CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getNodeConfig, getSyncStatus } from "../node-actions";

export default function SyncStatusPage() {
  const [config, setConfig] = useState({ branchId: '', branchName: '' });
  const [status, setStatus] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const cfg = await getNodeConfig();
    setConfig(cfg);
    const st = await getSyncStatus(cfg.branchId);
    setStatus(st);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // Polling cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm font-bold uppercase tracking-wider">Volver al Menú</span>
          </Link>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <div className={`w-2 h-2 rounded-full ${status?.pending === 0 ? 'bg-green-500' : 'bg-amber-500 animate-pulse'}`} />
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
              {status?.pending === 0 ? 'Sincronizado' : 'Pendiente de Envío'}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-black italic tracking-tighter uppercase">Monitor de <span className="text-primary">Sincronización</span></h1>
          <p className="text-neutral-500 text-sm">Estado del motor Local-First en {config.branchName}.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatusCard 
            label="Total Tickets" 
            value={status?.total ?? '-'} 
            icon={<Layers className="text-blue-500" />} 
          />
          <StatusCard 
            label="En la Nube (Hub)" 
            value={status?.synced ?? '-'} 
            icon={<CheckCircle2 className="text-green-500" />} 
          />
          <StatusCard 
            label="Pendientes" 
            value={status?.pending ?? '-'} 
            icon={<RefreshCw className={`text-amber-500 ${status?.pending > 0 ? 'animate-spin' : ''}`} />} 
          />
        </div>

        <div className="glass rounded-[32px] p-8 border-white/5 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Cloud size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Resiliencia del Nodo</h3>
              <p className="text-sm text-neutral-500">Los tickets se guardan localmente y se suben al Hub automáticamente.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center py-12">
             {status?.pending === 0 ? (
               <>
                <CheckCircle2 size={48} className="text-green-500 mb-4 opacity-20" />
                <p className="text-sm text-neutral-400">Toda la información local ha sido respaldada en el Hub Central.</p>
               </>
             ) : (
               <>
                <RefreshCw size={48} className="text-amber-500 mb-4 animate-spin opacity-20" />
                <p className="text-sm text-neutral-400">Enviando {status?.pending} registros al servidor central...</p>
               </>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusCard({ label, value, icon }: any) {
  return (
    <div className="glass rounded-2xl p-6 border-white/5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">{label}</span>
        {icon}
      </div>
      <p className="text-3xl font-black">{value}</p>
    </div>
  );
}
