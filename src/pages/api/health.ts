import type { APIRoute } from 'astro';
import { LANDING_CONTRACT_VERSION, LANDING_CORE_VERSION, LANDING_TEMPLATE_KEY } from '../../lib/contract';
export const prerender = false;
export const GET: APIRoute = () => Response.json({
  ok: true,
  service: 'ecomverso-landing',
  runtime: 'astro',
  template: LANDING_TEMPLATE_KEY,
  contractVersion: LANDING_CONTRACT_VERSION,
  coreVersion: LANDING_CORE_VERSION,
  // Keep the shared 1.1 contract explicit so the panel can verify that this
  // runtime supports attribution, tracking, payment and location proxies.
  capabilities: [
    'attribution-first-party',
    'tracking-runtime',
    'order-proxy',
    'payment-proxy',
    'locations-proxy',
    'cloudinary-manifest',
    'mobile-direct-response',
  ],
}, { headers: { 'Cache-Control': 'no-store' } });
