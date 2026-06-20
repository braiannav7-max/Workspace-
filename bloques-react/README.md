# Bloques React (Fase 2)

Componentes y módulos React para **producción**, cuando el trabajo está aprobado y hay que
pasar de maqueta (HTML) a producto real. Cada módulo es autocontenido, brandable y
**copy-ready** (trae su `install.sh` para meterlo en un proyecto destino).

## Catálogo

| Módulo | Qué resuelve | Estado | Fuente |
|---|---|---|---|
| [`dashboards/panel-admin`](dashboards/panel-admin/) | Panel de administración config-driven: gate, sidebar, métricas, tabla CRUD genérica, Supabase opcional | `listo` | propio (ex-IEO), MIT |

## Convención

Igual que los bloques HTML: cada módulo tiene su `README.md` (qué es / cuándo usar / qué
tocar / fuente+licencia) y estado `draft` | `listo`. Lo reutilizable se separa del demo para
que `install.sh` copie solo lo que importa.

## Cómo usar un módulo

```bash
cd dashboards/panel-admin
npm install && npm run dev      # probarlo
./install.sh /ruta/proyecto/src # meterlo en tu proyecto
```
