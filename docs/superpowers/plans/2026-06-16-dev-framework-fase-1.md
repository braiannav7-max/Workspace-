# Dev Framework — Fase 1 (Fábrica de bloques HTML) — Plan de Implementación

> **Para workers agénticos:** SUB-SKILL REQUERIDA: usar superpowers:subagent-driven-development (recomendado) o superpowers:executing-plans para implementar este plan tarea por tarea. Los pasos usan checkbox (`- [ ]`) para seguimiento.

**Goal:** Construir una biblioteca copy-paste de 8 bloques HTML+Tailwind (con 2-3 variantes c/u), un catálogo visual `_index.html`, y documentación, para armar maquetas de landing en minutos.

**Architecture:** Carpetas autocontenidas, sin build ni npm. Cada bloque es uno o más archivos `.html` abribles directamente en el navegador (Tailwind por CDN + AOS por CDN para animación). El catálogo `_index.html` enlaza y previsualiza todos los bloques.

**Tech Stack:** HTML5, Tailwind CSS (CDN Play), AOS (Animate On Scroll, CDN). Fuentes de extracción: HyperUI, Flowbite, Preline, Meraki UI, Tailblocks (verificar licencia al extraer). Git + GitHub.

**Verificación:** No hay tests automatizados. Cada bloque se verifica **abriéndolo en el navegador** (`open <archivo>.html` en macOS) y confirmando visualmente que renderiza, es responsive y la animación funciona.

---

## Estructura de archivos

```
Workspace-/
├── README.md                  ← Crear (Task 1)
├── ROADMAP.md                 ← Crear (Task 1)
├── docs/
│   ├── COMO-USAR.md           ← Crear (Task 10)
│   ├── CONVENCIONES.md        ← Crear (Task 1)
│   └── NUEVO-PROYECTO.md      ← Crear (Task 10)
├── bloques-html/
│   ├── _index.html            ← Crear (Task 2), actualizar en cada bloque
│   ├── _plantilla-bloque.html ← Crear (Task 2): skeleton base reutilizable
│   ├── navbar/                ← Task 3
│   ├── hero/                  ← Task 4
│   ├── features/              ← Task 5
│   ├── pricing/               ← Task 6
│   ├── testimonios/           ← Task 7
│   ├── cta/                   ← Task 8
│   ├── formularios/           ← Task 9
│   └── footer/                ← Task 9
└── bloques-react/
    └── .gitkeep               ← Crear (Task 1)
```

**Skeleton base de un bloque** (todo `.html` de bloque parte de esto — autocontenido):

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Bloque] — [Variante]</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">
</head>
<body class="bg-white text-slate-900">

  <!-- ===== BLOQUE: [nombre] / variante [x] ===== -->
  <!-- Fuente: [repo] · Licencia: [MIT/etc] -->
  <!-- ... markup del bloque ... -->

  <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
  <script>AOS.init({ duration: 600, once: true });</script>
