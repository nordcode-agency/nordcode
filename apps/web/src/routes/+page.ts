import { projects } from '$lib/content/index';
import type { PageLoad } from './$types';

export const load = (async () => {
    return {
        title: 'nordcode – wir schaffen ein neues digitales Erlebnis.',
        content:
            'Wir sind eine Webagentur mit Leidenschaft für schönes Design und User Experience. Wir entwickeln Websites, Webapps, E-Commerce Lösungen z.B mit Shopify, native Apps für iOS und Android. Wir unterstützen bei React oder Vue sowie CMS wie WordPress.',
        projects,
    };
}) satisfies PageLoad;
