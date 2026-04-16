"use server";

import prisma from "@/lib/prisma";
import { ProvisioningService } from "@/services/provisioning.service";
import { revalidatePath } from "next/cache";

export async function getDashboardStats() {
  try {
    const activeNodes = await prisma.branch.count();
    const totalTickets = await prisma.hubTicket.count();
    
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
    // If no branchId is provided, we use the test one from the seed
    const targetBranchId = branchId || "test-branch-id";
    
    // We need a station to attach the token to. 
    // Usually tokens are for stations.
    const station = await prisma.station.findFirst({
      where: { branchId: targetBranchId }
    });

    if (!station) {
      throw new Error("No stations found in this branch to provision.");
    }

    const tokenData = await ProvisioningService.provisionStation(station.id);
    try { revalidatePath("/"); } catch (e) {}
    return { success: true, token: tokenData.token };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function createBranch(name: string, location: string) {
  try {
    // Obtenemos la primera organización (en un sistema multi-tenant esto vendría de la sesión)
    const org = await prisma.organization.findFirst();
    if (!org) throw new Error("No existe una organización base. Ejecuta el seed primero.");

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
        stations: {
          include: {
            token: true
          }
        }
      }
    });

    // Generamos el token para la nueva estación
    const station = branch.stations[0];
    const token = await ProvisioningService.provisionStation(station.id);

    try { revalidatePath("/"); } catch (e) {}
    return { success: true, branchId: branch.id, token: token.token };
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
