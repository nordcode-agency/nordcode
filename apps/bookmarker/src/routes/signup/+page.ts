import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		title: 'Sign Up',
		content: 'Sign up for a new account.'
	};
}) satisfies PageLoad;
