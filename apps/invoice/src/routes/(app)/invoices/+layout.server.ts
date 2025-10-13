import { loadBankdetails } from '$lib/db/api/bankDetails';
import { loadIssuers } from '$lib/db/api/issuers';
import { loadRecipients } from '$lib/db/api/recipients';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ depends }) => {
    const issuers = await loadIssuers();
    const bankDetails = await loadBankdetails();
    const recipients = await loadRecipients();
    depends('issuers:get');
    depends('bankDetails:get');
    depends('recipients:get');
    return {
        issuers,
        bankDetails,
        recipients,
    };
};
