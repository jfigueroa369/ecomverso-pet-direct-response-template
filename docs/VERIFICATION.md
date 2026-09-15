# Verificación de integración

Última verificación: 15 de septiembre de 2026.

## Resultado

- `npm run template:doctor`, `npm run check` y `npm run build` pasan en el
  template canónico.
- El workflow n8n `Panel · Crear sitio completo (app)` terminó la provisión
  controlada en la ejecución `13080`.
- El smoke repo usa el mismo contrato y conserva los tres assets base de
  checkout (`banner-garantia.webp`, `banner-pago.webp`, `sello-garantia.webp`).
- `https://pet-direct-response-smoke-2026.decompras247.com/api/health`
  responde `200` con `template: pet-direct-response-astro`, `coreVersion:
  1.1.0` y las capacidades de tracking, proxies, Cloudinary y mobile direct
  response.
- El dominio público responde `200` para los assets de checkout y el CTA abre
  el formulario de pedido sin enviar datos durante la prueba.

## Condición comercial

La landing smoke queda activa técnicamente, pero el panel muestra
`Falta definir el precio de venta` hasta que se asocie un producto con precio
vigente. No se crea ni se simula una venta real durante el smoke test.

## Repetir la prueba

```text
npm install
npm run template:doctor
npm run check
npm run build
```

En producción, comprobar primero `/api/health`, después los tres assets de
checkout y finalmente abrir el CTA. El pedido sólo se prueba con el modo
controlado descrito en `panel-ecommerce/OPERACION-LANDINGS.md`.
