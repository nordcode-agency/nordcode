import type { PageLoad } from './$types';
import { projects } from '$lib/content/index';

export const load = (async () => {

	return {
		title: 'nordcode – we schaffen ein neues digitales Erlebnis.',
		content: 'Hallo, Freunde.',
		projects,
	};
}) satisfies PageLoad;
