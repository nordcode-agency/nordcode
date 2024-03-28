import type { Issuer } from '$lib/invoice/models/Invoice.model';
import { type RequestHandler, json } from '@sveltejs/kit';
import { updateOrCreateIssuer, deleteIssuer } from '$lib/db/api/issuers';

export const POST: RequestHandler = async ({ request }) => {
    const issuer = (await request.json()) as Issuer;
    await updateOrCreateIssuer(issuer);
    return json({ issuerId: issuer.id }, { status: 201 });
};

export const DELETE: RequestHandler = async ({ request }) => {
    const json = await request.json();
    const issuerId = json.id as string;
    if (!issuerId) return json({ error: 'Issuer ID not provided' }, { status: 400 });
    await deleteIssuer(issuerId);
    return new Response(null, { status: 204 });
};
