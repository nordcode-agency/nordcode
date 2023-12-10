import type { WorkProject } from "$lib/types";
import ImgRicola from '$lib/assets/ricola.avif';
import ImgNewYork from '$lib/assets/new-york.avif'
import ImgMountains from '$lib/assets/mountains.avif'
import ImgItaly from '$lib/assets/italy.avif'
import ImgIce from '$lib/assets/ice.avif'
import ImgDesert from '$lib/assets/desert.avif'

export const projects = [
  {
    heading: 'Telling a new story',
    subheading: 'Ricola',
    cover: {
      src: ImgRicola,
      alt: 'Farmers Snack'
    },
    slug: 'ricolax',
  },
  {
    heading: 'A sky full of stars',
    subheading: 'Hotplay',
    cover: {
      src: ImgNewYork,
      alt: 'Farmers Snack'
    },
    slug: 'sky-full-of-stars',
  },
  {
    heading: 'A digital taste of your snack',
    subheading: 'Farmers Snack',
    cover: {
      src: ImgMountains,
      alt: 'Farmers Snack'
    },
    slug: 'farmers-snack',
  },
  {
    heading: 'Feeling home in Italy',
    subheading: 'Limuncetti',
    cover: {
      src: ImgItaly,
      alt: 'Limuncetti Rentals'
    },
    slug: 'limuncetti',
  },
  {
    heading: 'Reshaping transparency',
    subheading: 'Reshape',
    cover: {
      src: ImgIce,
      alt: 'Reshape New Web App'
    },
    slug: 'reshape',
  },
  {
    heading: 'Travel the web',
    subheading: 'Traverly',
    cover: {
      src: ImgDesert,
      alt: 'A new digital travel experience'
    },
    slug: 'traverly',
  },
] as const satisfies readonly WorkProject[];

export type TProjects = typeof projects;
