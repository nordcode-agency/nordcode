import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
    const { projects } = await import('$lib/content');
    const project = projects.find((prj) => prj.name === 'wildtierrettung-rhein-berg');

    if (!project) {
        error(404, `Projekt "Wildtierrettung" konnte nicht gefunden werden.`);
    }

    return { ...project };
}) satisfies PageLoad;
