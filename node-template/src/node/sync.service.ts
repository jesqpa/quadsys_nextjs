import { prismaNode } from '@/lib/prisma-node';
import axios from 'axios';


export class SyncService {
  /**
   * Sincroniza los tickets locales pendientes con el Hub Central.
   * Este proceso es el corazón de la resiliencia offline.
   */
  static async syncPendingTickets(hubUrl: string, stationToken: string) {
    const pendingTickets = await prismaNode.localTicket.findMany({
      where: { syncedWithHub: false },
      take: 50
    });

    if (pendingTickets.length === 0) return;

    console.log(`[Sync] Sincronizando ${pendingTickets.length} tickets con el Hub...`);

    for (const ticket of pendingTickets) {
      try {
        const response = await axios.post(`${hubUrl}/api/sync/ticket`, {
          ticket: {
            number: ticket.number,
            status: ticket.status,
            priorityLevel: ticket.priorityLevel,
            arrivalTime: ticket.arrivalTime,
            metadata: ticket.metadata
          }
        }, {
          headers: { 'Authorization': `Bearer ${stationToken}` }
        });

        if (response.data.success) {
          await prismaNode.localTicket.update({
            where: { id: ticket.id },
            data: {
              syncedWithHub: true,
              hubTicketId: response.data.hubTicketId
            }
          });
        }
      } catch (error) {
        console.error(`[Sync] Error sincronizando ticket ${ticket.id}:`, error.message);
        // No marcamos como sincronizado para reintentar luego.
      }
    }
  }
}
