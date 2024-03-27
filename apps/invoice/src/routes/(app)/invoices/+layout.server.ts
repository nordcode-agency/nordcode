import type { LayoutServerLoad } from './$types';
import { loadIssuers } from '$lib/db/api/issuers';

export const load: LayoutServerLoad = async ({ depends }) => {
    const issuers = await loadIssuers();
    depends('issuers:get');
    return {
        issuers,
    };
};
