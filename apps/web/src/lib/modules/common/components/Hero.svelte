<script lang="ts">
import type { TProjects } from '$lib/content';
import { Navigation } from '$lib/content/navigation';
import { ensureTrailingSlash } from '$lib/utils/ensureTrailingSlash';
import ActionCard from './ActionCard.svelte';
import ProjectCard from './ProjectCard.svelte';

interface Props {
    projects: TProjects;
}

let { projects }: Props = $props();
</script>

<div class="nc-stack container">
	<div class="headings">
		<h1 class="text section-title">Wir erschaffen digitale Erlebnisse.</h1>
	</div>
	<div class="footer nc-box">
		<div class="featured-project">
			<ProjectCard
				heading={projects[1].heading}
				cover={projects[1].cover}
				slug={projects[1].slug}
				name={projects[1].name}
			/>
		</div>
		<div class="featured-project">
			<ProjectCard
				heading={projects[5].heading}
				cover={projects[5].cover}
				slug={projects[5].slug}
				name={projects[5].name}
			/>
		</div>
		<div style="inline-size: min(240px, 100%)">
			<ActionCard heading="Lass uns schauen, wie wir dich unterstützen können">
				{#snippet action()}
					<a href={ensureTrailingSlash(Navigation.start.url)} class="nc-button -brand">{Navigation.start.name}</a>
				{/snippet}
			</ActionCard>
		</div>
	</div>
</div>

<style lang="postcss">
	.container {
		inline-size: 100%;
		flex-grow: 1;
	}

	.headings {
		max-inline-size: 68ch;
		padding-inline: var(--spacing-adaptive);
		flex-grow: 1;
		display: flex;
		gap: var(--spacing-far);
		align-items: center;
	}

	.footer {
		margin-inline-start: auto;
		inline-size: 100%;
		display: flex;
		justify-content: end;
		align-items: stretch;
		gap: var(--spacing-far);
		padding-block: var(--spacing-far);
	}

	.featured-project {
		inline-size: min(240px, 100%);

		&:first-child {
			display: none;

			@media (--md-n-above) {
				display: initial;
			}
		}
	}
</style>
