<script lang="ts">
import type { TProjects } from '$lib/content';
import { Navigation } from '$lib/content/navigation';
import { ensureTrailingSlash } from '$lib/utils/ensureTrailingSlash';
import ActionCard from './ActionCard.svelte';
// import ProjectCard from './ProjectCard.svelte';

interface Props {
    projects?: TProjects;
}

let { projects }: Props = $props();
</script>

<div class="nc-stack container">
    <div class="headings">
        <h1 class="section-title nc-stack">
            <span class="maintitle">Webseiten, die begeistern</span>
            <span class="subtitle"><strong>
                    Deine</strong> Webagentur für gute digitale Projekte</span>
        </h1>
    </div>
    <div class="footer nc-box">
        <!-- @todo Activate, when there are enough projects -->
        <!-- <div class="featured-project">
			<ProjectCard
				heading={projects[0].heading}
				cover={projects[0].cover}
				slug={projects[0].slug}
				name={projects[0].name}
			/>
		</div>
		<div class="featured-project">
			<ProjectCard
				heading={projects[1].heading}
				cover={projects[1].cover}
				slug={projects[1].slug}
				name={projects[1].name}
			/>
		</div> -->
        <div style="inline-size: min(240px, 100%)">
            <ActionCard heading="Lass uns schauen, wie wir dir helfen können">
                {#snippet action()}
                    <a
                        href={ensureTrailingSlash(Navigation.start.url)}
                        class="nc-button -brand -big"
                    >Starte dein Projekt</a>
                {/snippet}
            </ActionCard>
        </div>
    </div>
</div>

<style>
@custom-media --sm-n-above (width >= 480px);

.subtitle {
    font-weight: var(--font-weight-default);
    font-size: 1.125rem;
    background-filter: blur(2px);
}

.container {
    inline-size: 100%;
    flex-grow: 1;
}

.headings {
    max-inline-size: 68ch;
    padding-inline: var(--spacing-adaptive);
    flex-grow: 1;
    display: flex;
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

.-big {
    inline-size: 100%;

    @media (--sm-n-above) {
        --control-height-base: 4rem;

        font-size: var(--font-size-large);
    }
}
</style>
