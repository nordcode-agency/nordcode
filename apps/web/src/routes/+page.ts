import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		title: 'Welcome to nordcode!',
		content: 'Hallo, Freunde.'
	};
}) satisfies PageLoad;
