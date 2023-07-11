import type { LayoutServerLoad } from './$types';
import { UserCookieName } from '$lib/modules/api/Cookies';
import { isDev } from '$lib/modules/app/getEnv';
import { DevUser } from '$lib/modules/app/dev-data/devUser';

export const load = (async ({ cookies, platform }) => {
	const userKey = cookies.get(UserCookieName);

	if (!userKey) {
		return { user: null };
	}

	if (isDev()) {
		return { user: DevUser };
	}

	const user = await platform?.env.Users.get(userKey);
	return { user };
}) satisfies LayoutServerLoad;
