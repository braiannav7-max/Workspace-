# Convenciones del Workspace

Reglas simples para que todo sea consistente y reutilizable.

## Naming de archivos

`[bloque]-[variante].html` — descriptivo y consistente.

Ejemplos: `navbar-sticky.html`, `hero-fullscreen.html`, `pricing-toggle.html`.

## Estados de un bloque

- **`draft`** → a medio hacer, no usar todavía.
- **`listo`** → probado en el navegador, se puede usar.

(Se indica en el README del bloque. Nada de versionado pesado `v1/v2` en HTML — eso se
reserva para los agentes IA de fases futuras.)

## Anatomía de un bloque

Cada bloque es una carpeta autocontenida:

```
hero/
├── README.md              ← ~10 líneas: qué es, cuándo usar, qué tocar, fuente+licencia
├── hero-fullscreen.html   ← Variante 1 (autocontenida, abrible sola)
├── hero-split.html        ← Variante 2
└── hero-minimal.html      ← Variante 3
```

Reglas:
- Cada `.html` es **autocontenido**: incluye Tailwind por CDN y, si anima, AOS por CDN.
  Doble clic → se ve funcionando, sin servidor ni build.
- **2-3 variantes** por bloque para cubrir distintos pedidos de cliente.
- README corto y práctico (qué/cuándo/qué personalizar/fuente).

## Atribución de fuente (obligatorio)

Todo bloque acredita en su README **de qué repo open source se extrajo y bajo qué licencia**.
Además, un comentario al inicio del markup:

```html
<!-- Fuente: HyperUI · Licencia: MIT -->
```

Solo usamos fuentes open source (MIT o similar). **NO** se copia de fuentes pagas/cerradas
(ej. Tailwind UI).

## Animación

- **AOS** (Animate On Scroll) por CDN por defecto: scroll-reveal con atributos `data-aos`.
- **GSAP** por CDN solo si un bloque puntual necesita algo más avanzado.
