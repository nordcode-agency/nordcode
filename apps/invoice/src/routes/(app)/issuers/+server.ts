import type { Issuer } from '$lib/invoice/models/Invoice.model';
import { type RequestHandler, json } from '@sveltejs/kit';
import { updateOrCreateIssuer } from '$lib/db/api/issuers';

export const POST: RequestHandler = async ({ request }) => {
    const issuer = (await request.json()) as Issuer;
    await updateOrCreateIssuer(issuer);
    return json({ issuerId: issuer.id }, { status: 201 });
};
