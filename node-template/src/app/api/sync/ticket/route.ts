import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const tokenString = authHeader.split(" ")[1];
    
    // Validar el token de la estación
    const stationToken = await prisma.stationToken.findUnique({
      where: { token: tokenString },
      include: { station: true }
    });

    if (!stationToken || !stationToken.isActive) {
      return NextResponse.json({ success: false, error: "Invalid or inactive token" }, { status: 403 });
    }

    const { ticket } = await req.json();

    // Crear o actualizar el ticket en el Hub
    const hubTicket = await prisma.hubTicket.create({
      data: {
        number: ticket.number,
        status: ticket.status,
        priorityLevel: ticket.priorityLevel,
        arrivalTime: new Date(ticket.arrivalTime),
        stationId: stationToken.stationId
      }
    });

    // Actualizar último uso del token
    await prisma.stationToken.update({
      where: { id: stationToken.id },
      data: { lastUsed: new Date() }
    });

    return NextResponse.json({ success: true, hubTicketId: hubTicket.id });
  } catch (error: any) {
    console.error("[HubAPI] Sync error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
