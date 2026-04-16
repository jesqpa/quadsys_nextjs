import { NextResponse } from "next/server";

let isSyncStarted = false;

async function startSyncIfNeeded() {
  if (isSyncStarted || process.env.APP_ROLE !== 'NODE') return;
  
  try {
    console.log('--- [SyncSystem] Iniciando motor de sincronización (Lazy Start) ---');
    const { addSyncJob } = await import('@/node/sync.queue');
    await import('@/node/sync.worker');
    await addSyncJob();
    isSyncStarted = true;
    console.log('--- [SyncSystem] Motor de sincronización activado con éxito ---');
  } catch (error) {
    console.error('--- [SyncSystem] Error en el arranque del motor:', error);
  }
}

export async function GET() {
  // Disparamos el arranque del motor sin bloquear la respuesta
  startSyncIfNeeded();

  return NextResponse.json({ 
    role: process.env.APP_ROLE || 'HUB',
    branchId: process.env.BRANCH_ID || null
  });
}
