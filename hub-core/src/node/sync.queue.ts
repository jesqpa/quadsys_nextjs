import { Queue } from 'bullmq';
import { connection } from '@/lib/redis';

// Prefijo único por oficina para evitar colisiones en Redis compartido
const prefix = `smart-clim-node-${process.env.BRANCH_ID || 'default'}`;

export const syncQueue = new Queue('sync-tickets', {
  connection,
  prefix,
  defaultJobOptions: {
    attempts: 5,
    backoff: {
      type: 'exponential',
      delay: 5000,
    },
    removeOnComplete: true,
  }
});

/**
 * Añade un trabajo de sincronización recurrente o bajo demanda.
 */
export const addSyncJob = async () => {
  await syncQueue.add('sync-pending', {}, {
    repeat: {
      pattern: '*/10 * * * * *', // Cada 10 segundos para pruebas dev
    }
  });
};
