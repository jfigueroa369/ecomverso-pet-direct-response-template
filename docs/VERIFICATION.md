# Verificación de integración

Última verificación: 16 de septiembre de 2026.

## Resultado

- `npm run template:doctor`, `npm run check` y `npm run build` pasan en el
  template canónico.
- El workflow n8n `Panel · Crear sitio completo (app)` terminó la provisión
  controlada en la ejecución `13080`.
- El panel central publicó la release `1.1.1` desde
  `656c72cfcc0c67792a1e6b254cef5f877887c5d4`; el despliegue de EasyPanel
  terminó con `Success` el 16 de septiembre de 2026 a las 08:06:30 UTC.
- El health del servicio del panel
  (`https://cookieforge-panel-ecommerce.a4hphk.easypanel.host/api/health`)
  responde `200` después del despliegue.
- El smoke repo usa el mismo contrato y conserva los tres assets base de
  checkout (`banner-garantia.webp`, `banner-pago.webp`, `sello-garantia.webp`).
- El smoke histórico `pet-direct-response-smoke-2026.decompras247.com` ya no
  está publicado (durante esta auditoría devuelve `404`); no se usa como
  evidencia de producción ni se modifica su landing. Para una nueva prueba se
  debe reprovisionar un slug con el selector `Pet Direct Response · Astro`.
- QA móvil a 390×844: `scrollWidth` coincide con el viewport (390px), no hay
  desbordamiento horizontal y las 9 imágenes cargan tras recorrer la página.
- Los assets Cloudinary mantienen prioridad; cada imagen crítica declara un
  fallback local versionado para evitar bloques vacíos mientras n8n publica la
  carpeta `ecomversity/<slug>/pet-direct-response/`.

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
