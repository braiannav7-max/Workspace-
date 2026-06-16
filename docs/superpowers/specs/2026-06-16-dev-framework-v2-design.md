# Dev Framework V2 — Documento de Diseño

**Fecha:** 2026-06-16
**Estado:** Aprobado (pendiente revisión final del usuario)
**Fase cubierta por este spec:** Fase 1 — Fábrica de bloques HTML
**Repo:** https://github.com/braiannav7-max/Workspace-

---

## 1. Propósito

Construir una **infraestructura permanente de desarrollo**: un workspace reutilizable
que permita afrontar cualquier proyecto desde un porcentaje ya resuelto, extrayendo
patrones de los mejores repositorios open source, adaptándolos y documentándolos.

Este documento define **Fase 1**, deliberadamente acotada. Las fases siguientes
(React, IA, automatización, SaaS) quedan documentadas como visión en `ROADMAP.md`,
pero **no se construyen hasta que Fase 1 esté terminada y usada**.

### Estrategia de producto (decisión clave)

> **HTML = maquetas rápidas para presentar al cliente.
> React = producción, una vez que el trabajo está aprobado.**

El HTML no compite con React: es la **etapa anterior**. Sirve para mostrar la idea
rápido y barato. Cuando el cliente aprueba y el trabajo se confirma, se migra a React
(fase futura). Esto convierte cualquier "limitación" del HTML en una ventaja: velocidad
y bajo costo en la etapa de propuesta.

---

## 2. Alcance de Fase 1

### Dentro de alcance

- Biblioteca de **bloques HTML + Tailwind** copy-paste para armar maquetas/landings.
- Capa de animación liviana vía CDN (AOS por defecto; GSAP solo si un bloque puntual lo requiere).
- Catálogo visual (`_index.html`) que renderiza todos los bloques en una página.
- Documentación de uso y convenciones.
- Repositorio git conectado a GitHub (privado).

### Fuera de alcance (documentado en ROADMAP, NO se construye ahora)

- Componentes React / Next.js.
- Agentes IA (Mastra), prompts, RAG, memoria.
- Dashboards, backend, base de datos.
- Automatización (n8n, Evolution API, email).
- SaaS boilerplate (auth, billing, multi-tenant).

---

## 3. Arquitectura

**Enfoque elegido: librería de carpetas (copy-paste).**

El workspace NO se instala, NO se compila, NO usa monorepo ni npm. Cada bloque es una
carpeta autocontenida. Para usar un bloque: se abre su carpeta, se ve el preview en el
navegador, se copia el código y se adapta al proyecto del cliente.

Razones de la decisión:
- El usuario prefiere herramientas simples (sin tooling pesado).
- El foco es webs/landings para clientes, donde cada proyecto se adapta igual.
- Cero fricción: no hay builds que se rompan ni dependencias que mantener.

Trade-off aceptado: un fix en un bloque **no se propaga** automáticamente a proyectos
viejos; se corrige donde haga falta. Es aceptable para maquetas de cliente.

### Estructura de carpetas (Fase 1)

```
Workspace-/
├── README.md              ← Qué es y cómo se usa (corto, práctico)
├── ROADMAP.md             ← Visión de capas futuras (React, IA, SaaS, etc.)
├── .gitignore
│
├── docs/
│   ├── COMO-USAR.md       ← Cómo agarrar un bloque y meterlo en un proyecto
│   ├── CONVENCIONES.md    ← Naming, estados, anatomía de un bloque
│   └── NUEVO-PROYECTO.md  ← Checklist al arrancar una web nueva
│
├── bloques-html/          ← CAPA 1: HTML puro
│   ├── _index.html        ← Catálogo visual de TODOS los bloques
│   ├── navbar/
│   ├── hero/
│   ├── features/
│   ├── pricing/
│   ├── testimonios/
│   ├── cta/
│   ├── formularios/
│   └── footer/
│
└── bloques-react/         ← CAPA 2: vacío en Fase 1 (se llena en fase futura)
    └── .gitkeep
```

---

## 4. Anatomía de un bloque

Cada bloque es una carpeta autocontenida:

```
hero/
├── README.md              ← 10 líneas: qué es, cuándo usarlo, qué tocar, fuente+licencia
├── hero-fullscreen.html   ← Variante 1
├── hero-split.html        ← Variante 2
└── hero-minimal.html      ← Variante 3
```

Reglas:

- **Cada `.html` es autocontenido y abrible solo.** Incluye Tailwind por CDN y, si usa
  animación, AOS por CDN. Doble clic → se ve funcionando, sin build ni servidor.
- **2-3 variantes por bloque.** Distintos clientes piden cosas distintas; tener variantes
  evita rehacer desde cero.
