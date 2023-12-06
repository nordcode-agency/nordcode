<script lang="ts">
  import Hero from "$lib/modules/common/components/Hero.svelte";
	import WorkCard from "$lib/modules/common/components/WorkCard.svelte";
	import Header from "$lib/modules/common/components/Header.svelte";
	import type { PageData } from "./$types";
	import About from "$lib/modules/common/components/About.svelte";

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="nc-stack fullscreen">
  <Header />
  <Hero projects={data.projects} />
</div>
<!-- <Work /> -->
<div class="nc-box intro">
  <p class="heading-bg">Wir haben eine Leidenschaft für schönes Design und eine tolle User Experience. Diese Leidenschaft nutzen wir, um ein Erlebnis für deine Nutzer zu schaffen, dass funktioniert.</p>
</div>
<div class="nc-box nc-stack -inherit -stretched work">
  <div>
    <WorkCard
      heading={data.projects[4].heading}
      subheading={data.projects[4].subheading}
      cover={data.projects[4].cover}
      slug={data.projects[4].slug}
    />
  </div>
  <div class="more-work nc-ram-grid -inherit">
    <WorkCard
      heading={data.projects[2].heading}
      subheading={data.projects[2].subheading}
      cover={data.projects[2].cover}
      slug={data.projects[2].slug}
    />
    <WorkCard
      heading={data.projects[3].heading}
      subheading={data.projects[3].subheading}
      cover={data.projects[3].cover}
      slug={data.projects[3].slug}
    />
  </div>
</div>
<About />

<style lang="postcss">
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

      @media (--lg-n-above) {
        font-size: calc(var(--font-size-largest) * 1.5);
      }
    }
  }

  .work {
    @media (--md-n-above) {
      --stack-gap: var(--spacing-far);
    }
  }

  .more-work {
    --nc-ram-grid-min-width: calc(25 * var(--spacing-base));
    --nc-ram-grid-gap: var(--stack-gap);

    inline-size: 100%;
  }
</style>