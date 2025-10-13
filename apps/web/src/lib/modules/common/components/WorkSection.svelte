<script lang="ts">
import type { WorkProject } from '$lib/types';
import ProjectCard from './ProjectCard.svelte';

let { projects }: { projects: WorkProject[] | readonly WorkProject[] } = $props();
</script>

<section id="work" class="section nc-box nc-stack -stretched work">
    <h2 class="section-title heading-bg">Das haben wir gemacht</h2>
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
        <ProjectCard
            heading={projects[3].heading}
            subheading={projects[3].subheading}
            cover={projects[3].cover}
            slug={projects[3].slug}
            name={projects[3].name}
        />
    </div>
</section>

<style>
.more-work {
    --nc-ram-grid-min-width: calc(30 * var(--spacing-base));

    inline-size: 100%;
}
</style>
