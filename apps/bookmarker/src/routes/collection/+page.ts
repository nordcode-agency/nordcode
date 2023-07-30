import type { PageLoad } from './$types';
import { type Bookmark, type CheckableTag } from '$lib/modules/bookmarks/Bookmark';
import { redirect } from '@sveltejs/kit';
import { isDev } from '$lib/modules/app/getEnv';
import { fakeData } from '$lib/modules/bookmarks/fakeData';

const getListOfTags = (bookmarks: Bookmark[]) => {
	const tags = new Set<string>();
	bookmarks.forEach((bookmark) => {
		bookmark.tags.forEach((tag) => {
			tags.add(tag);
		});
	});
	return Array.from(tags);
};

type BookmarkQuery = {
	search: string;
	tags: Set<string>;
};

function bookmarkMatchesTags(bookmark: Bookmark, tags: Set<string>) {
	return tags.size === 0 || bookmark.tags.some((t) => tags.has(t));
}

function filterBookmarks(bookmarks: Bookmark[], { search, tags }: BookmarkQuery) {
	return bookmarks.filter((bm) => {
		return (
			bm.title.toLowerCase().includes(search.toLowerCase().trim()) && bookmarkMatchesTags(bm, tags)
		);
	});
}

export const load = (async ({ url, parent, platform }) => {
	const { loggedIn, collectionId } = await parent();
	if (!loggedIn || !collectionId) {
		redirect(307, '/login');
	}

	let data: Bookmark[] = isDev() ? fakeData : await platform?.env.Bookmarks.list(collectionId);

	const tags = getListOfTags(data);
	const tagsInQuery = new Set(url.searchParams.getAll('tags'));
	const search = url.searchParams.get('search') || '';

	const checkedTags: CheckableTag[] = tags.map((tag) => {
		return {
			name: tag,
			checked: tagsInQuery.has(tag)
		};
	});

	const visibleBookmarks: Bookmark[] = filterBookmarks(data, {
		search,
		tags: tagsInQuery
	});

	return {
		title: 'List',
		content: 'A long list of your interests.',
		bookmarks: visibleBookmarks,
		tags: checkedTags,
		search
	};
}) satisfies PageLoad;
