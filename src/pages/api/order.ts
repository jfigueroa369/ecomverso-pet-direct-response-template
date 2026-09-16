import type { APIRoute } from 'astro';
import { manifest } from '../../config/manifest';
import { LANDING_CORE_VERSION } from '../../lib/contract';
export const prerender = false;
export const POST: APIRoute = async ({ request }) => {
  const panelUrl = String(process.env.PUBLIC_PANEL_API_URL || import.meta.env.PUBLIC_PANEL_API_URL || '').replace(/\/$/, '');
  const token = process.env.ORDER_TOKEN || import.meta.env.ORDER_TOKEN;
  const body = await request.json().catch(() => null);
  if (!body) return Response.json({ ok: false, error: 'Pedido inválido.' }, { status: 400 });
  const required = ['fullName','cedula','phone','department','city','address','barrio'];
  if (required.some((key) => !String(body[key] || '').trim())) return Response.json({ ok: false, error: 'Faltan datos obligatorios.' }, { status: 400 });
  if (!panelUrl || !token) return Response.json({ ok: false, error: 'El checkout todavía no está conectado al panel.' }, { status: 503 });
  const quantity = Math.min(10, Math.max(1, Math.floor(Number(body.quantity) || 1)));
  const email = String(body.email || '').trim();
  if (email && !/^\S+@\S+\.\S+$/.test(email)) return Response.json({ ok: false, error: 'El correo electrónico no es válido.' }, { status: 400 });
  const payload = {
    requestId: String(body.requestId || crypto.randomUUID()),
    items: [{ slug: manifest.slug, quantity, offer: body.offer === 'exit' ? 'exit' : 'standard' }],
    customer: {
      fullName: String(body.fullName).trim(),
      cedula: String(body.cedula).trim(),
      phone: String(body.phone).trim(),
      department: String(body.department).trim(),
      city: String(body.city).trim(),
      address: String(body.address).trim(),
      barrio: String(body.barrio).trim(),
      ...(email ? { email } : {}),
    },
    note: String(body.note || '').trim(),
    paymentMethod: 'cod', source: manifest.slug,
    ...(body.tracking && typeof body.tracking === 'object' ? { tracking: body.tracking } : {}),
  };
  const response = await fetch(panelUrl + '/api/orders', { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-token': token, 'x-ecomverso-core-version': LANDING_CORE_VERSION }, body: JSON.stringify(payload), signal: AbortSignal.timeout(12000) });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) return Response.json({ ok: false, error: data?.error || 'El panel rechazó el pedido.' }, { status: 502 });
  return Response.json({ ok: true, orderNumber: data.orderNumber ?? data.number ?? data.id ?? null, payToken: data.payToken ?? null, paymentMethod: data.paymentMethod ?? 'COD' });
};
