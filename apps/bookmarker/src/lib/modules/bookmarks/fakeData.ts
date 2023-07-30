import type { Bookmark } from '$lib/modules/bookmarks/Bookmark';
import { createBookmarkId } from '$lib/modules/bookmarks/Bookmark';

export const fakeData: Bookmark[] = [
	{
		id: createBookmarkId('test', '1'),
		url: 'https://www.google.com',
		title: 'Google',
		description: 'Search engine',
		image: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png',
		dateAdded: new Date('2023-05-05'),
		tags: ['search']
	},
	{
		id: createBookmarkId('test', '2'),
		url: 'https://bmrks.com/',
		title: 'Bmrks',
		description: 'Bookmarks',
		image: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png',
		dateAdded: new Date('2023-06-05'),
		tags: ['tool']
	},
	{
		id: createBookmarkId('test', '3'),
		url: 'https://www.nngroup.com/articles/',
		title: 'Nielsen Norman Group',
		description: 'Articles',
		image: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png',
		dateAdded: new Date('2023-06-06'),
		tags: ['ux']
	},
	{
		id: createBookmarkId('test', '4'),
		url: 'https://naturgartenshop.com/',
		title: 'Naturgarten Shop',
		description: 'Shop',
		image: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png',
		dateAdded: new Date('2023-07-06'),
		tags: []
	}
];
