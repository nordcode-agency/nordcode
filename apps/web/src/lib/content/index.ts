import type { MediaImage } from "$lib/types";

export const projects: {
  heading: string;
  subheading: string;
  cover: MediaImage;
  slug: string;
}[] = [
  {
    heading: 'Telling a new story',
    subheading: 'Ricola',
    cover: {
      src: 'https://images.unsplash.com/photo-1692912364084-97b9ae31a8e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
      alt: 'Farmers Snack'
    },
    slug: 'ricolax',
  },
  {
    heading: 'A sky full of stars',
    subheading: 'Hotplay',
    cover: {
      src: 'https://images.unsplash.com/photo-1692911070553-83862c0078d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
      alt: 'Farmers Snack'
    },
    slug: 'sky-full-of-stars',
  },
  {
    heading: 'A digital taste of your snack',
    subheading: 'Farmers Snack',
    cover: {
      src: 'https://images.unsplash.com/photo-1690738083729-f5d21709425c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3165&q=80',
      alt: 'Farmers Snack'
    },
    slug: 'farmers-snack',
  },
  {
    heading: 'Feeling home in Italy',
    subheading: 'Limuncetti',
    cover: {
      src: 'https://images.unsplash.com/photo-1691866068948-fd8869ef4094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80',
      alt: 'Limuncetti Rentals'
    },
    slug: 'limuncetti',
  },
  {
    heading: 'Reshaping transparency',
    subheading: 'Reshape',
    cover: {
      src: 'https://images.unsplash.com/photo-1690342824253-4d9488961ded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
      alt: 'Reshape New Web App'
    },
    slug: 'reshape',
  },
  {
    heading: 'Travel the web',
    subheading: 'Traverly',
    cover: {
      src: 'https://images.unsplash.com/photo-1682687219356-e820ca126c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
      alt: 'A new digital travel experience'
    },
    slug: 'traverly',
  },
];