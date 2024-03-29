import type { LayoutServerLoad } from './$types';
import { loadIssuers } from '$lib/db/api/issuers';
import { loadBankdetails } from '$lib/db/api/bankDetails';
import { loadRecipients } from '$lib/db/api/recipients';

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
