import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(request: NextRequest) {
  const role = process.env.APP_ROLE || 'ALL'; 
  const branchId = process.env.BRANCH_ID;
  const url = request.nextUrl.pathname;

  // Si el servidor está en modo HUB, bloqueamos las interfaces de operación local
  if (role === 'HUB') {
    const isNodeRoute = url.startsWith('/issuer') || url.startsWith('/console') || url.startsWith('/display');
    if (isNodeRoute) {
      return new NextResponse('Acceso Denegado: Este servidor solo opera como HUB Central.', { status: 403 });
    }
  }

  // Si el servidor está en modo NODE
  if (role === 'NODE') {
    // Si intenta entrar al supervisor del HUB (dashboard global)
    const isHubRoute = url.startsWith('/supervisor') && !url.includes('local');
    if (isHubRoute) {
      return new NextResponse('Acceso Denegado: Este servidor solo opera como Micro-Nodo.', { status: 403 });
    }
  }

  return NextResponse.next();
}

// Solo aplicar el middleware a las rutas de la aplicación
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