- **README corto (≈10 líneas).** Para HTML no hace falta JSON tipado de input/output (eso
  es para los agentes IA de fases futuras). Solo: qué es, cuándo usarlo, qué personalizar
  (colores, textos, imágenes), y **crédito a la fuente open source + su licencia**.

### Convenciones

| Regla | Definición |
|-------|-----------|
| **Naming** | `hero-fullscreen.html`, `pricing-toggle.html` — descriptivo y **consistente**. |
| **Estados** | `draft` (a medio hacer) / `listo` (probado en navegador). Nada más. |
| **Versionado** | No se versiona HTML salvo cambio que rompa una variante en uso. El versionado pesado (`v1/v2/deprecated`) se reserva para los agentes IA de fases futuras. |
| **Atribución** | Cada bloque acredita en su README de qué repo se extrajo y bajo qué licencia. |

---

## 5. Nivel visual y animación

Bloques **HTML profesionales + capa de animación liviana**:

- **AOS (Animate On Scroll)** vía CDN por defecto: scroll-reveal, fade, stagger. Se aplica
  con atributos `data-aos`, copy-paste, sin configuración compleja.
- **GSAP** vía CDN solo si un bloque puntual necesita animación más avanzada (parallax serio,
  timelines). No se usa por defecto para mantener los bloques livianos.

Esto da un acabado premium sin necesitar React, manteniendo todo copy-paste.

---

## 6. Fuentes open source (corrige el mapeo del doc original)

El documento original mapeaba mal las fuentes para HTML: listaba shadcn/ui, Magic UI,
Aceternity y Tremor, que son **librerías React** y no se copian a un `.html` directo.

**Fuentes correctas para `bloques-html/` (HTML + Tailwind, open source):**

| Fuente | Qué aporta | Licencia (verificar al extraer) |
|--------|-----------|----------------------------------|
| HyperUI | Bloques HTML+Tailwind copy-paste | MIT |
| Flowbite | Librería amplia de bloques | Open core (MIT) |
| Preline UI | Bloques con componentes interactivos | Open source |
| Meraki UI | Bloques light/dark | MIT |
| Tailblocks | Secciones listas | MIT |

**No se copia** de fuentes comerciales/cerradas (ej. Tailwind UI, partes pagas de
Shadcnblocks). Las fuentes React (shadcn, Magic UI, Aceternity) se reservan para
`bloques-react/` en fase futura.

### Proceso de extracción (por bloque)

1. Buscar las mejores variantes en las fuentes open source (WebFetch a su código/docs).
2. **Verificar la licencia** del repo en ese momento (no asumir).
3. Adaptar el markup al estándar del workspace (Tailwind CDN, autocontenido, abrible solo).
4. Acreditar fuente + licencia en el README del bloque.

---

## 7. Bloques a construir en Fase 1

Los 8 bloques que componen ~90% de cualquier landing, con 2-3 variantes cada uno:

| Bloque | Variantes objetivo |
|--------|--------------------|
| `navbar/` | sticky, transparente, con menú mobile |
| `hero/` | fullscreen, split, minimal |
| `features/` | grid 3-col, con íconos, alternado |
| `pricing/` | 3 tiers, con toggle mensual/anual |
| `testimonios/` | cards, carrusel, logos |
| `cta/` | banner simple, con fondo |
| `formularios/` | contacto, captura de lead |
| `footer/` | simple, con links + newsletter |

Más: `_index.html` (catálogo visual), `docs/` (3 archivos), `README.md`, `ROADMAP.md`.

---

## 8. Catálogo visual (`_index.html`)

Una sola página HTML que renderiza/enlaza todos los bloques disponibles, agrupados por
categoría, para responder de un vistazo: *"¿qué bloques tengo y cómo se ven?"*. Es la
"vidriera" del workspace. Se abre en el navegador sin servidor.

---

## 9. GitHub

- `git init` con rama `main`, `.gitignore` apropiado.
- Remote conectado: `https://github.com/braiannav7-max/Workspace-.git` (privado).
- Commits incrementales: uno por bloque o grupo de bloques, con mensajes claros.

---

## 10. Criterio de éxito de Fase 1

> Abrir `_index.html`, elegir bloques, pegarlos en un archivo nuevo, y tener una
> **landing completa funcionando en el navegador en menos de 30 minutos.**

Si eso se cumple, el framework está *probado* (no solo construido), respetando el
principio de "validar con un caso real antes de dar por terminado".

---

## 11. Decisiones registradas

- **Uso:** mix (proyectos propios + clientes).
- **Arquitectura:** carpetas copy-paste (no monorepo).
- **Nivel técnico del usuario:** prefiere simple → sin tooling pesado.
- **Foco Fase 1:** webs/landings (lo más repetitivo).
- **Nivel visual:** HTML pro + animación CDN.
- **Migración a React:** futura, cuando el trabajo se confirma.
- **GitHub:** repo privado, el usuario lo creó en la web.
