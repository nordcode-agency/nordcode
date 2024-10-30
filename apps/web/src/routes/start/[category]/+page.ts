import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const category = params.category;

	return {
		title: 'nordcode – Was ist dein Budget?',
		options: [
			{
				slug: `/start/${category}/till-1000`,
				displayNumbers: [1000],
				label: 'Bis %n'
			},
			{
				slug: `/start/${category}/1000-to-5000`,
				displayNumbers: [1000, 5000],
				label: '%n bis %n'
			},
			{
				slug: `/start/${category}/5000-to-10000`,
				displayNumbers: [5000, 10_000],
				label: '%n bis %n'
			},
			{
				slug: `/start/${category}/more-than-10000`,
				displayNumbers: [10_000],
				label: 'Mehr als %n'
			}
		]
	};
}) satisfies PageLoad;
