import type { LayoutServerLoad } from './$types';
import { CollectionCookieName } from '$lib/modules/api/Cookies';
import { validate as uuidValidate } from 'uuid';

export const load = (async ({ cookies }) => {
	const collectionId = cookies.get(CollectionCookieName);

	if (!collectionId || !uuidValidate(collectionId)) {
		return { loggedIn: false, collectionId: null };
	}

	return {
		collectionId,
		loggedIn: true
	};
}) satisfies LayoutServerLoad;
