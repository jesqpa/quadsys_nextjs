param (
    [Parameter(Mandatory=$true)]
    [ValidateSet("HUB", "NODE")]
    [string]$Role,

    [Parameter(Mandatory=$true)]
    [int]$Port,

    [string]$EnvFile = ".env"
)

Write-Host "--- SMART-CliM Federated Launcher ---" -ForegroundColor Cyan
Write-Host "Iniciando instancia como: $Role"
Write-Host "Puerto: $Port"
Write-Host "Configuración: $EnvFile"
Write-Host "-------------------------------------"

# Cargamos las variables de entorno manualmente para el proceso actual
if (Test-Path $EnvFile) {
    Get-Content $EnvFile | Where-Object { $_ -match "=" } | ForEach-Object {
        $name, $value = $_.Split('=', 2)
        [System.Environment]::SetEnvironmentVariable($name.Trim(), $value.Trim().Replace('"', ''), "Process")
    }
}

# Forzamos las variables de rol y puerto
[System.Environment]::SetEnvironmentVariable("APP_ROLE", $Role, "Process")
[System.Environment]::SetEnvironmentVariable("PORT", $Port, "Process")

if ($Role -eq "NODE") {
    Write-Host "Verificando esquema de base de datos local..." -ForegroundColor Yellow
    $dbUrl = [System.Environment]::GetEnvironmentVariable("LOCAL_DB_URL", "Process")
    if ($dbUrl) {
        Write-Host "Sincronizando DB: $dbUrl" -ForegroundColor Gray
        npx prisma db push --schema .\prisma\node.prisma --accept-data-loss
    }
}

# Ejecutamos Next.js
npx next dev --webpack --port $Port
