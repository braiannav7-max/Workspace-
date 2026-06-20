#!/usr/bin/env bash
# install.sh — copia el módulo panel-admin a un proyecto destino (copy-ready).
#
# Uso:
#   ./install.sh /ruta/a/tu-proyecto/src
#
# Copia la carpeta `src/admin` (lo reutilizable) y `src/lib/supabase.ts` al destino,
# y te lista las dependencias y env vars a configurar. No publica ningún paquete.
set -euo pipefail

DEST="${1:-}"
if [ -z "$DEST" ]; then
  echo "Uso: ./install.sh /ruta/destino/src"
  exit 1
fi

HERE="$(cd "$(dirname "$0")" && pwd)"

mkdir -p "$DEST/admin" "$DEST/lib"
cp -R "$HERE/src/admin/." "$DEST/admin/"
cp "$HERE/src/lib/supabase.ts" "$DEST/lib/supabase.ts"

echo "✅ Copiado a: $DEST/admin  (y lib/supabase.ts)"
echo
echo "Siguiente:"
echo "  1) Instalá dependencias:"
echo "       npm i react react-dom lucide-react @supabase/supabase-js"
echo "  2) Asegurate de tener Tailwind con los tokens (ver tailwind.config.ts e index.css de este módulo)."
echo "  3) Configurá env vars:  VITE_ADMIN_CODE  (y opcional VITE_SUPABASE_URL / VITE_SUPABASE_PUBLISHABLE_KEY)"
echo "  4) Renderizá <AdminPanel title=\"...\" sections={...} /> — ver src/App.tsx como ejemplo."
