import { trailingSlash } from 'astro:config/client';

export function ensureTrailingSlash(url: string): string {
    if (trailingSlash === 'always') {
        return url.endsWith('/') ? url : url + '/';
    } else if (trailingSlash === 'never') {
        return url.endsWith('/') ? url.slice(0, -1) : url;
    } else {
        return url;
    }
}
