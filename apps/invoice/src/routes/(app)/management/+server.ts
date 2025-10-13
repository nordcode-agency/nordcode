import { createBankDetailsFileIfNotExists } from '$lib/db/api/bankDetails';
import { createInvoiceFileIfNotExists } from '$lib/db/api/invoices';
import { createIssuerFileIfNotExists } from '$lib/db/api/issuers';
import { createRecipientFileIfNotExists } from '$lib/db/api/recipients';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
    await createBankDetailsFileIfNotExists();
    await createRecipientFileIfNotExists();
    await createInvoiceFileIfNotExists();
    await createIssuerFileIfNotExists();

    return new Response(null, { status: 201 });
};
