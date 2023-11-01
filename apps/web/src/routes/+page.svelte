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
  <p class="intro">Wir haben eine Leidenschaft für schönes Design und eine tolle User Experience. Diese Leidenschaft nutzen wir, um ein Erlebnis für deine Nutzer zu schaffen, dass funktioniert.</p>
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

  .intro {
    max-inline-size: 40ch;
    font-size: var(--font-size-largest);
  }
</style>