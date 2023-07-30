import type { PageLoad } from '../../../../.svelte-kit/types/src/routes/$types';
import { error, redirect } from '@sveltejs/kit';
import type { Bookmark } from '$lib/modules/bookmarks/Bookmark';
import { isDev } from '$lib/modules/app/getEnv';
import { fakeData } from '$lib/modules/bookmarks/fakeData';

export const load = (async ({ url, parent, platform, params }) => {
	const { loggedIn, collectionId } = await parent();
	if (!loggedIn || !collectionId) {
		redirect(307, '/login');
	}

	const slug = params.slug;

	if (!slug) {
		throw error(404, 'Not found');
	}

	let bookmark: Bookmark = isDev()
		? fakeData.find((bm) => bm.id === slug)
		: await platform?.env.Bookmarks.get(slug);

	if (!bookmark) {
		throw error(404, 'Not found');
	}

	return {
		title: bookmark.title,
		content: bookmark.description,
		bookmark
	};
}) satisfies PageLoad;
