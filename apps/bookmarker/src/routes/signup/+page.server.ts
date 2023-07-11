import type { Actions } from './$types';
import { createUser } from '$lib/modules/api/User';
import { getCookieOptions } from '$lib/modules/app/getCookieOptions';
import { UserCookieName } from '$lib/modules/api/Cookies';

export const actions = {
	default: async ({ platform, request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		const { user, userKey } = createUser(email ?? '');

		if (!userKey || !user) {
			return { success: false, error: 'User not created' };
		}

		try {
			await platform?.env.Users.put(userKey, user);
			// @ts-ignore - TODO: fix this - no way to get the correct types atm
			cookies.set(UserCookieName, userKey, getCookieOptions());

			return { success: true, error: null, userKey };
		} catch {
			return { success: false, error: 'User not created' };
		}
	}
} satisfies Actions;
