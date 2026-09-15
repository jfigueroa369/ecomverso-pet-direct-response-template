# Pet Direct Response · Astro

Template independiente de ecomversity-template. Está diseñada mobile-first para
landings de respuesta directa con una composición editorial propia (no reutiliza
el layout de Editable Next.js): barra superior fija, contador de unidades y
tiempo, hero asimétrico, problema, evidencia antes/después, mecanismo, galería
modular, beneficios, prueba social, comparación, ofertas, FAQ y checkout.

El precio, moneda, combos, cobertura y disponibilidad siguen siendo autoridad
del panel central. ORDER_TOKEN sólo vive en servidor y /api/order reenvía el
pedido al panel. Cloudinary usa la carpeta ecomversity/<slug>/pet-direct-response/
y puede activarse con PUBLIC_CLOUDINARY_CLOUD_NAME y PUBLIC_CLOUDINARY_FOLDER.

## Verificación

npm install
npm run template:doctor
npm run check
npm run build

public/media contiene assets de ejemplo generados para validar la composición:
hero, antes/después y cuatro piezas de galería. En una landing real se sustituyen
por los public IDs aprobados en el manifiesto y se validan en Cloudinary antes de
publicar. `public/checkout-assets` conserva los banners oficiales compartidos por
Visual IA Astro para que el modal de pedido mantenga el mismo contrato visual y
operativo.

## Contratos visuales heredados

El ticker superior y el contador de unidades funcionan con el mismo patrón de
sesión que Visual IA: no cambian precios ni inventario del panel y sólo presentan
el estado configurado por el producto. El checkout continúa enviando la
intención COD al panel; el servidor sigue siendo la autoridad de precio, oferta,
moneda, cobertura y disponibilidad.