</body>
</html>
```

---

### Task 1: Scaffolding del workspace (estructura + docs base)

**Files:**
- Create: `README.md`
- Create: `ROADMAP.md`
- Create: `docs/CONVENCIONES.md`
- Create: `bloques-react/.gitkeep`
- Create: `bloques-html/` (directorio, vía primer archivo)

- [ ] **Step 1: Crear `README.md`** con: qué es el workspace, cómo se usa (abrir `_index.html`, copiar bloque, adaptar), y link al spec y al ROADMAP. Máximo ~40 líneas, práctico.

- [ ] **Step 2: Crear `ROADMAP.md`** con la visión de las 6 capas del doc original como fases futuras (React, IA/Mastra, dashboards, automatización n8n, SaaS), marcando Fase 1 (HTML) como la actual.

- [ ] **Step 3: Crear `docs/CONVENCIONES.md`** con: naming de archivos, estados (`draft`/`listo`), anatomía de un bloque (carpeta + variantes + README), y regla de atribución de fuente+licencia.

- [ ] **Step 4: Crear `bloques-react/.gitkeep`** (carpeta vacía reservada para fase futura).

- [ ] **Step 5: Commit**

```bash
git add README.md ROADMAP.md docs/CONVENCIONES.md bloques-react/.gitkeep
git commit -m "scaffold: estructura base del workspace + docs de convenciones"
```

---

### Task 2: Catálogo visual `_index.html` + plantilla de bloque

**Files:**
- Create: `bloques-html/_index.html`
- Create: `bloques-html/_plantilla-bloque.html`

- [ ] **Step 1: Crear `bloques-html/_plantilla-bloque.html`** con el skeleton base de arriba (Tailwind CDN + AOS CDN + comentarios de fuente/licencia). Es el molde del que se copia cada bloque nuevo.

- [ ] **Step 2: Crear `bloques-html/_index.html`** — página catálogo. Debe tener: header con título "Catálogo de Bloques", y una sección por categoría (navbar, hero, features, pricing, testimonios, cta, formularios, footer) con un grid de tarjetas. Cada tarjeta: nombre de la variante + link `target="_blank"` que abre el `.html` del bloque. Las categorías arrancan vacías con un texto "— pendiente —" y se van llenando en cada task siguiente. Usa Tailwind CDN.

- [ ] **Step 3: Verificar en el navegador**

Run: `open bloques-html/_index.html`
Expected: se abre el catálogo con las 8 categorías listadas (vacías por ahora), bien maquetado y responsive.

- [ ] **Step 4: Commit**

```bash
git add bloques-html/_index.html bloques-html/_plantilla-bloque.html
git commit -m "feat: catálogo visual _index.html + plantilla base de bloque"
```

---

### Task 3: Bloque `navbar/` (3 variantes)

**Files:**
- Create: `bloques-html/navbar/README.md`
- Create: `bloques-html/navbar/navbar-sticky.html`
- Create: `bloques-html/navbar/navbar-transparente.html`
- Create: `bloques-html/navbar/navbar-mobile.html`
- Modify: `bloques-html/_index.html` (registrar las 3 variantes en la sección navbar)

- [ ] **Step 1: Extraer referencia + verificar licencia.** WebFetch a HyperUI (https://www.hyperui.dev/components/marketing/banners y /headers) y/o Flowbite para patrones de navbar. Confirmar licencia MIT antes de usar.

- [ ] **Step 2: Crear las 3 variantes** partiendo de `_plantilla-bloque.html`: `navbar-sticky.html` (fija arriba al hacer scroll), `navbar-transparente.html` (transparente sobre hero, se opaca al scrollear), `navbar-mobile.html` (con botón hamburguesa que abre menú). Cada una autocontenida, con comentario de fuente+licencia.

- [ ] **Step 3: Crear `navbar/README.md`** (≈10 líneas): qué es, cuándo usar cada variante, qué personalizar (logo, links, colores), fuente + licencia.

- [ ] **Step 4: Registrar en `_index.html`** las 3 variantes en la sección navbar (reemplazar "— pendiente —" por las tarjetas con links).

- [ ] **Step 5: Verificar en el navegador**

Run: `open bloques-html/navbar/navbar-sticky.html bloques-html/navbar/navbar-transparente.html bloques-html/navbar/navbar-mobile.html`
Expected: las 3 renderizan, son responsive, el menú mobile abre/cierra, el sticky/transparente reaccionan al scroll.

- [ ] **Step 6: Commit**

```bash
git add bloques-html/navbar bloques-html/_index.html
git commit -m "feat(bloques): navbar con 3 variantes (sticky, transparente, mobile)"
```

---

### Task 4: Bloque `hero/` (3 variantes)

**Files:**
- Create: `bloques-html/hero/README.md`
- Create: `bloques-html/hero/hero-fullscreen.html`
- Create: `bloques-html/hero/hero-split.html`
- Create: `bloques-html/hero/hero-minimal.html`
- Modify: `bloques-html/_index.html`

- [ ] **Step 1: Extraer referencia + verificar licencia.** WebFetch a HyperUI (sección heroes), Tailblocks. Confirmar licencia.

- [ ] **Step 2: Crear las 3 variantes** desde la plantilla: `hero-fullscreen.html` (pantalla completa con CTA y animación AOS fade-up en el título), `hero-split.html` (texto a un lado, imagen al otro), `hero-minimal.html` (centrado, limpio). Autocontenidas, con animación AOS aplicada.

- [ ] **Step 3: Crear `hero/README.md`** (≈10 líneas) con qué/cuándo/personalizar/fuente+licencia.

- [ ] **Step 4: Registrar en `_index.html`** la sección hero.

- [ ] **Step 5: Verificar en el navegador**

Run: `open bloques-html/hero/hero-fullscreen.html bloques-html/hero/hero-split.html bloques-html/hero/hero-minimal.html`
Expected: renderizan, responsive, la animación AOS dispara al cargar/scrollear.

- [ ] **Step 6: Commit**

```bash
git add bloques-html/hero bloques-html/_index.html
git commit -m "feat(bloques): hero con 3 variantes (fullscreen, split, minimal)"
```

---

### Task 5: Bloque `features/` (3 variantes)

**Files:**
- Create: `bloques-html/features/README.md`
- Create: `bloques-html/features/features-grid.html`
- Create: `bloques-html/features/features-iconos.html`
- Create: `bloques-html/features/features-alternado.html`
- Modify: `bloques-html/_index.html`

- [ ] **Step 1: Extraer referencia + verificar licencia** (HyperUI sección features/content, Flowbite). Confirmar licencia.
- [ ] **Step 2: Crear las 3 variantes** desde la plantilla: `features-grid.html` (grid 3 columnas), `features-iconos.html` (cada feature con ícono SVG inline), `features-alternado.html` (filas texto/imagen alternadas). AOS stagger en las tarjetas.
- [ ] **Step 3: Crear `features/README.md`** (qué/cuándo/personalizar/fuente+licencia).
- [ ] **Step 4: Registrar en `_index.html`** la sección features.
- [ ] **Step 5: Verificar:** `open bloques-html/features/features-grid.html bloques-html/features/features-iconos.html bloques-html/features/features-alternado.html` → renderizan, responsive, animación escalonada visible.
- [ ] **Step 6: Commit**

```bash
git add bloques-html/features bloques-html/_index.html
git commit -m "feat(bloques): features con 3 variantes (grid, iconos, alternado)"
```

---

### Task 6: Bloque `pricing/` (2 variantes)

**Files:**
- Create: `bloques-html/pricing/README.md`
- Create: `bloques-html/pricing/pricing-3tiers.html`
- Create: `bloques-html/pricing/pricing-toggle.html`
- Modify: `bloques-html/_index.html`

- [ ] **Step 1: Extraer referencia + verificar licencia** (HyperUI sección pricing, Meraki UI). Confirmar licencia.
- [ ] **Step 2: Crear las 2 variantes:** `pricing-3tiers.html` (3 planes, el del medio destacado), `pricing-toggle.html` (toggle mensual/anual con JS vanilla que cambia los precios). Autocontenidas.
- [ ] **Step 3: Crear `pricing/README.md`** (qué/cuándo/personalizar/fuente+licencia).
- [ ] **Step 4: Registrar en `_index.html`** la sección pricing.
- [ ] **Step 5: Verificar:** `open bloques-html/pricing/pricing-3tiers.html bloques-html/pricing/pricing-toggle.html` → renderizan, responsive, el toggle cambia los precios.
- [ ] **Step 6: Commit**

```bash
git add bloques-html/pricing bloques-html/_index.html
git commit -m "feat(bloques): pricing con 2 variantes (3 tiers, toggle mensual/anual)"
```

---

### Task 7: Bloque `testimonios/` (3 variantes)

**Files:**
- Create: `bloques-html/testimonios/README.md`
- Create: `bloques-html/testimonios/testimonios-cards.html`
- Create: `bloques-html/testimonios/testimonios-carrusel.html`
- Create: `bloques-html/testimonios/testimonios-logos.html`
- Modify: `bloques-html/_index.html`

- [ ] **Step 1: Extraer referencia + verificar licencia** (HyperUI testimonials, Flowbite). Confirmar licencia.
- [ ] **Step 2: Crear las 3 variantes:** `testimonios-cards.html` (grid de tarjetas con foto+nombre+quote), `testimonios-carrusel.html` (carrusel con JS vanilla y botones prev/next), `testimonios-logos.html` (banda de logos de clientes). Autocontenidas.
- [ ] **Step 3: Crear `testimonios/README.md`** (qué/cuándo/personalizar/fuente+licencia).
- [ ] **Step 4: Registrar en `_index.html`** la sección testimonios.
- [ ] **Step 5: Verificar:** `open` las 3 → renderizan, responsive, el carrusel avanza/retrocede.
- [ ] **Step 6: Commit**

```bash
git add bloques-html/testimonios bloques-html/_index.html
git commit -m "feat(bloques): testimonios con 3 variantes (cards, carrusel, logos)"
```

---

### Task 8: Bloque `cta/` (2 variantes)

**Files:**
- Create: `bloques-html/cta/README.md`
- Create: `bloques-html/cta/cta-banner.html`
- Create: `bloques-html/cta/cta-fondo.html`
- Modify: `bloques-html/_index.html`

- [ ] **Step 1: Extraer referencia + verificar licencia** (HyperUI CTA, Tailblocks). Confirmar licencia.
- [ ] **Step 2: Crear las 2 variantes:** `cta-banner.html` (banner simple full-width con título+botón), `cta-fondo.html` (con imagen/gradiente de fondo y overlay). AOS fade-up.
- [ ] **Step 3: Crear `cta/README.md`** (qué/cuándo/personalizar/fuente+licencia).
- [ ] **Step 4: Registrar en `_index.html`** la sección cta.
- [ ] **Step 5: Verificar:** `open bloques-html/cta/cta-banner.html bloques-html/cta/cta-fondo.html` → renderizan, responsive.
- [ ] **Step 6: Commit**

```bash
git add bloques-html/cta bloques-html/_index.html
git commit -m "feat(bloques): cta con 2 variantes (banner, fondo)"
```

---

### Task 9: Bloques `formularios/` y `footer/`

**Files:**
- Create: `bloques-html/formularios/README.md`
- Create: `bloques-html/formularios/form-contacto.html`
- Create: `bloques-html/formularios/form-lead.html`
- Create: `bloques-html/footer/README.md`
- Create: `bloques-html/footer/footer-simple.html`
- Create: `bloques-html/footer/footer-links.html`
- Create: `bloques-html/footer/footer-newsletter.html`
- Modify: `bloques-html/_index.html`

- [ ] **Step 1: Extraer referencia + verificar licencia** (HyperUI forms y footers, Flowbite). Confirmar licencia.
- [ ] **Step 2: Crear formularios:** `form-contacto.html` (nombre/email/mensaje con validación HTML5), `form-lead.html` (captura corta nombre+email/teléfono). Autocontenidos.
- [ ] **Step 3: Crear footers:** `footer-simple.html` (logo+copyright), `footer-links.html` (columnas de links), `footer-newsletter.html` (con input de suscripción).
- [ ] **Step 4: Crear `formularios/README.md` y `footer/README.md`** (qué/cuándo/personalizar/fuente+licencia).
- [ ] **Step 5: Registrar en `_index.html`** las secciones formularios y footer.
- [ ] **Step 6: Verificar:** `open` los 5 archivos → renderizan, responsive, validación de formularios funciona.
- [ ] **Step 7: Commit**

```bash
git add bloques-html/formularios bloques-html/footer bloques-html/_index.html
git commit -m "feat(bloques): formularios (contacto, lead) y footer (simple, links, newsletter)"
```

---

### Task 10: Docs de uso + verificación del criterio de éxito

**Files:**
- Create: `docs/COMO-USAR.md`
- Create: `docs/NUEVO-PROYECTO.md`
- Create: `_ejemplo-landing.html` (maqueta de prueba, temporal, NO se commitea)

- [ ] **Step 1: Crear `docs/COMO-USAR.md`** — paso a paso: abrir `_index.html`, elegir variante, copiar el `<body>` del bloque a tu archivo, ajustar textos/colores/imágenes, repetir. Incluir nota sobre Tailwind CDN y AOS.

- [ ] **Step 2: Crear `docs/NUEVO-PROYECTO.md`** — checklist al arrancar una web de cliente: crear archivo `index.html`, importar Tailwind+AOS, ensamblar bloques en orden (navbar → hero → features → pricing → testimonios → cta → form → footer), personalizar marca.

- [ ] **Step 3: PRUEBA DEL CRITERIO DE ÉXITO.** Crear `_ejemplo-landing.html` ensamblando una landing completa copiando bloques del catálogo (navbar + hero + features + pricing + testimonios + cta + formulario + footer). Cronometrar mentalmente.

- [ ] **Step 4: Verificar en el navegador**

Run: `open _ejemplo-landing.html`
Expected: una landing completa coherente, responsive, con animaciones, ensamblada solo copiando bloques. Si llevó <30 min → criterio de éxito CUMPLIDO.

- [ ] **Step 5: Borrar la maqueta de prueba** (era solo para validar): `rm _ejemplo-landing.html`

- [ ] **Step 6: Commit final**

```bash
git add docs/COMO-USAR.md docs/NUEVO-PROYECTO.md
git commit -m "docs: guía de uso + checklist de nuevo proyecto; Fase 1 completa y validada"
```

- [ ] **Step 7: Push a GitHub**

```bash
git push origin main
```

---

## Notas de verificación general

- **MacOS:** `open archivo.html` abre en el navegador por defecto.
- **Responsive:** redimensionar la ventana o usar DevTools (Cmd+Opt+I → toggle device) para confirmar mobile.
- **Animación:** AOS dispara al hacer scroll; en bloques cortos se ve al recargar.
- **Licencias:** ningún bloque entra al repo sin confirmar que su fuente es open source (MIT/similar) y sin acreditarla en el README. NO usar Tailwind UI ni fuentes pagas.
