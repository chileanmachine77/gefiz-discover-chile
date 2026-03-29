#!/bin/bash

# Script para iniciar servidor en desarrollo sin bloquear terminal

echo "🚀 Iniciando servidor de desarrollo de Gefiz Travel..."

# Ir al directorio del web
cd apps/web

# Iniciar servidor en background con logs
npm run dev > ../server.log 2>&1 &

# Guardar el PID del servidor
echo $! > ../server.pid

echo "✅ Servidor iniciado en background"
echo "📍 URL: http://localhost:8080/"
echo "📋 Logs: tail -f server.log"
echo "🛑 Detener: ./stop-dev.sh"

# Mostrar los logs iniciales
sleep 2
echo ""
echo "📊 Estado inicial del servidor:"
tail -10 ../server.log
