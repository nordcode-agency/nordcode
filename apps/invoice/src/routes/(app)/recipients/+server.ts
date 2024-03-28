import type { Recipient } from '$lib/invoice/models/Invoice.model';
import { type RequestHandler, json } from '@sveltejs/kit';
import { updateOrCreateRecipient, deleteRecipient } from '$lib/db/api/recipients';

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
