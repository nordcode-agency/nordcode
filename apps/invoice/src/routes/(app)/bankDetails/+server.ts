import type { BankingDetails } from '$lib/invoice/models/Invoice.model';
import { type RequestHandler, json } from '@sveltejs/kit';
import { updateOrCreateBankdetail } from '$lib/db/api/bankDetails';

export const POST: RequestHandler = async ({ request }) => {
    const bankDetails = (await request.json()) as BankingDetails;
    await updateOrCreateBankdetail(bankDetails);
    return json({ iban: bankDetails.iban }, { status: 201 });
};
