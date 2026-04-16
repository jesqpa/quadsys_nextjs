"use server";

import prisma from "@/lib/prisma";
import { ProvisioningService } from "@/services/provisioning.service";
import { revalidatePath } from "next/cache";

export async function getDashboardStats() {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const activeNodes = await prisma.branch.count();
    const totalTickets = await prisma.hubTicket.count({
      where: { arrivalTime: { gte: today } }
    });
    
    return {
      activeNodes,
      totalTickets, 
      status: activeNodes > 0 ? "Optimum" : "Standby"
    };
  } catch (error: any) {
    console.error("Critical error in getDashboardStats:", error.message);
    return { activeNodes: 0, totalTickets: 0, status: `Error: ${error.message.slice(0, 20)}` };
  }
}


export async function generateNewToken(branchId?: string) {
  try {
    let targetBranchId = branchId;

    if (!targetBranchId) {
      const defaultBranch = await prisma.branch.findFirst({
        where: { OR: [{ id: "test-branch-id" }, { name: { contains: "Norte" } }] },
      }) || await prisma.branch.findFirst();

      if (!defaultBranch) throw new Error("No existen sucursales registradas.");
      targetBranchId = defaultBranch.id;
    }
    
    const station = await prisma.station.findFirst({
      where: { branchId: targetBranchId }
    });

    if (!station) {
      throw new Error("No se encontró una estación para esta sucursal.");
    }

    const tokenData = await ProvisioningService.provisionStation(station.id);
    
    // Forzamos activación
    await prisma.stationToken.update({
      where: { id: tokenData.id },
      data: { isActive: true }
    });

    try { revalidatePath("/"); } catch (e) {}
    return { success: true, token: tokenData.token };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}


export async function createBranch(name: string, location: string) {
  try {
    const org = await prisma.organization.findFirst();
    if (!org) throw new Error("No existe una organización base.");

    const branch = await prisma.branch.create({
      data: {
        name,
        location,
        organizationId: org.id,
        stations: {
          create: {
            name: "Estación Principal",
            type: "DESK",
          }
        }
      },
      include: {
        stations: true
      }
    });

    const station = branch.stations[0];
    const tokenData = await ProvisioningService.provisionStation(station.id);
    
    // Activamos el token de una vez
    await prisma.stationToken.update({
      where: { id: tokenData.id },
      data: { isActive: true }
    });

    try { revalidatePath("/"); } catch (e) {}
    return { 
      success: true, 
      branchId: branch.id, 
      branchName: branch.name,
      token: tokenData.token 
    };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}


export async function getFederatedNodes() {
  try {
    const branches = await prisma.branch.findMany({
      include: {
        stations: {
          include: {
            token: true
          }
        }
      }
    });
    return branches;
  } catch (error) {
    console.error("Error fetching nodes:", error);
    return [];
  }
}
