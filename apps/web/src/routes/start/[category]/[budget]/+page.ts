import type { PageLoad } from "../$types";

export const load = (async () => {
    return {
        title: 'nordcode – Lass uns starten.',
    };
}) satisfies PageLoad;
