import prisma from '@/lib/prisma';
import { v4 as uuidv4 } from 'uuid';

export class ProvisioningService {
  /**
   * Genera un nuevo token de acceso para una estación específica.
   * Este token es el que el Nodo (Office-Node) usará para enlazarse al Hub.
   */
  static async provisionStation(stationId: string) {
    const station = await prisma.station.findUnique({
      where: { id: stationId },
      include: { token: true }
    });

    if (!station) {
      throw new Error('Estación no encontrada');
    }

    if (station.token) {
      // Si ya tiene token, lo invalidamos o lo renovamos
      await prisma.stationToken.delete({
        where: { stationId }
      });
    }

    // Generar nuevo token seguro
    const newToken = uuidv4();

    return await prisma.stationToken.create({
      data: {
        stationId,
        token: newToken,
        isActive: true
      }
    });
  }

  /**
   * Valida un token de estación y actualiza su fecha de último uso.
   */
  static async validateToken(token: string) {
    const stationToken = await prisma.stationToken.findUnique({
      where: { token },
      include: {
        station: {
          include: {
            branch: {
              include: {
                organization: true
              }
            }
          }
        }
      }
    });

    if (!stationToken || !stationToken.isActive) {
      return null;
    }

    // Actualizar último uso de forma asíncrona
    prisma.stationToken.update({
      where: { id: stationToken.id },
      data: { lastUsed: new Date() }
    }).catch(console.error);

    return stationToken;
  }
}
