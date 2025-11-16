<script lang="ts">
import type { WorkProject } from '$lib/types';
import ProjectCard from './ProjectCard.svelte';

let { projects }: { projects: WorkProject[] | readonly WorkProject[] } = $props();

const visibleProjects = projects.slice(0, 4);
</script>

<section id="work" class="section nc-box nc-stack -stretched work">
    <h2 class="section-title heading-bg">Das haben wir gemacht</h2>
    <div class="more-work">
        {#each visibleProjects as project}
            <div>
                <ProjectCard
                    heading={project.heading}
                    subheading={project.subheading}
                    cover={project.cover}
                    slug={project.slug}
                    name={project.name}
                />
            </div>
        {/each}
    </div>
</section>

<style>
.more-work {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-base);

    inline-size: 100%;

    & > * {}

    & > *:nth-of-type(2n) {
        --side: 1;
    }
}

@media (min-width: 44rem) {
    .more-work {
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-far);
    }
}

@media (prefers-reduced-motion: no-preference) {
    @supports (animation-timeline: view()) {
        .more-work {
            & > * {
                transform-origin: center 50%;
                animation: project-slide-in linear both;
                animation-timeline: view();
                animation-range: cover 10% cover 30%;
            }

            & > *:nth-of-type(2n+1) {
                --side: 1;
            }
            & > *:nth-of-type(2n) {
                --side: -1;
            }

            & > *:nth-of-type(3) {
                transform-origin: center -150%;
                animation-range: cover 0% cover 13.5%;
            }

            & > *:nth-of-type(4) {
                transform-origin: center -50%;
                animation-range: cover 0% cover 13.5%;
            }
        }
    }
}

@media (min-width: 44rem) {
    @media (prefers-reduced-motion: no-preference) {
        @supports (animation-timeline: view()) {
            .more-work {
                & > *:nth-of-type(4) {
                    transform-origin: center -150%;
                    animation-range: cover 0% cover 13.5%;
                }
            }
        }
    }
}
</style>
