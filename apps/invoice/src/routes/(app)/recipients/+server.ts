import type { Recipient } from '$lib/invoice/models/Invoice.model';
import { type RequestHandler, json } from '@sveltejs/kit';
import { updateOrCreateRecipient } from '$lib/db/api/recipients';

export const POST: RequestHandler = async ({ request }) => {
    const recipient = (await request.json()) as Recipient;
    await updateOrCreateRecipient(recipient);
    return json({ recipientId: recipient.id }, { status: 201 });
};
