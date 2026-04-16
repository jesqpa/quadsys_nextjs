"use server";

import { QueueService } from "@/node/queue.service";
import { revalidatePath } from "next/cache";
import { getPrismaNode } from "@/lib/prisma-node";

export async function issueTicket(branchId: string, category: string, isPriority: boolean = false) {
  try {
    const ticket = await QueueService.createTicket(branchId, category, isPriority);
    return { success: true, ticket };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function callNextTicket(branchId: string, stationId: string, operatorName: string) {
  try {
    const ticket = await QueueService.getNextTicket(branchId, operatorName);
    if (!ticket) return { success: false, error: "No hay tickets en espera" };

    const updated = await QueueService.callTicket(branchId, ticket.id, operatorName);
    revalidatePath(`/console/${stationId}`);
    return { success: true, ticket: updated };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function completeTicket(branchId: string, ticketId: string, stationId: string) {
  try {
    await QueueService.finishTicket(branchId, ticketId);
    revalidatePath(`/console/${stationId}`);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function getQueueSnapshot(branchId: string) {
  try {
    return await QueueService.getQueueSnapshot(branchId);
  } catch (error) {
    console.error("Error fetching queue snapshot:", error);
    return [];
  }
}

export async function getDisplayData(branchId: string) {
  try {
    return await QueueService.getDisplayData(branchId);
  } catch (error) {
    console.error("Error fetching display data:", error);
    return { current: null, history: [] };
  }
}

export async function getNodeConfig() {
  return {
    branchId: process.env.BRANCH_ID || 'unknown',
    branchName: process.env.BRANCH_NAME || 'Sucursal Desconocida',
    role: process.env.APP_ROLE || 'ALL'
  };
}

export async function getSyncStatus(branchId: string) {
  try {
    const prisma = getPrismaNode(branchId);
    const total = await prisma.localTicket.count();
    const pending = await prisma.localTicket.count({ where: { syncedWithHub: false } });
    
    return {
      success: true,
      total,
      pending,
      synced: total - pending,
    };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
