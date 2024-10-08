import type { BankingDetails } from '$lib/invoice/models/Invoice.model';
import { type RequestHandler, json } from '@sveltejs/kit';
import { updateOrCreateBankdetail, deleteBankdetail } from '$lib/db/api/bankDetails';

export const POST: RequestHandler = async ({ request }) => {
    const bankDetails = (await request.json()) as BankingDetails;
    await updateOrCreateBankdetail(bankDetails);
    return json({ iban: bankDetails.iban }, { status: 201 });
};

export const DELETE: RequestHandler = async ({ request }) => {
    const json = await request.json();
    const iban = json.iban as string;
    if (!iban) return json({ error: 'IBAN not provided' }, { status: 400 });
    await deleteBankdetail(iban);
    return new Response(null, { status: 204 });
};
