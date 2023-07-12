import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		title: 'Login',
		content: 'Login to your account.'
	};
}) satisfies PageLoad;
