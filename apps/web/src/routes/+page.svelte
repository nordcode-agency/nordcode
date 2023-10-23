<script lang="ts">
  import Hero from "$lib/modules/common/components/Hero.svelte";
	import WorkCard from "$lib/modules/common/components/WorkCard.svelte";
  import { projects } from '$lib/content/index';
	import Header from "$lib/modules/common/components/Header.svelte";
</script>

<svelte:head>
	<title>nordcode – we schaffen ein neues digitales Erlebnis.</title>
</svelte:head>

<div class="stack fullscreen">
  <Header />
  <Hero />
</div>
<!-- <Work /> -->
<div class="section row">
  <WorkCard
    heading={projects[2].heading}
    subheading={projects[2].subheading}
    cover={projects[2].cover}
    slug={projects[2].slug}
  />
  <WorkCard
    heading={projects[3].heading}
    subheading={projects[3].subheading}
    cover={projects[3].cover}
    slug={projects[3].slug}
  />
  <div class="nc-card">Mit Hilfe von Design und Technologie entstehen Marken, mit der sich deine Nutzer identifizieren können und Produkte, die einfach sind und sich den Bedürfnissen jeden einzelnen anpassen.</div>
</div>
<div class="section row">
  <div class="highlight">
    <WorkCard
      heading={projects[4].heading}
      subheading={projects[4].subheading}
      cover={projects[4].cover}
      slug={projects[4].slug}
    />
  </div>
</div>

<style lang="postcss">
  @import "@nordcode/ui/media";

  .fullscreen {
    min-block-size: 100dvh;
  }
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