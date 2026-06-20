# ROADMAP — Dev Framework

Visión por capas. Cada fase se construye **solo cuando la anterior está terminada y usada**.
Esto evita el "cementerio de módulos a medio hacer".

---

## ✅ Fase 1 — Fábrica de bloques HTML *(actual)*

Biblioteca copy-paste de bloques HTML+Tailwind para maquetas de cliente.
- 8 bloques (navbar, hero, features, pricing, testimonios, cta, formularios, footer)
- Catálogo visual `_index.html`
- Animación liviana vía CDN (AOS)
- **Fuentes:** HyperUI, Flowbite, Preline, Meraki UI, Tailblocks (open source)

**Criterio de éxito:** armar una landing completa en <30 min copiando bloques.

---

## 🔄 Fase 2 — Capa React *(iniciada)*

Migrar bloques validados a componentes React/Next.js para producción.
- `bloques-react/` con shadcn/ui, Magic UI, Aceternity (estas SÍ son fuentes React)
- Dashboards base (sidebar, header, auth UI)
  - ✅ **`dashboards/panel-admin/`** — panel admin config-driven (graduado de IEO). Gate + sidebar + métricas + tabla CRUD genérica + Supabase opcional. Estado `listo`, build verificado.
- Gráficos y KPIs (Tremor)

**Disparador:** cuando un proyecto aprobado necesite pasar de maqueta a producto real.
**Nota:** se arrancó esta fase en paralelo a Fase 1 por decisión de Braian (panel admin prioritario), no por cierre de Fase 1.

---

## ⏭️ Fase 3 — Inteligencia Artificial

Agentes construidos con Mastra + Claude.
- Agentes: sales, lead-analyzer, copywriter, onboarding
- Prompt library versionada
- RAG (knowledge base) y memoria persistente

**Nota:** acá SÍ aplica versionado pesado (v1/v2/deprecated) y JSON tipado de I/O.

---

## ⏭️ Fase 4 — Automatización

- n8n self-hosted (revisar licencia: Sustainable Use License, NO es open source libre —
  evaluar alternativa si se ofrece como SaaS a clientes)
- WhatsApp vía Evolution API (revisar licencia)
- Email con Resend + React Email

---

## ⏭️ Fase 5 — SaaS & Productos

- Boilerplate: auth (Auth.js), billing (Stripe), multi-tenant, RBAC
- Templates clonables (landing, SaaS starter, CRM, chatbot)

---

## Pendientes transversales (cuando apliquen)

- `LICENSES.md` — auditoría de licencias de cada fuente usada comercialmente
- Estrategia de sincronización con repos upstream
- Verificar versiones vigentes del stack antes de fijarlas (Next.js, Tailwind, Auth.js, n8n)
