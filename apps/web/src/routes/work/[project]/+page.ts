import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const { projects } = await import('$lib/content');
  const project = projects.find((prj) => prj.slug === params?.project);

  if (!project){
    throw error(404, `Projekt "${params.project}" konnte nicht gefunden werden.`);
  }

  return { ...project };
}