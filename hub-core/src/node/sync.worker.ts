import 'dotenv/config';
import { Worker, Job } from 'bullmq';
import { connection } from '@/lib/redis';
import { SyncService } from './sync.service';

const prefix = `smart-clim-node-${process.env.BRANCH_ID || 'default'}`;

export const syncWorker = new Worker('sync-tickets', 
  async (job: Job) => {
    if (job.name === 'sync-pending') {
      const hubUrl = process.env.HUB_URL || 'http://localhost:3000';
      const stationToken = process.env.STATION_TOKEN;

      if (!stationToken) {
        throw new Error('STATION_TOKEN no configurado en el Nodo');
      }

      await SyncService.syncPendingTickets(hubUrl, stationToken);
    }
  }, 
  { 
    connection,
    prefix,
    concurrency: 1 
  }
);

syncWorker.on('completed', (job) => {
  console.log(`[SyncWorker] Ciclo de sincronización completado para job ${job.id}`);
});

syncWorker.on('failed', (job, err) => {
  console.error(`[SyncWorker] Error en sincronización para job ${job?.id}:`, err.message);
});
