import { error } from '@sveltejs/kit';
import { getInvoiceByNumber } from '$lib/db/api/invoices';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const { id } = params;
    const invoice = await getInvoiceByNumber(id);

    if (invoice) {
        return {
            invoice,
        };
    }

    error(404, `Invoice with id: ${id} not found.`);
};
