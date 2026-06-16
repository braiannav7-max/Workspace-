# Intake de proyecto — qué open source usar

Primer paso cuando entra **cualquier** proyecto nuevo. Objetivo: en 5 minutos saber
**qué tipo es** y **con qué herramientas open source arrancar**, sin investigar de cero
cada vez.

> Filosofía del workspace: no construimos desde cero, elegimos el mejor open source
> probado y armamos arriba. Las stacks de abajo son **defaults**, no dogma:
> confirmá versiones/precios actuales antes de comprometerte con el cliente.

---

## 1. Preguntas de arranque (siempre)

- [ ] **¿Qué problema resuelve / cuál es el objetivo?** (1 frase)
- [ ] **¿Maqueta para presentar o producción?** → maqueta = rápido y descartable; producción = elegir bien.
- [ ] **¿Hay login / datos de usuarios?** → sí = app/SaaS; no = web/landing.
- [ ] **¿Quién edita el contenido después?** → el cliente = necesita CMS; vos = no.
- [ ] **¿Es una tarea repetitiva que corre sola?** → sí = automatización.
- [ ] **¿Integraciones?** (pagos, email, WhatsApp, CRM, calendario)
- [ ] **¿Hosting/presupuesto?** → free tier · pago · self-host.
- [ ] **¿Plazo y dominio?**

### Regla rápida de clasificación

| Si… | Tipo | Sección |
|-----|------|---------|
| Solo mostrar info / vender, sin login | **Web / Landing** | §2 |
| Login, datos, lógica de negocio | **App / SaaS** | §3 |
| Corre sola / repetitiva / integra sistemas | **Automatización** | §4 |
| Campañas, creativos, contenido, tráfico | **Marketing** | §5 |

Un proyecto puede combinar varios (ej: landing + automatización de leads).

---

## 2. Web / Landing

| Necesidad | Default open source | Alternativa |
|-----------|--------------------|-------------|
| Maqueta rápida para cliente | **Este Framework** (HTML + Tailwind CDN) | — |
| Sitio con varias páginas/contenido | **Astro** | Eleventy |
| El cliente edita el contenido | **Decap CMS** (ex Netlify CMS) | TinaCMS |
| Formularios sin backend | **Web3Forms** / Formspree | Netlify Forms |
| Deploy | **Cloudflare Pages** / Netlify | Vercel |

→ Detalle de armado de landing: [NUEVO-PROYECTO.md](NUEVO-PROYECTO.md)

## 3. App / SaaS

| Necesidad | Default open source | Alternativa |
|-----------|--------------------|-------------|
| Framework full-stack | **Next.js** | SvelteKit |
| UI | **shadcn/ui** + Tailwind | — |
| Backend + DB todo-en-uno | **Supabase** (Postgres) | PocketBase (self-host) |
| Auth | **Better Auth** / Supabase Auth | Auth.js |
| ORM | **Drizzle** | Prisma |
| Pagos | Stripe *(no open source, estándar)* | Lemon Squeezy |
| Deploy | **Railway** / Fly.io | Coolify (self-host) |

## 4. Automatización / Scripts

| Necesidad | Default open source | Alternativa |
|-----------|--------------------|-------------|
| Flujos visuales / integraciones | **n8n** (self-host) | Activepieces |
| Scripts a medida | Node/TS o Python | — |
| Scraping / navegador | **Playwright** | Crawlee |
| Tareas programadas | **GitHub Actions** / cron | — |
| Bot Telegram / Discord | **grammY** / discord.js | — |
| Colas / jobs | **BullMQ** (Redis) | — |

## 5. Marketing / Contenido

| Necesidad | Default open source | Alternativa |
|-----------|--------------------|-------------|
| Creativos y copy | Skill **agencia-neuroventas** | — |
| Landing / funnel | **Este Framework** | Astro |
| Analytics (privacy) | **Umami** / Plausible (self-host) | — |
| Email marketing | **Listmonk** (self-host) | Resend (dev) |
| Links cortos + tracking | **Dub** | — |

---

## 6. Cierre del intake

- [ ] Tipo(s) de proyecto definido(s).
- [ ] Stack elegido (anotar las herramientas reales que vas a usar).
- [ ] Crear carpeta del proyecto **fuera del workspace**.
- [ ] Si es web → seguir [NUEVO-PROYECTO.md](NUEVO-PROYECTO.md).
