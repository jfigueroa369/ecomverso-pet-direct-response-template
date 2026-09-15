import type { APIRoute } from 'astro';
import { LANDING_CONTRACT_VERSION, LANDING_CORE_VERSION, LANDING_TEMPLATE_KEY } from '../../lib/contract';
export const prerender = false;
export const GET: APIRoute = () => Response.json({ ok: true, service: 'ecomverso-landing', runtime: 'astro', template: LANDING_TEMPLATE_KEY, contractVersion: LANDING_CONTRACT_VERSION, coreVersion: LANDING_CORE_VERSION, capabilities: ['order-proxy','cloudinary-manifest','mobile-direct-response'] }, { headers: { 'Cache-Control': 'no-store' } });
