import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    return {
        title: 'nordcode – Lass uns starten.',
        category: params.category,
        budget: params.budget,
    };
};
