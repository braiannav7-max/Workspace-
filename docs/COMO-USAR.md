# Cómo usar los bloques

Guía práctica para armar una web copiando bloques del workspace.

## 1. Explorá el catálogo

Abrí **`bloques-html/_index.html`** en el navegador (doble clic). Es la vidriera:
todas las categorías y variantes. Click en cualquier tarjeta → se abre el bloque en vivo.

## 2. Elegí variantes

Para una landing típica vas a querer, en orden:
`navbar → hero → features → pricing → testimonios → cta → formulario → footer`.

Abrí las variantes que te gusten y decidí cuáles usar.

## 3. Copiá el bloque

Cada archivo de bloque es autocontenido. Para ensamblar varios en una sola página:

1. Creá un archivo nuevo (ej. `index.html`) partiendo de `bloques-html/_plantilla-bloque.html`
   (ya trae Tailwind + Inter + AOS configurados).
2. De cada bloque que quieras, copiá **solo el contenido entre los comentarios**
   `<!-- ===== BLOQUE: ... ===== -->` y el cierre de su sección (no el `<head>` ni el `<body>`,
   eso ya lo tenés en la plantilla).
3. Pegalos en orden dentro del `<body>` de tu archivo nuevo.
4. Si algún bloque trae su propio `<script>` (toggle de pricing, carrusel, menú mobile),
   copiá también ese script.

## 4. Personalizá

- **Color de marca:** buscá y reemplazá `indigo-600` (y `indigo-700` en hovers) por el color del cliente.
- **Textos:** cambiá títulos, párrafos y botones.
- **Imágenes:** reemplazá los `placehold.co` / `pravatar` por las reales.
- **Logo:** en navbar y footer.

## 5. Probá

Abrí tu archivo en el navegador. Redimensioná la ventana para chequear mobile.
Verificá que las animaciones (AOS) y los scripts (toggle, carrusel, menú) funcionen.

---

**Tip:** mirá `_ejemplo-landing.html` en la raíz: es una landing completa ya ensamblada
con bloques, para que veas el resultado final y la uses como base.

## Notas técnicas

- Todo corre por CDN (Tailwind, Inter, AOS): necesitás conexión a internet para que se vea bien.
- Para producción real (no maqueta), conviene compilar Tailwind y autohostear las fuentes.
  Eso se hace en la fase React del workspace (ver `ROADMAP.md`).
- Los formularios hoy son demo (`preventDefault`): en producción se conectan a un backend/endpoint.
