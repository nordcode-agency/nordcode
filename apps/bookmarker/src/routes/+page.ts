import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		title: 'Bookmarker',
		content: 'Simple bookmark collection app'
	};
}) satisfies PageLoad;
