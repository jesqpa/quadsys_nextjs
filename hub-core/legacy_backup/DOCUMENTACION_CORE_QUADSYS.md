# Documentación Maestra de Migración: QuadSys (SMART-CliM)

## 1. Resumen Ejecutivo
QuadSys es un Sistema de Gestión de Colas (QMS) de misión crítica denominado **SMART-CliM**. Su arquitectura original está diseñada para alto rendimiento mediante un sistema híbrido de persistencia en archivos serializados y base de datos relacional.

## 2. Arquitectura de Software Actual (Legacy)
*   **Base**: PHP 5.6/7.x con Framework MVC Propio.
*   **Capas Core**:
    *   `Request / Bootstrap`: Enrutamiento modular.
    *   `Beans`: Objetos de estado que contienen la lógica de negocio compleja.
    *   `Registry / Session`: Gestión de estado global y RBAC (Admin, Especial, Usuario).
*   **Persistencia Híbrida**: 
    *   **Live State**: Archivos `.dat` y `.frm` (Objetos serializados) para la cola activa.
    *   **Historical Data**: MySQL (Tablas `quadsys_*`) para cierres de turno y reportes.

## 3. Análisis Profundo de Algoritmos de Llamado
Esta es la lógica más crítica para replicar en el nuevo sistema:

### A. Jerarquía de Secuencia
El motor de llamado no es lineal; recorre una secuencia de criterios:
1.  **Reasignado**: Fichas transferidas directamente a un usuario o puesto (Máxima prioridad).
2.  **Priorizado**: Fichas marcadas manualmente con prioridad.
3.  **Segmentación**: Basado en niveles de importancia (1-100) y perfiles de atención.
4.  **Cita**: Turnos agendados previamente.
5.  **Según Roles (Estándar)**: El flujo normal de la cola.

### B. Protocolos de Balanceo (Fairness)
Para evitar que un operador ignore colas pesadas, el sistema implementa:
*   **Algoritmo Circular**: Al llamar una ficha de la Letra A, esa letra se mueve al final de la lista de prioridades para ese operador.
*   **Sincronización de Traslados**: Las fichas cambiadas de cola mantienen su fidelidad cronológica mediante la comparación de `h_llegada` original contra la cola destino.

## 4. Descripción de Módulos
1.  **`usuarios`**: Gestión de accesos y seguridad con cifrado SHA1+Salt.
2.  **`fichero`**: El corazón del emisor de turnos y la gestión de unidades/zonas por IP.
3.  **`plataforma`**: Dashboard del operador con eventos AJAX para control de tiempos de atención.
4.  **`formularios`**: Motor dinámico de creación de formularios (Schema Builder) almacenado en objetos serializados.
5.  **`supervisor`**: Monitoreo de KPIs en tiempo real (tiempos de espera, atención y saturación).

## 5. Roadmap de Migración Tecnológica

| Componente Legacy | Nueva Tecnología | Estrategia de Implementación |
| :--- | :--- | :--- |
| **Logic (Beans)** | **Next.js API / Backend** | Traducir lógica de PHP Beans a TypeScript Services. |
| **Live State (.dat)** | **Redis** | Usar Redis Hashes y Sorted Sets para la cola en memoria. |
| **Persistence (MySQL)** | **PostgreSQL** | Migrar a un esquema relacional moderno. Usar JSONB para el motor de formularios. |
| **Real-time (Polling)** | **WebSockets (Socket.io)** | Servidor push para anuncios de audio y actualización de pantallas. |
| **Locking (Semáforos)** | **Redis Locks (Redlock)** | Garantizar atomicidad en el llamado de fichas entre múltiples operadores. |
| **Cifrado (MCrypt)** | **WebCrypto API / Libs** | Migrar de AES-CBC (antiguo) a AES-GCM-256 (moderno). |
| **Background Jobs** | **BullMQ** | Procesar limpieza nocturna y generación de reportes pesados. |

## 6. Consideraciones Críticas
*   **Atomicidad**: El "Semáforo" de llamado debe ser infalible (evitar doble llamado de la misma ficha).
*   **Hardware**: El sistema identifica unidades por IP; la nueva arquitectura debe contemplar si los emisores de turnos están en la misma red o requieren un túnel/agente.
*   **TTS (Text-to-Speech)**: El sistema actual encola audios. El nuevo debe integrarse con APIs modernas de voz o librerías del navegador.
