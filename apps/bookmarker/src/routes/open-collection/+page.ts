import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		title: 'Open collection',
		content: 'Open your collection.'
	};
}) satisfies PageLoad;
