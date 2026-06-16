# Checklist — Nuevo proyecto (web de cliente)

Pasos para arrancar una landing nueva usando el workspace.

## Antes de empezar

- [ ] ¿Qué tipo de web es? (landing de servicio, producto, evento, funnel)
- [ ] ¿Color de marca y logo del cliente?
- [ ] ¿Qué secciones necesita? (mínimo: hero + features + contacto)

## Armado

- [ ] Crear carpeta del proyecto **fuera del workspace** (no mezclar con el core).
- [ ] Crear `index.html` copiando `bloques-html/_plantilla-bloque.html`.
- [ ] Abrir `bloques-html/_index.html` y elegir variantes.
- [ ] Ensamblar en orden:
  - [ ] navbar
  - [ ] hero
  - [ ] features
  - [ ] pricing *(si aplica)*
  - [ ] testimonios *(si aplica)*
  - [ ] cta
  - [ ] formulario de contacto/lead
  - [ ] footer
- [ ] Copiar los `<script>` de los bloques interactivos (toggle, carrusel, menú mobile).

## Personalización

- [ ] Reemplazar `indigo-600` / `indigo-700` por el color de la marca.
- [ ] Cambiar todos los textos por los reales.
- [ ] Reemplazar imágenes placeholder por las del cliente.
- [ ] Logo en navbar y footer.
- [ ] Title, favicon y meta description.

## Verificación final

- [ ] Se ve bien en desktop y mobile (redimensionar / DevTools).
- [ ] Animaciones y scripts funcionan.
- [ ] Links y botones apuntan a donde deben.
- [ ] Formulario: definir a dónde envía (backend, email, servicio).

## Entrega

- [ ] Subir a Vercel/Netlify (HTML estático) o entregar el archivo.
- [ ] Si el cliente aprueba y el proyecto escala → evaluar migración a React (ver `ROADMAP.md`).
