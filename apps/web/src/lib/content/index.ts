import ImgDesert from '$lib/assets/desert.avif?enhanced';
import ImgIce from '$lib/assets/ice.avif?enhanced';
import ImgItaly from '$lib/assets/italy.avif?enhanced';
import ImgMountains from '$lib/assets/mountains.avif?enhanced';
import WildtierrettungCover from '$lib/assets/projects/wildtierrettung/cover.webp?enhanced';
import type { WorkProject } from '$lib/types';

export const projects = [
	{
		heading: 'Telling a new story',
		subheading: 'Ricola',
		cover: {
			src: WildtierrettungCover,
			alt: 'Ein Kitz wird in eine Box verladen'
		},
		slug: '/work/ricolax',
		name: 'ricolax'
	},
	{
		heading: 'Vereinswebseite für Wildtierrettung',
		subheading: 'Wildtierrettung Rhein-Berg e.V.',
		cover: {
			src: WildtierrettungCover,
			alt: 'Ein Kitz wird in eine Box verladen'
		},
		slug: '/work/wildtierrettung-rhein-berg',
		name: 'wildtierrettung-rhein-berg',
		colorPalette: {
			light: ['#FBFFFB', '#040E04', '#285628', '#6A7301'],
			dark: ['#0A0C0A', '#EBEFEC', '#94C792', '#B6C058']
		},
		url: 'https://wildtierrettung-rhein-berg.de/',
		goal: 'Eine moderne Vorzeigewebseite, auf der Landwirte, interessierte Freiwillige und neue Helfer leicht finde, wonach sie suchen.',
		tags: ['Design', 'Entwicklung', 'Content', 'SEO'],
		hue: [142, 115]
	},
	{
		heading: 'A digital taste of your snack',
		subheading: 'Farmers Snack',
		cover: {
			src: ImgMountains,
			alt: 'Farmers Snack'
		},
		slug: '/work/farmers-snack',
		name: 'farmers-snack'
	},
	{
		heading: 'Feeling home in Italy',
		subheading: 'Limuncetti',
		cover: {
			src: ImgItaly,
			alt: 'Limuncetti Rentals'
		},
		name: 'limuncetti',
		slug: '/work/limuncetti'
	},
	{
		heading: 'Reshaping transparency',
		subheading: 'Reshape',
		cover: {
			src: ImgIce,
			alt: 'Reshape New Web App'
		},
		name: 'reshape',
		slug: '/work/reshape'
	},
	{
		heading: 'Travel the web',
		subheading: 'Traverly',
		cover: {
			src: ImgDesert,
			alt: 'A new digital travel experience'
		},
		name: 'traverly',
		slug: '/work/traverly'
	}
] as const satisfies readonly WorkProject[];

export type TProjects = typeof projects;
