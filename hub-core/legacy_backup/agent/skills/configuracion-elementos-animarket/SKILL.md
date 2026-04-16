---
name: configuracion-elementos-animarket
description: Estándar visual y de UX de AniMarket. Define la geometría, micro-animaciones, estados dinámicos y pantallas de éxito que otorgan a la plataforma su acabado premium.
---

# 🎨 Estándar Visual AniMarket (V2.0 - High End)

Este Skill define el "Look & Feel" y la experiencia de usuario (UX) obligatoria para cualquier módulo o página dentro del ecosistema AniMarket.

## 📐 1. Geometría y Estructura (Layout)

### A. Sistema de Anchos y Paddings
- **Contenedor Principal:** Siempre envuelto en `max-w-7xl mx-auto px-4`.
- **Separación de Navbar:** El primer bloque tras el navbar debe llevar `py-8` o `mt-10`.
- **Paddings de Sección (Cards Maestras):**
    - Móvil: `p-6`
    - Desktop: `p-10` o `p-12`.

### B. Radios de Curvatura (Estética "App-like")
- **Inputs/Botones:** `rounded-xl` (12px).
- **Cards de Listado (AnimalCard):** `rounded-2xl` (16px).
- **Contenedores Maestros/Secciones:** `rounded-[2.5rem]` (40px) para dar ese aspecto fluido y moderno.
- **Iconos/Avatares:** `rounded-2xl` o `rounded-3xl` (evitar círculos perfectos salvo en casos específicos de usuario).

## 🎊 2. UX de Conversión: Pantallas de Éxito (Success Celebration)
Toda acción de alta importancia (creación, pago, subasta completada) debe usar el estándar `SuccessCelebration`:
- **Header:** Icono/Emoji gigante (`w-32`) con degradado `from-[--primary] to-orange-500`.
- **Tipografía:** Título en `font-black uppercase italic tracking-tighter`.
- **Acciones Guiadas:** Grid de 3 columnas con pasos numerados (`1, 2, 3`) para reducir la carga cognitiva del usuario.

## 🚩 3. Sistema de Estados y Banners
Los estados críticos deben ser comunicados mediante banners sobrepuestos con `backdrop-blur`:
- **SOLD / FINALIZADA:** Banner negro con `backdrop-blur-sm`, bordes blancos y **rotación de -15deg** (Efecto sello).
- **EXPIRADA / RENOVAR:** Banner naranja pulsante (`animate-pulse`) centrado en la parte superior del contenido.
- **ACTIVA (Publicación Exitosa):** Franja fina con degradado `from-[--primary] to-orange-500` en la parte superior del bloque.

## ✨ 4. Micro-animaciones (Motion Design)
La interfaz nunca debe aparecer estática. Usar obligatoriamente Tailwind-Animate:
- **Entrada de Página:** `animate-in fade-in duration-700`.
- **Cards/Modales:** `animate-in zoom-in-95 duration-300`.
- **Elementos UI (Borradores/Alertas):** `animate-in slide-in-from-top-4 duration-500`.
- **Interactivos:** Todo botón/card clickable debe tener `active:scale-95 transition-all`.

## 🎨 5. Paleta y Sombras (Theming)
- **Superficies:** Usar `bg-[--surface]` para fondos de bloque y `bg-[--surface-muted]` para inputs.
- **Bordes:** Siempre `border border-[--border]` (evitar bordes negros puros).
- **Sombras Premium:** `shadow-xl shadow-[--primary]/10` para elementos destacados sobre el fondo.

---
*Al seguir este estándar, aseguras que cualquier nueva funcionalidad se sienta como una parte integral y nativa del diseño original de AniMarket.*
