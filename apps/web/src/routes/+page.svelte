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
<div class="section">
  <div>Mit Hilfe von Design und Technologie entstehen Marken, mit der sich deine Nutzer identifizieren können und Produkte, die einfach sind und sich den Bedürfnissen jeden einzelnen anpassen.</div>
</div>
<div class="section">
  <WorkCard
    heading={projects[4].heading}
    subheading={projects[4].subheading}
    cover={projects[4].cover}
    slug={projects[4].slug}
  />
</div>

<style lang="postcss">
  @import "@nordcode/ui/media";

  .fullscreen {
    min-block-size: 100dvh;
  }
</style>