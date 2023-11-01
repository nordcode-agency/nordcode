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
<div class="section intro">
  <p>Wir haben eine Leidenschaft für schönes Design und eine tolle User Experience. Diese Leidenschaft nutzen wir, um ein Erlebnis für deine Nutzer zu schaffen, dass funktioniert.</p>
</div>
<div class="section stack -stretched work">
  <div>
    <WorkCard
      heading={projects[4].heading}
      subheading={projects[4].subheading}
      cover={projects[4].cover}
      slug={projects[4].slug}
    />
  </div>
  <div class="more-work nc-ram-grid">
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
  </div>
</div>

<style lang="postcss">
  @import "@nordcode/ui/media";

  .fullscreen {
    min-block-size: 100dvh;
  }

  .intro {
    block-size: 50dvh;
    display: flex;
    align-items: center;

    & p {
      max-inline-size: 40ch;
      margin-block: auto;
      font-size: var(--font-size-largest);
    }
  }

  .work {
    @media (--md-n-above) {
      --stack-gap: var(--spacing-far);
    }
  }

  .more-work {
    --nc-ram-grid-min-width: calc(25 * var(--spacing-base));
    --nc-ram-grid-gap: var(--_stack-gap);

    inline-size: 100%;
  }
</style>