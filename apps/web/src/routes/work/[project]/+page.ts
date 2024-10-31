import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const { projects } = await import('$lib/content');
	const project = projects.find((prj) => prj.name === params?.project);

	if (!project) {
		error(404, `Projekt "${params.project}" konnte nicht gefunden werden.`);
	}

	return { ...project, title: "hallo sie" };
}) satisfies PageLoad;
