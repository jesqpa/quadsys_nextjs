---
name: replicador-de-sistemas-premium
description: Manual técnico y de negocio para clonar la arquitectura de AniMarket (Next.js/Express/BullMQ/Redis) a cualquier nicho comercial (Inmuebles, Vehículos, Arte, etc.) con monetización por créditos y marketing automatizado.
---

# 🚀 Blueprint Replicador AniMarket (V2.0 - Industrial)

Este Skill permite clonar el **ADN funcional y comercial** de AniMarket para desplegar marketplaces de alta gama en cualquier nicho, manteniendo la lógica de subastas, monetización por tiempo y marketing pro.

## 🏗️ 1. Arquitectura de Negocio Replicable

### A. Ciclo de Vida del Producto (Monetización)
Para replicar el modelo de negocio, el objeto principal (Producto/Inmueble/Vehículo) debe seguir este flujo de estados:
1.  **HIDDEN (Borrador):** Estado inicial tras la creación. Permite al usuario editar, subir fotos y configurar sin que el anuncio sea público.
2.  **ACTIVE (Publicado):** El anuncio es visible para todos. Este estado se activa mediante un **Plan de Publicación** (ej. 7, 15, 30 días) asociado a un campo `expiresAt`.
3.  **EXPIRED (Caducado):** El sistema transita automáticamente el anuncio a `HIDDEN` cuando `Date.now() > expiresAt`. Se habilita el botón de **"Renovar Publicación"** (Punto de cobro de créditos).
4.  **SOLD/ENDED:** Estado final tras una venta exitosa o cierre de subasta.

### B. Sincronización Inteligente de Subastas
Regla de oro del modelo: **"Si el producto está en subasta, debe ser visible hasta que el martillo caiga."**
- Al crear una `Auction`, el sistema debe ejecutar una **Transacción Atómica** que:
    1.  Cree el registro en la tabla `Auction`.
    2.  Actualice el `expiresAt` del Producto para que sea idéntico al `endsAt` de la subasta.
    3.  Fuerce el estado del Producto a `ACTIVE`.

## 🎨 2. El Motor "Marketing Pro"
Todo sistema replicado debe incluir el **Centro de Difusión automatizado**:
-   **Celebration Panel:** Pantalla de éxito tras la creación que guía al usuario en 3 pasos: `Configurar Venta/Subasta → Generar Flyer → Difundir en Grupos`.
-   **Marketing Assets Engine:** Generación automática de:
    -   `ad_light.png` / `ad_dark.png`: Flyers estáticos profesionales.
    -   `ad_animated.gif`: Animación de alta conversión para estados de WhatsApp/Instagram.
-   **Social Share Center:** Botones directos con pre-llenado de texto para WhatsApp/Telegram.

## 🛠️ 3. Estándares Técnicos Anti-Conflictos (Multi-Nicho)

### A. Aislamiento de Colas (BullMQ Prefixing)
Para permitir múltiples instalaciones del sistema en un mismo servidor Redis sin colisiones, es obligatorio usar prefijos de entorno y proyecto en `queues.ts`:
```typescript
const prefix = `${process.env.PROJECT_NAME || 'animarket'}-${process.env.NODE_ENV || 'local'}`;
const myQueue = new Queue('media', { connection, prefix });
```

### B. Asistente de Configuración de Servicios
Implementar un flujo de verificación paso a paso para servicios externos (ej. Telegram Bot) con estados de persistencia:
- `serviceActivated`: Indica si los IDs de conexión son correctos.
- `serviceTested`: Requiere una prueba real de conexión exitosa antes de habilitar el servicio al 100%.

## 📝 4. Workflow de Replicación (Checklist)

1.  **Modelado Prisma:**
    - Renombrar `Animal` por la entidad del nicho (ej. `Property`, `Watch`, `Vehicle`).
    - Mantener relaciones 1:1 con `Auction` y 1:M con `Bid`.
2.  **Atributos de Ficha Técnica:**
    - Definir los `specs` específicos (ej. `km`, `rooms`, `year`, `brand`).
3.  **Configuración de Estilo:**
    - Actualizar variables CSS en `globals.css` (`--primary`, `--surface`, `border-radius`).
    - Cambiar el set de Emojis/Iconos por los del nuevo nicho.
4.  **Lógica Post-Creación:**
    - Asegurar que el redirect del CreateForm incluya `?new=true` para disparar el `CelebrationPanel`.
5.  **Despliegue de Workers:**
    - Configurar los Workers de `media` y `auctions` con los prefijos correspondientes para el nuevo nicho.

## 🛡️ 5. Validaciones de Calidad Obligatorias
Antes de permitir que un anuncio pase a `ACTIVE` o `Auction`, validar:
- Al menos una imagen principal.
- Ubicación georeferenciada.
- Descripción técnica mínima.
- Precio base coherente.

---
*Este Blueprint garantiza que cualquier réplica del sistema AniMarket mantenga el estándar premium de UI/UX y la robustez técnica necesaria para un entorno de producción real.*
