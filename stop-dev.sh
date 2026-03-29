#!/bin/bash

# Script para detener el servidor de desarrollo

echo "🛑 Deteniendo servidor de desarrollo..."

# Leer el PID si existe
if [ -f server.pid ]; then
    PID=$(cat server.pid)
    if kill -0 $PID 2>/dev/null; then
        kill $PID
        echo "✅ Servidor detenido (PID: $PID)"
    else
        echo "⚠️  El servidor ya no está corriendo"
    fi
    rm server.pid
else
    # Si no hay PID, buscar proceso vite
    PID=$(pgrep -f "vite")
    if [ ! -z "$PID" ]; then
        kill $PID
        echo "✅ Servidor vite detenido (PID: $PID)"
    else
        echo "⚠️  No se encontró servidor corriendo"
    fi
fi

# Limpiar archivo de logs si es muy grande
if [ -f server.log ]; then
    SIZE=$(stat -f%z server.log 2>/dev/null || stat -c%s server.log 2>/dev/null || echo 0)
    if [ $SIZE -gt 1048576 ]; then # 1MB
        > server.log
        echo "📋 Logs limpiados"
    fi
fi

echo "🏁 Listo!"
