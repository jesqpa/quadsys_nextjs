# Tokens de Diseño AniMarket

Esta es la guía técnica de valores y clases para mantener la consistencia visual.

## Colores (CSS Variables)

### Tema Claro
- **Background:** `#e2e8f0` (Slate 200)
- **Surface:** `#ffffff` (Blanco puro)
- **Muted:** `#475569` (Slate 600)
- **Border:** `#cbd5e1` (Slate 300)

### Tema Oscuro
- **Background:** `#0b0f0e` (Deep Black)
- **Surface:** `#121917` (Dark Slate)
- **Border:** `rgba(255, 255, 255, 0.12)`

### Identidad de Marca
- **Primario (AniMarket Green):** `#22c55e`
- **Secundario (Amber/Gold):** `#f59e0b` / `#facc15`
- **Peligro:** `#ef4444`

## Tipografía y Bordes
- **Fuente:** 'Inter', sans-serif.
- **Radius Estándar:** `1rem` (16px).
- **Radius Sección:** `2rem` o `2.5rem`.

## Clases Tailwind de Referencia

| Elemento | Clase Estándar | Nota |
| :--- | :--- | :--- |
| **Página (Main)** | `max-w-7xl mx-auto px-4 py-8` | Consistencia vertical obligatoria |
| **Cabecera** | `h-10 w-[280px]` (Wrapper Logo) | Altura fija para el logo |
| **Miga de pan** | `flex items-center gap-2 text-sm text-[--muted] mb-8` | Espaciado bajo nav |
| **Card Animal** | `bg-[--surface] rounded-2xl border border-[--border]` | Shadow opcional |
| **Input** | `bg-[--surface] border border-[--border] rounded-xl px-4 py-3` | Estilo premium |
| **Skeleton** | `animate-shimmer bg-[--surface-muted]` | Transición suave |

## Dimensiones de Logo
- **Nav:** `width={260}`.
- **Loading Overlay:** `width={300}`.
- **Footer:** `width={200}`.
