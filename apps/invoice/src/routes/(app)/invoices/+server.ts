import { updateOrCreateInvoice } from '$lib/db/api/invoices';
import type { Invoice } from '$lib/invoice/models/Invoice.model';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
    const invoice = (await request.json()) as Invoice;
    await updateOrCreateInvoice(invoice);
    return json({ invoiceNumber: invoice.invoiceNumber }, { status: 201 });
};
