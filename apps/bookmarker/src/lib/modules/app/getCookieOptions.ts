import { isDev } from '$lib/modules/app/getEnv';

export const getCookieOptions = () => {
	return {
		path: '/',
		secure: !isDev(),
		sameSite: 'lax'
	};
};
