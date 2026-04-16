---
name: verificador-servicios
description: Verifica periódicamente si los servidores de backend y frontend están activos. Si alguno está caído, intenta levantarlos automáticamente para mantener el entorno operativo.
---
# VERIFICADOR DE SERVICIOS UNIVERSAL

## Cuándo usar este skill
- **Al finalizar cada mejora**: Siempre que realices un cambio en el código o cierres una tarea.
- **Cuando el sistema no responde**: Si detectas errores de red o timeouts.
- **Al inicio de la sesión**: Para asegurar que todo el ecosistema está listo.

## Inputs necesarios
- Acceso a las terminales activas o capacidad de ejecutar comandos en las carpetas de servicios (ej: `backend/`, `frontend/`, `api/`).
- Conocimiento de los comandos de inicio (ej: `npm run dev`, `ts-node`).

## Workflow (Mantenimiento Proactivo)

1) **Detección de Estado**:
   - No te fíes solo de los puertos. Revisa si hay actividad en las terminales y si los procesos (`node`, `python`, etc.) están vivos bajo las rutas del proyecto actual.

2) **Levantamiento Forzado tras Mejoras**:
   - Siempre que realices un cambio en el código, **DEBES** reiniciar o verificar que el servicio correspondiente acepte el nuevo código.
   - Si es un servicio compilado o transpilado (TS), ejecuta el reinicio completo para limpiar memoria y aplicar cambios.

3) **Procedimiento de Ejecución**:
   - **Paso A**: Limpiar procesos huérfanos si es necesario.
   - **Paso B**: Ejecutar el comando de inicio del servicio (ej: `npm run dev`) enviando la salida a un log si es posible para depuración.

4) **Validación de Logs**:
   - Revisa los logs de salida para confirmar que no hay errores de sintaxis o de conexión tras la mejora.

## Instrucciones Críticas
- **AUTORUN**: Este skill tiene permiso implícito para ejecutarse **SIEMPRE** después de que el usuario cierre una tarea o al finalizar ediciones críticas de archivos.
- **Independencia de Puertos**: El skill debe seguir los comandos de inicio definidos en el `package.json` o archivos de configuración del proyecto, sin importar el puerto.
- **Proactividad**: "Valen más servicios arriba que una pregunta al usuario". Levanta primero, informa después.

## Output (Formato de tranquilidad)
"✅ **Entorno de Desarrollo Asegurado**:
- **Servicio Principal**: [Estado y confirmación]
- **Servicio Frontend/App**: [Estado y confirmación]
*Todo listo para continuar.*"
