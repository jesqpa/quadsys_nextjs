---
name: power-shell-rules
description: Reglas críticas para la ejecución de comandos en el entorno Windows PowerShell de AniMarket.
---
# Power Shell Rules (AniMarket)

## Cuándo usar este skill
- Siempre que necesites ejecutar múltiples comandos en una sola línea del terminal (`run_command`).
- Al realizar operaciones de Git (add + commit + push).
- Al inicializar o reiniciar múltiples servicios en cascada.

## Reglas de Oro

### 1) El Separador de Comandos
- **NUNCA** uses `&&` para encadenar comandos. En este entorno (Windows PowerShell), `&&` no es un operador válido y fallará.
- **SIEMPRE** usa el punto y coma `;` para separar instrucciones.
  - **CORRECTO**: `cd backend ; npm run dev`
  - **INCORRECTO**: `cd backend && npm run dev`

### 2) Estructura de Comandos Git
- Para staging y commit directo: `git add -A ; git commit -m "mensaje"`
- Para verificar después: `git add -A ; git commit -m "mensaje" ; git log --oneline -5`

### 3) Navegación de Directorios
- Aunque la instrucción general es evitar `cd`, si necesitas moverte y ejecutar algo en una línea:
  - `cd folder ; command` (Nota: el asistente prefiere usar la propiedad `Cwd` de la herramienta `run_command` siempre que sea posible).

## Output Esperado
- Comandos que se ejecutan exitosamente a la primera sin errores de sintaxis de terminal.
