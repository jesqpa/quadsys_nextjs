import { NextRequest, NextResponse } from 'next/server';
import { ProvisioningService } from '@/services/provisioning.service';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json({ error: 'Token requerido' }, { status: 400 });
    }

    const authorizedToken = await ProvisioningService.validateToken(token);

    if (!authorizedToken) {
      return NextResponse.json({ error: 'Token inválido o inactivo' }, { status: 401 });
    }

    // Retornamos la configuración básica para el Nodo
    return NextResponse.json({
      success: true,
      data: {
        stationId: authorizedToken.stationId,
        stationName: authorizedToken.station.name,
        branchId: authorizedToken.station.branchId,
        branchName: authorizedToken.station.branch.name,
        organizationId: authorizedToken.station.branch.organizationId,
        organizationName: authorizedToken.station.branch.organization.name,
        config: {
          // Aquí irán configuraciones globales persistidas en el Hub
          ttsEngine: 'azure', 
          theme: 'cyber-premium'
        }
      }
    });

  } catch (error) {
    console.error('Error en validación de token:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
