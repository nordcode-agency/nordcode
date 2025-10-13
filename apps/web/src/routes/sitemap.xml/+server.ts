import type { RequestHandler } from '@sveltejs/kit';
import * as sitemap from 'super-sitemap';

export const prerender = true;

export const GET: RequestHandler = async () => {
    return await sitemap.response({
        origin: 'https://nordcode.agency',
        excludeRoutePatterns: [
            '^/danke-fuer-deine-anfrage',
            '^/start.*',
        ],
    });
};
