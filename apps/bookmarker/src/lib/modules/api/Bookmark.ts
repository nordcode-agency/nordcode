import type { User, UserId } from '$lib/modules/api/User';

type BookmarkId = `${UserId}_${string}`;

export type Bookmark = {
	id: BookmarkId;
	url: string;
	title: string;
	description: string;
	image: string;
};

// bookmarks are stored in the Bookmarks KV
// key is user_email_prefix + id

export const createBookmarkId = (user: User, id: string): BookmarkId => `${user.id}_${id}`;
