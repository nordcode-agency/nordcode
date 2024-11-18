<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import type { WorkProject } from '$lib/types';

	let { projects }: { projects: WorkProject[] | readonly WorkProject[] } = $props();
</script>

<section id="work" class="section nc-box nc-stack -stretched work">
	<div>
		<ProjectCard
			heading={projects[4].heading}
			subheading={projects[4].subheading}
			cover={projects[4].cover}
			slug={projects[4].slug}
			name={projects[4].name}
		/>
	</div>
	<div class="more-work nc-ram-grid -inherit">
		<ProjectCard
			heading={projects[2].heading}
			subheading={projects[2].subheading}
			cover={projects[2].cover}
			slug={projects[2].slug}
			name={projects[2].name}
		/>
		<ProjectCard
			heading={projects[3].heading}
			subheading={projects[3].subheading}
			cover={projects[3].cover}
			slug={projects[3].slug}
			name={projects[3].name}
		/>
	</div>
</section>

<style lang="postcss">
	.more-work {
		--nc-ram-grid-min-width: calc(25 * var(--spacing-base));

		inline-size: 100%;
	}
</style>
