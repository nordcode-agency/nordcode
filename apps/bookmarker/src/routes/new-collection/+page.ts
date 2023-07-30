import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		title: 'Create collection',
		content: 'Create a new collection.'
	};
}) satisfies PageLoad;
