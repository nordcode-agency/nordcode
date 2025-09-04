import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';

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

