# Pet Direct Response · Astro

Template independiente de ecomversity-template. Está diseñada mobile-first para
landings de respuesta directa con narrativa configurable por manifiesto:
problema, evidencia, mecanismo, beneficios, prueba social, comparación, ofertas,
FAQ y checkout.

El precio, moneda, combos, cobertura y disponibilidad siguen siendo autoridad
del panel central. ORDER_TOKEN sólo vive en servidor y /api/order reenvía el
pedido al panel. Cloudinary usa la carpeta ecomversity/<slug>/pet-direct-response/
y puede activarse con PUBLIC_CLOUDINARY_CLOUD_NAME y PUBLIC_CLOUDINARY_FOLDER.

## Verificación

npm install
npm run template:doctor
npm run check
npm run build

public/media contiene sólo assets de prueba generados para validar la composición.
En una landing real se sustituyen por los public IDs aprobados en el manifiesto y
se validan en Cloudinary antes de publicar.
