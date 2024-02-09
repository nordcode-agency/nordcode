<script lang="ts">
	import type { TProjects } from '$lib/content';
	import ActionCard from './ActionCard.svelte';
	import ProjectCard from './ProjectCard.svelte';

	export let projects: TProjects;
</script>

<div class="nc-stack container">
	<div class="headings">
		<h1 class="text">Wir erschaffen digitale Erlebnisse.</h1>
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
                <button slot="action" class="nc-button -primary">Loslegen</button>
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
		display: grid;
		gap: var(--spacing-far);
		align-content: center;
	}

	h1 {
		hyphens: none;
		font-weight: var(--font-weight-regular);
		/* font-size: var(--font-size-display); @todo adjust theme */
		font-size: 3rem;
		line-height: 4rem;

		@media (--md-n-above) {
			font-size: 4rem;
			line-height: 5rem;
		}

		background: linear-gradient(
			to left,
			var(--color-brand-secondary-base),
			var(--color-brand-primary-base)
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
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
