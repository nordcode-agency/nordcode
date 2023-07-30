import type { Actions } from './$types';
import { validate as uuidValidate } from 'uuid';
import { CollectionCookieName } from '$lib/modules/api/Cookies';

export const actions = {
	default: async ({ platform, request, cookies }) => {
		const data = await request.formData();
		const collectionId = data.get('collection-id') as string;

		if (!collectionId) {
			return { success: false, error: 'Collection Id must not be empty!' };
		}

		if (!uuidValidate(collectionId)) {
			return { success: false, error: 'Collection Id is not valid!' };
		}

		cookies.set(CollectionCookieName, collectionId);

		return { success: true, error: null };
	}
} satisfies Actions;
