# Iniciar Micro-Nodo Norte
Write-Host "`n--- 🚀 SMART-CliM Micro-Nodo: NORTE ---" -ForegroundColor Yellow
Write-Host "Puerto: 3001" -ForegroundColor Gray
Write-Host "Config: .env_0fb56618-6587-470d-bf3a-490c1d49a289" -ForegroundColor Gray

# Carpeta de la instancia
Set-Location -Path "$PSScriptRoot\hub-core"

# Lanzar nodo
.\launch.ps1 -Role NODE -Port 3001 -EnvFile ".env_0fb56618-6587-470d-bf3a-490c1d49a289"
