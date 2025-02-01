<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import type { WorkProject } from '$lib/types';

	let { projects }: { projects: WorkProject[] | readonly WorkProject[] } = $props();
</script>

<section id="work" class="section nc-box nc-stack -stretched work">
	<div class="more-work nc-ram-grid -inherit">
		<ProjectCard
			heading={projects[0].heading}
			subheading={projects[0].subheading}
			cover={projects[0].cover}
			slug={projects[0].slug}
			name={projects[0].name}
		/>
		<ProjectCard
			heading={projects[1].heading}
			subheading={projects[1].subheading}
			cover={projects[1].cover}
			slug={projects[1].slug}
			name={projects[1].name}
		/>
		<ProjectCard
			heading={projects[2].heading}
			subheading={projects[2].subheading}
			cover={projects[2].cover}
			slug={projects[2].slug}
			name={projects[2].name}
		/>

	</div>
</section>

<style lang="postcss">
	.more-work {
		--nc-ram-grid-min-width: calc(25 * var(--spacing-base));

		inline-size: 100%;
	}
</style>
