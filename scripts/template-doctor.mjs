import { existsSync, readFileSync } from 'node:fs';
const required = ['package.json','astro.config.mjs','src/pages/index.astro','src/pages/api/health.ts','src/pages/api/order.ts','src/config/manifest.ts'];
const missing = required.filter((file) => !existsSync(file));
if (missing.length) { console.error('Faltan archivos:', missing.join(', ')); process.exit(1); }
const page = readFileSync('src/pages/index.astro','utf8');
for (const token of ['data-open-checkout','/api/order','manifest.media.hero']) if (!page.includes(token)) { console.error('Falta contrato visual:', token); process.exit(1); }
console.log('Pet Direct Response template: OK');
