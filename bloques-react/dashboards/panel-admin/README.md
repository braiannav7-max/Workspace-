# Panel Admin — módulo reutilizable

Panel de administración React **config-driven**, brandable y autocontenido. Graduado del
admin OS de **IEO** para que cualquier proyecto nuevo arranque con el panel ~70% hecho.

> **Estado:** `listo` · **Stack:** Vite + React 18 + Tailwind + lucide + Supabase (opcional)
> **Fuente:** propio (extraído de `braiannav7-max/IEO`) · **Licencia:** MIT

## Qué es

Un shell de administración completo: gate de acceso por código, sidebar config-driven,
dashboard de métricas, tabla CRUD genérica y status de conexión a backend. **Agregar un
módulo al panel = agregar un item al array `sections`.**

## Cuándo usarlo

Cualquier proyecto que necesite un back-office: SaaS, CRM, academia, e-commerce. Si necesitás
un panel para gestionar datos sin tocar el código, este es el punto de partida.

## Probarlo (corre solo)

```bash
npm install
cp .env.example .env   # poné un VITE_ADMIN_CODE
npm run dev            # abrí, ingresá el código, navegá las secciones
```

Sin Supabase configurado corre en **modo local** con datos demo (nada finge funcionar: el
StatusBar lo indica).

## Meterlo en tu proyecto

```bash
./install.sh /ruta/a/tu-proyecto/src
```

Copia `src/admin` + `src/lib/supabase.ts` y te lista deps y env vars. Luego:

```tsx
import { AdminPanel } from "./admin/AdminPanel";
import type { AdminSection } from "./admin/types";
import { LayoutDashboard, Users } from "lucide-react";

const sections: AdminSection[] = [
  { id: "overview", label: "Resumen", icon: LayoutDashboard, render: ({ navigate }) => <OverviewSection navigate={navigate} /> },
  { id: "users",    label: "Usuarios", icon: Users,          render: () => <MisUsuarios /> },
];

<AdminPanel title="Mi Panel" sections={sections} />;
```

## Qué tocar

- **Branding:** `tailwind.config.ts` → cambiá `accent` y `base/surface`. Los nombres de clase
  se mantienen, así pegás componentes de IEO sin fricción.
- **Secciones:** creá las tuyas en `src/admin/sections/` y agregalas al array.
- **CRUD real:** en cada sección, reemplazá los datos demo por consultas a `supabase`.
- **Acceso:** `VITE_ADMIN_CODE`. (Es protección de UI; la seguridad real va en las policies
  de Supabase/backend.)

## Estructura

```
src/admin/
├── AdminPanel.tsx       # shell (gate + layout + sección activa)
├── AdminGate.tsx        # gate por código
├── types.ts             # AdminSection, ResourceColumn
├── components/          # Sidebar, MetricCard, StatusBar, ResourceManager
└── sections/            # ejemplos: Overview, Users, Logs, Settings (reemplazables)
```

## Dependencias

`react` `react-dom` `lucide-react` `@supabase/supabase-js` + Tailwind (dev).
