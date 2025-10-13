import { loadInvoices } from '$lib/db/api/invoices';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes';

export const load: PageServerLoad = async ({ params }) => {
    const invoices = await loadInvoices();

    if (invoices) {
        return {
            invoices,
        };
    }

    error(404, 'No invoices found. Did you forget to create the file?');
};
