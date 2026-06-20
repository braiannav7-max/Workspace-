# Spec — Módulo `panel-admin` (inicia Fase 2: Capa React)

**Fecha:** 2026-06-20
**Repo:** `braiannav7-max/Workspace-` · branch `feature/panel-admin`
**Estado:** diseño aprobado en dirección por Braian (auto mode) — construir end-to-end.

## Objetivo

Graduar el admin panel de **IEO** (la fuente más completa y probada del ecosistema) a un
**módulo React reutilizable, genérico y brandable** dentro de `bloques-react/dashboards/panel-admin/`.
Meta de negocio: que cualquier proyecto nuevo que necesite un panel de administración
arranque con ~70% hecho, copiando este módulo.

Esto inicia la **Fase 2 — Capa React** del ROADMAP de Workspace- ("Dashboards base:
sidebar, header, auth UI").

## Por qué IEO y no brief-forge-24

IEO tiene un admin OS real y funcional (Overview con métricas, gestión de usuarios, logs,
gate de acceso, status de conexión). brief-forge-24 (TanStack Start) aporta app-shell pero
menos maduro como panel. Se elige el stack nativo de IEO — **Vite + React 18 +
react-router-dom + Tailwind + Supabase opcional** — por ser el más portable para copy-ready
y evitar un port riesgoso (YAGNI).

## Qué se gradúa (genérico) vs qué NO

**Se gradúa (patrones reutilizables, des-acoplados de "academia"):**
- **Gate de acceso** por código (`VITE_ADMIN_CODE` + `sessionStorage`).
- **Shell config-driven**: un array `SECTIONS` define el sidebar; agregar una sección = un item.
- **Sidebar + SidebarBtn** con iconos lucide y estado activo.
- **Supabase opcional**: si faltan env vars → `supabase = null` y el panel corre en "modo local"
  con un StatusBar que lo indica (patrón "nada sin enchufar" honesto).
- **MetricCard** + grilla de Overview (métricas demo).
- **ResourceManager**: tabla CRUD genérica reutilizable (plantilla para cualquier entidad).
- **Design tokens** Tailwind (base/surface/ink/muted/accent/line) con paleta neutra brandable.

**NO se gradúa (acoplado a IEO):** cursos, ebooks, flujos IA, marketplace, Stripe de academia,
data de contenido. Quedan como ejemplos/placeholders genéricos en su lugar.

## Arquitectura del módulo

Aplicación Vite autocontenida (corre sola = verificable) con la fuente reutilizable separada:

```
bloques-react/dashboards/panel-admin/
├── README.md                 # anatomía: qué es / cuándo usar / qué tocar / fuente+licencia
├── install.sh                # copy-ready: copia src/admin a un proyecto destino + lista deps
├── package.json
├── index.html
├── vite.config.ts            # alias @ → src
├── tailwind.config.ts        # tokens neutros brandables
├── postcss.config.js
├── tsconfig.json
└── src/
    ├── main.tsx              # demo entry
    ├── App.tsx               # wiring de ejemplo: <AdminPanel sections={DEMO_SECTIONS} />
    ├── index.css            # tokens + utilidades (card, btn-accent, container-x)
    ├── lib/supabase.ts      # cliente opcional (null si faltan env)
    └── admin/               # ← LO REUTILIZABLE (lo que copia install.sh)
        ├── AdminPanel.tsx   # shell: Gate + layout sidebar/contenido, recibe sections
        ├── AdminGate.tsx    # gate por código
        ├── types.ts         # AdminSection, etc.
        ├── components/
        │   ├── Sidebar.tsx
        │   ├── MetricCard.tsx
        │   ├── StatusBar.tsx
        │   └── ResourceManager.tsx   # tabla CRUD genérica
        └── sections/        # ejemplos genéricos (reemplazables)
            ├── OverviewSection.tsx
            ├── UsersSection.tsx
            ├── LogsSection.tsx
            └── SettingsSection.tsx
```

### Interfaz pública (cómo se usa)

```tsx
import { AdminPanel } from "./admin/AdminPanel";
import type { AdminSection } from "./admin/types";

const sections: AdminSection[] = [
  { id: "overview", label: "Resumen", icon: LayoutDashboard, render: () => <OverviewSection /> },
  { id: "users",    label: "Usuarios", icon: Users,          render: () => <UsersSection /> },
  // agregar módulos = agregar items
];

<AdminPanel title="Mi Panel" sections={sections} />
```

`AdminPanel` resuelve: gate de acceso, estado de sección activa, layout responsive,
y status de Supabase. El consumidor solo define las secciones.

## Contrato de cada unidad

- **AdminGate**: in = `onOk()`; out = desbloqueo en sessionStorage. Depende de `VITE_ADMIN_CODE`.
- **AdminPanel**: in = `{ title, sections }`; out = UI completa. Depende de AdminGate, Sidebar.
- **ResourceManager**: in = `{ columns, rows, onCreate?, onEdit?, onDelete? }`; out = tabla CRUD.
  Genérico por tipos — no conoce ninguna entidad concreta.
- **supabase**: in = env vars; out = client | null. Sin deps de dominio.

## Branding

Tokens neutros por defecto (slate + acento índigo) en `tailwind.config.ts`, documentado cómo
recolorear cambiando 3-4 valores. Se conservan los **nombres de clase** de IEO
(base/surface/ink/muted/accent/line, `card`, `btn-accent`) para que componentes de IEO se
peguen sin fricción.

## Manejo de errores / estados

- Supabase ausente → modo local, StatusBar amarillo, métricas demo.
- Código incorrecto → mensaje de error, sin desbloqueo.
- ResourceManager sin handlers → solo lectura (botones ocultos).

## Verificación (criterio de éxito)

- `npm install && npm run build` pasa sin errores de tipos.
- `npm run dev` levanta el panel: gate → panel con Overview, Users (tabla CRUD demo), Logs,
  Settings, y StatusBar de Supabase.
- `install.sh` copia `src/admin` a una ruta destino y lista las deps a instalar.
- README con anatomía + fuente (IEO, propio) + licencia.

## Fuera de alcance (YAGNI)

- Auth real con roles/RBAC (Fase 5 boilerplate).
- Billing/Stripe real.
- Port a Next.js (se hace en la graduación que lo pida).
- Cerrar Fase 1 (bloques HTML) — se deja anotado que Fase 2 arranca en paralelo por decisión de Braian.

## Aprendizaje global

Guardado en memoria: ecosistema ([[braian-ecosystem]]) y decisiones ([[libreria-decision]]).
