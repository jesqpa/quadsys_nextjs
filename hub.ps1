# Script para levantar el Hub de SMART-CliM
Write-Host "`n--- 🚀 SMART-CliM Federated HUB ---" -ForegroundColor Cyan
Write-Host "Iniciando servicio centralizado..." -ForegroundColor Gray

# Cambiamos al directorio del core
Set-Location -Path "$PSScriptRoot\hub-core"

# Ejecutamos el launcher con los parámetros para el HUB
.\launch.ps1 -Role HUB -Port 3000 -EnvFile ".env"
