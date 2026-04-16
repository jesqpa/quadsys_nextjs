import 'dotenv/config';
import { addSyncJob } from '../src/node/sync.queue';

async function run() {
  console.log('🔄 Programando tarea de sincronización...');
  await addSyncJob();
  console.log('✅ Tarea programada (cada 5 minutos).');
  process.exit(0);
}

run().catch(err => {
  console.error('❌ Error programando tarea:', err);
  process.exit(1);
});
