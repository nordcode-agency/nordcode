import type { Actions } from './$types';
import { getCookieOptions } from '$lib/modules/app/getCookieOptions';

export const actions = {
	default: async ({ platform, request, cookies }) => {
		const data = await request.formData();
		const userKey = data.get('user-id') as string;

		if (!userKey) {
			return { success: false, error: 'User Id must not be empty!' };
		}

		try {
			const user = await platform?.env.Users.get(userKey);

			if (!user) {
				return { success: false, error: 'User not found' };
			}

			// @ts-ignore - TODO: fix this - no way to get the correct types atm
			cookies.set(UserCookieName, userKey, getCookieOptions());

			return { success: true, error: null };
		} catch {
			return { success: false, error: 'User not found' };
		}
	}
} satisfies Actions;
