# Pricing — `listo`

**Categoría:** Pricing · **Fuente:** HyperUI · **Licencia:** MIT

## Qué es
Bloques de tablas de precios autocontenidos (Tailwind CDN + Inter + AOS), estética limpia tipo Stripe con acento `indigo-600`. Cada `.html` se abre solo en el navegador.

## Cuándo usar cada variante
- **pricing-3tiers.html** — 3 planes fijos (Básico, Pro destacado, Empresa). Ideal cuando hay un único esquema de precio.
- **pricing-toggle.html** — misma estructura + switch Mensual/Anual que actualiza los precios en vivo. Usalo cuando ofrecés descuento por facturación anual.

## Qué personalizar
- **Planes:** nombres, descripciones y orden de las tarjetas.
- **Precios:** texto directo en 3tiers; `data-mensual` / `data-anual` en toggle.
- **Features:** items de cada `<ul>` con su check SVG inline.
- **Color:** acento `indigo-600` (reemplazá en clases para cambiar de marca).

> Nota: el toggle Mensual/Anual usa **JS vanilla inline** (sin dependencias); actualiza `textContent` vía `data-attributes`.
