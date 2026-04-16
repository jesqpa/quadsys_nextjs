import { getPrismaNode } from '@/lib/prisma-node';

export class QueueService {
  /**
   * Obtiene la siguiente ficha a llamar basada en la jerarquía QuadSys.
   */
  static async getNextTicket(branchId: string, assignedTo?: string) {
    const prismaNode = getPrismaNode(branchId);
    
    if (assignedTo) {
      const reassigned = await prismaNode.localTicket.findFirst({
        where: {
          status: 'WAITING',
          isReassigned: true,
          assignedTo: assignedTo
        },
        orderBy: { arrivalTime: 'asc' }
      });
      if (reassigned) return reassigned;
    }

    const candidates = await prismaNode.localTicket.findMany({
      where: { 
        status: 'WAITING',
        isReassigned: false 
      },
      orderBy: [
        { isPriority: 'desc' },
        { priorityLevel: 'desc' },
        { hasAppointment: 'desc' },
        { arrivalTime: 'asc' }
      ],
      take: 1
    });

    return candidates[0] || null;
  }

  static async callTicket(branchId: string, ticketId: string, assignedTo: string) {
    const prismaNode = getPrismaNode(branchId);
    return await prismaNode.localTicket.update({
      where: { id: ticketId },
      data: {
        status: 'CALLING',
        assignedTo,
        calledTime: new Date()
      }
    });
  }

  static async finishTicket(branchId: string, ticketId: string) {
    const prismaNode = getPrismaNode(branchId);
    return await prismaNode.localTicket.update({
      where: { id: ticketId },
      data: {
        status: 'FINISHED',
        finishedTime: new Date()
      }
    });
  }

  static async createTicket(branchId: string, category: string, isPriority: boolean = false) {
    const prismaNode = getPrismaNode(branchId);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lastTicket = await prismaNode.localTicket.findFirst({
      where: {
        number: { startsWith: `${category}-` },
        arrivalTime: { gte: today }
      },
      orderBy: { arrivalTime: 'desc' }
    });

    let nextNumber = 1;
    if (lastTicket) {
      const currentNum = parseInt(lastTicket.number.split('-')[1]);
      nextNumber = currentNum + 1;
    }

    const formattedNumber = `${category}-${nextNumber.toString().padStart(2, '0')}`;
    const priorityLevel = isPriority ? 100 : 0;

    return await prismaNode.localTicket.create({
      data: {
        number: formattedNumber,
        status: 'WAITING',
        isPriority,
        priorityLevel,
        arrivalTime: new Date()
      }
    });
  }

  static async getQueueSnapshot(branchId: string, limit: number = 10) {
    const prismaNode = getPrismaNode(branchId);
    return await prismaNode.localTicket.findMany({
      where: { status: 'WAITING' },
      orderBy: [
        { isPriority: 'desc' },
        { priorityLevel: 'desc' },
        { arrivalTime: 'asc' }
      ],
      take: limit
    });
  }

  static async getDisplayData(branchId: string) {
    const prismaNode = getPrismaNode(branchId);
    const current = await prismaNode.localTicket.findFirst({
      where: { status: 'CALLING' },
      orderBy: { calledTime: 'desc' }
    });

    const history = await prismaNode.localTicket.findMany({
      where: {
        status: { in: ['CALLING', 'SERVING', 'FINISHED'] }
      },
      orderBy: { calledTime: 'desc' },
      take: 6
    });

    return {
      current,
      history: history.filter(h => h.id !== current?.id).slice(0, 5)
    };
  }
}
