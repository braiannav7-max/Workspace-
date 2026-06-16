# Dev Framework — Workspace

Infraestructura permanente de desarrollo: una **biblioteca de bloques listos para copiar**
con la que armar maquetas y landings de cliente en minutos, sin build ni configuración.

## Filosofía

No construimos desde cero. Extraemos patrones de los mejores repos open source, los
adaptamos a un estándar propio y los documentamos. Cada bloque acredita su fuente.

> **HTML = maquetas rápidas para presentar al cliente.
> React = producción, cuando el trabajo está aprobado.** (fase futura, ver `ROADMAP.md`)

## Cómo se usa

1. Abrí **`bloques-html/_index.html`** en el navegador → es el catálogo visual de todos los bloques.
2. Elegí la variante que te sirve y abrí su archivo `.html`.
3. Copiá el bloque a tu proyecto y adaptá textos, colores e imágenes.
4. Repetí hasta tener la landing completa.

No hay que instalar nada: cada bloque es un `.html` autocontenido (Tailwind y animaciones
por CDN). Doble clic y se ve funcionando.

## Estructura

```
bloques-html/     ← Bloques HTML+Tailwind (Fase 1 — actual)
  _index.html     ← Catálogo visual
bloques-react/    ← Componentes React (fase futura)
docs/             ← Cómo usar, convenciones, checklist de nuevo proyecto
```

## Documentación

- [docs/INTAKE-PROYECTO.md](docs/INTAKE-PROYECTO.md) — **empezá acá:** qué tipo de proyecto es y qué open source usar
- [docs/COMO-USAR.md](docs/COMO-USAR.md) — cómo agarrar un bloque y meterlo en un proyecto
- [docs/CONVENCIONES.md](docs/CONVENCIONES.md) — naming, estados, anatomía de un bloque
- [docs/NUEVO-PROYECTO.md](docs/NUEVO-PROYECTO.md) — checklist al arrancar una web
- [ROADMAP.md](ROADMAP.md) — visión de las fases futuras

## Estado

**Fase 1 — Fábrica de bloques HTML.** En construcción.
Spec y plan en [docs/superpowers/](docs/superpowers/).
