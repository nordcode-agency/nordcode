<script lang="ts">
  import Hero from "$lib/modules/common/components/Hero.svelte";
	import WorkCard from "$lib/modules/common/components/WorkCard.svelte";
  import { projects } from '$lib/content/index';
</script>

<svelte:head>
	<title>nordcode – we schaffen ein neues digitales Erlebnis.</title>
</svelte:head>

<Hero />
<!-- <Work /> -->
<div class="section row">
  <WorkCard
    heading={projects[1].heading}
    subheading={projects[1].subheading}
    cover={projects[1].cover}
    slug={projects[1].slug}
  />
  <WorkCard
    heading={projects[2].heading}
    subheading={projects[2].subheading}
    cover={projects[2].cover}
    slug={projects[2].slug}
  />
  <div class="nc-card">Mit Hilfe von Design und Technologie entstehen Marken, mit der sich deine Nutzer identifizieren können und Produkte, die einfach sind und sich den Bedürfnissen jeden einzelnen anpassen.</div>
</div>
<div class="section row">
  <div class="highlight">
    <WorkCard
      heading={projects[2].heading}
      subheading={projects[2].subheading}
      cover={projects[2].cover}
      slug={projects[2].slug}
    />
  </div>
</div>

<style lang="postcss">
  @import "@nordcode/ui/media";
  .row {
    /* inline-size: var() */
    display: grid;
    row-gap: var(--spacing-farthest);
    column-gap: var(--spacing-far);

    @media (--md-n-above) {
      grid-template-columns: repeat(2, 1fr);

      & .highlight {
        grid-column: span 2;
      }
    }

    @media (--lg-n-above) {
      grid-template-columns: repeat(3, 1fr);

      & .highlight {
        grid-column: 2 / 4;
      }
    }
  }
</style>