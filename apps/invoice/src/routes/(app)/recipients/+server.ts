import { deleteRecipient, updateOrCreateRecipient } from '$lib/db/api/recipients';
import type { Recipient } from '$lib/invoice/models/Invoice.model';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
    const recipient = (await request.json()) as Recipient;
    await updateOrCreateRecipient(recipient);
    return json({ recipientId: recipient.id }, { status: 201 });
};

export const DELETE: RequestHandler = async ({ request }) => {
    const json = await request.json();
    const recipientId = json.id as string;
    if (!recipientId) return json({ error: 'Recipient ID not provided' }, { status: 400 });
    await deleteRecipient(recipientId);
    return new Response(null, { status: 204 });
};
