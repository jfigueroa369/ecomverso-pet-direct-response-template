export type Offer = { qty: number; label: string; detail: string; badge?: string; popular?: boolean };
export type Review = { name: string; city: string; quote: string };
export type GalleryItem = { src: string; alt: string; label: string; note: string };
export type DirectResponseManifest = {
  slug: string; name: string; eyebrow: string;
  hero: { headline: string; highlight: string; subheadline: string; cta: string; image: string };
  trust: string[];
  problem: { title: string; body: string; bullets: string[] };
  beforeAfter: { image: string; beforeLabel: string; afterLabel: string; caption: string };
  mechanism: { title: string; intro: string; steps: { number: string; title: string; body: string }[] };
  benefits: { title: string; body: string; icon: string }[];
  reviews: Review[];
  comparison: { title: string; rows: { label: string; product: string; alternative: string }[] };
  offers: Offer[];
  faq: { question: string; answer: string }[];
  media: { hero: string; beforeAfter: string };
  gallery: GalleryItem[];
};

const slug = String(process.env.PUBLIC_PRODUCT_SLUG || import.meta.env.PUBLIC_PRODUCT_SLUG || 'producto-ejemplo').trim();
const cloud = String(process.env.PUBLIC_CLOUDINARY_CLOUD_NAME || import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME || '').trim();
const folder = String(process.env.PUBLIC_CLOUDINARY_FOLDER || import.meta.env.PUBLIC_CLOUDINARY_FOLDER || 'ecomversity/' + slug + '/pet-direct-response').replace(/^\/+|\/+$/g, '');
export function asset(publicId: string, localFallback: string): string {
  return cloud ? 'https://res.cloudinary.com/' + cloud + '/image/upload/f_auto,q_auto/' + folder + '/' + publicId : localFallback;
}

export const manifest: DirectResponseManifest = {
  slug,
  name: 'Bocados de bienestar canino',
  eyebrow: 'Rutina diaria para perros · presentación de muestra',
  hero: {
    headline: 'Haz que su rutina vuelva a sentirse',
    highlight: 'ligera',
    subheadline: 'Una fórmula diaria pensada para acompañar digestión, piel y energía con una rutina sencilla que tu perro sí disfruta.',
    cta: 'QUIERO VER LAS PRESENTACIONES',
    image: asset('hero-dog', '/media/hero-dog.png'),
  },
  trust: ['Envío según cobertura', 'Pago contraentrega cuando aplica', 'Compra protegida', 'Atención para resolver dudas'],
  problem: {
    title: 'Cuando el malestar se vuelve parte de cada día',
    body: 'Verlo rascarse, perder energía o dejar de jugar cambia la rutina de toda la casa. La propuesta empieza por entender lo que está pasando y acompañarlo desde adentro.',
    bullets: ['Digestión irregular o sensibilidad estacional', 'Piel opaca, lamido o rascado frecuente', 'Menos ganas de jugar y moverse', 'Rutinas difíciles de sostener'],
  },
  beforeAfter: {
    image: asset('before-after-dog', '/media/before-after-dog.png'),
    beforeLabel: 'Antes de una rutina constante',
    afterLabel: 'Después de una rutina acompañada',
    caption: 'La imagen es demostrativa. Los resultados individuales dependen del perro y de la constancia.',
  },
  mechanism: {
    title: 'Una rutina de tres pasos, fácil de entender',
    intro: 'La comunicación de esta plantilla explica el mecanismo con bloques cortos y visuales, sin esconder el producto detrás de texto genérico.',
    steps: [
      { number: '01', title: 'Acompaña su digestión', body: 'Ingredientes seleccionados para integrarse a la rutina diaria y apoyar el equilibrio intestinal.' },
      { number: '02', title: 'Apoya piel y defensas', body: 'La fórmula se presenta como soporte integral para una piel más cómoda y un pelaje con mejor aspecto.' },
      { number: '03', title: 'Hazlo sostenible', body: 'Una porción sencilla convierte el cuidado en un hábito que puede mantenerse en el tiempo.' },
    ],
  },
  benefits: [
    { icon: '01', title: 'Menos fricción diaria', body: 'Una presentación práctica para sumar al momento que ya existe.' },
    { icon: '02', title: 'Bienestar desde adentro', body: 'La historia de producto se construye alrededor de digestión y equilibrio.' },
    { icon: '03', title: 'Más ganas de moverse', body: 'El objetivo es recuperar una rutina activa y cómoda.' },
    { icon: '04', title: 'Sabor que acepta', body: 'Formato de bocado para que el cuidado no se convierta en una pelea.' },
  ],
  reviews: [
    { name: 'Laura G.', city: 'Bogotá', quote: 'La rutina se volvió mucho más fácil y mi perrita está más tranquila.' },
    { name: 'Andrés M.', city: 'Medellín', quote: 'Lo que más noté fue que volvió a disfrutar su paseo y su comida.' },
    { name: 'Catalina R.', city: 'Cali', quote: 'Me gusta poder acompañar varios frentes sin llenar la casa de productos.' },
  ],
  comparison: {
    title: 'Una forma más clara de acompañar su bienestar',
    rows: [
      { label: 'Rutina diaria sencilla', product: 'Sí', alternative: 'Depende del formato' },
      { label: 'Apoyo digestivo', product: 'Incluido', alternative: 'No siempre' },
      { label: 'Presentación agradable', product: 'Bocado', alternative: 'Polvos o cápsulas' },
      { label: 'Información de uso', product: 'Visible', alternative: 'Variable' },
    ],
  },
  offers: [
    { qty: 1, label: '1 presentación', detail: 'Para comenzar la rutina' },
    { qty: 2, label: '2 presentaciones', detail: 'Para mantener continuidad', badge: 'MÁS ELEGIDA', popular: true },
    { qty: 4, label: '4 presentaciones', detail: 'Para hogares con más de un perro' },
  ],
  faq: [
    { question: '¿Cómo se integra a la rutina?', answer: 'La dosis y las condiciones exactas se muestran con la ficha oficial del producto antes de publicar.' },
    { question: '¿Puedo pedir contraentrega?', answer: 'El panel determina si está disponible para el país y la cobertura seleccionada.' },
    { question: '¿Cuándo llega?', answer: 'El tiempo y la cobertura se confirman en el checkout del panel antes de crear el pedido.' },
    { question: '¿Sustituye la atención veterinaria?', answer: 'No. Ante una condición de salud, consulta al veterinario y usa la ficha oficial del producto.' },
  ],
  media: {
    hero: asset('hero-dog', '/media/hero-dog.png'),
    beforeAfter: asset('before-after-dog', '/media/before-after-dog.png'),
  },
  gallery: [
    { src: asset('gallery-product-lifestyle', '/media/gallery-product-lifestyle.png'), alt: 'Frasco de bocados junto a un perro en casa', label: 'En su espacio', note: 'Una rutina que cabe en el día real.' },
    { src: asset('gallery-owner-dog', '/media/gallery-owner-dog.png'), alt: 'Persona compartiendo con su perro en casa', label: 'Más momentos', note: 'El bienestar también se nota en cómo conviven.' },
    { src: asset('gallery-usage', '/media/gallery-usage.png'), alt: 'Bocados y frasco preparados para servir', label: 'Fácil de sumar', note: 'Todo listo para acompañar su comida.' },
    { src: asset('gallery-offer', '/media/gallery-offer.png'), alt: 'Presentación de bocados en un set de envío', label: 'Tu presentación', note: 'Elige la cantidad que mejor encaja contigo.' },
  ],
};
