import Link from 'next/link';

export default function NodeHome() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 font-sans">
      <div className="max-w-md w-full glass rounded-[40px] p-10 border-white/5 text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-black italic tracking-tighter uppercase text-primary">Micro-Nodo</h1>
          <p className="text-xs text-neutral-500 font-bold tracking-[0.3em] uppercase">Smart-CliM Federated</p>
        </div>

        <div className="grid gap-4">
          <Link href="/issuer/test-branch-id" className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-primary/10 hover:border-primary/20 transition-all font-bold uppercase text-xs tracking-widest">
            Apertura de Tótem
          </Link>
          <Link href="/console/test-branch-id/station-1" className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-primary/10 hover:border-primary/20 transition-all font-bold uppercase text-xs tracking-widest">
            Consola Operador
          </Link>
          <Link href="/display/test-branch-id" className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-primary/10 hover:border-primary/20 transition-all font-bold uppercase text-xs tracking-widest">
            Visor Público
          </Link>
        </div>

        <div className="pt-4 border-t border-white/5">
          <p className="text-[10px] text-neutral-600 leading-relaxed italic">
            Este nodo está configurado para operar en modo "Local-First" con sincronización asíncrona hacia el Hub Central.
          </p>
        </div>
      </div>
    </div>
  );
}
