# Formularios — `listo`

**Categoría:** Formularios · **Fuente:** HyperUI · **Licencia:** MIT

## Qué es
Bloques de formulario HTML copy-paste, autocontenidos (Tailwind + AOS por CDN), con estética limpia, acento indigo-600 y validación HTML5. Cada `.html` se abre solo en el navegador.

## Cuándo usar cada variante
- **form-contacto.html** — Página/sección de contacto a 2 columnas (info + formulario completo: nombre, email, asunto, mensaje). Ideal para "Contacto" o footer de contacto.
- **form-lead.html** — Card centrada corta (nombre + email) para captura en landing/funnel o lista de espera. Máxima conversión, mínima fricción.

## Qué personalizar
- **Campos:** agregá/quitá inputs según lo que necesites recolectar.
- **Textos:** títulos, subtítulos, placeholders, datos de contacto y CTA.
- **Color:** reemplazá `indigo-600` / `indigo-500` por tu acento de marca.
- **Acción del submit:** hoy es **demo** con `e.preventDefault()` que solo muestra un mensaje de éxito. En **producción** conectá el form a un backend/endpoint (Formspree, API propia, etc.) y quitá/ajustá el `preventDefault`.

> Nota: ambos archivos son autocontenidos; no dependen de `_index.html` ni de otros recursos locales.
