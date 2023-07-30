import type { Actions } from './$types';
import { v4 as uuid } from 'uuid';
import { CollectionCookieName } from '$lib/modules/api/Cookies';

export const actions = {
	default: async ({ platform, request, cookies }) => {
		const collectionId = uuid();

		cookies.set(CollectionCookieName, collectionId);

		return { success: true, error: null };
	}
} satisfies Actions;
