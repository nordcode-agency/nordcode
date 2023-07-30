type CollectionId = string;
type BookmarkId = `${CollectionId}_${string}`;

export type Bookmark = {
	id: BookmarkId;
	url: string;
	title: string;
	description: string;
	image: string;
	dateAdded: Date;
	tags: string[];
};

export type CheckableTag = {
	name: string;
	checked: boolean;
};

// bookmarks are stored in the Bookmarks KV
// key is user_email_prefix + id

export const createBookmarkId = (collectionId: CollectionId, id: string): BookmarkId =>
	`${collectionId}_${id}`;
