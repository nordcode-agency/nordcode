import { writable } from 'svelte/store';
import type { Bookmark } from '$lib/modules/bookmarks/Bookmark';

export const bookmarkToEdit = writable<Bookmark | null>(null);

export const addTag = (tag: string) => {
	bookmarkToEdit.update((bookmark) => {
		if (bookmark) {
			bookmark.tags.push(tag);
		}
		return bookmark;
	});
};

export const removeTag = (tag: string) => {
	bookmarkToEdit.update((bookmark) => {
		if (bookmark) {
			bookmark.tags = bookmark.tags.filter((t) => t !== tag);
		}
		return bookmark;
	});
};
