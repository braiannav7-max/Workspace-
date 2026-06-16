# Starter Next.js — Landing React (Fase 2)

Proyecto base para llevar una maqueta HTML aprobada a **producción React**.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Inter.

## Cómo usar

```bash
# 1. Copiá esta carpeta a un proyecto nuevo (fuera del workspace)
cp -r templates/landing-react ../mi-cliente

# 2. Instalá y corré
cd ../mi-cliente
npm install
npm run dev          # http://localhost:3000

# 3. Build de producción
npm run build && npm start
```

## Qué trae

- `src/app/layout.tsx` — layout con fuente Inter y estilos base.
- `src/app/page.tsx` — página que ensambla los componentes.
- `src/components/navbar.tsx` — navbar responsive con menú mobile (client component).
- `src/components/hero.tsx` — hero split.

## Cómo portar más bloques

Cada bloque HTML de `bloques-html/` se traduce a un componente en `src/components/`:
- Cambiá `class=` por `className=`.
- Atributos JS (`onclick`) → handlers de React; si usa estado/eventos, agregá `"use client"`.
- Los SVG van igual (ojo con `stroke-width` → `strokeWidth`).

## Fuente

Patrones portados de HyperUI (MIT). Ver `bloques-html/` para las versiones HTML originales.
