<script>
  import Hero from "$lib/modules/common/components/Hero.svelte";
  import Work from "$lib/modules/common/components/Work.svelte";
	import WorkCard from "$lib/modules/common/components/WorkCard.svelte";
</script>

<svelte:head>
	<title>nordcode – we schaffen ein neues digitales Erlebnis.</title>
</svelte:head>

<Hero />
<!-- <Work /> -->
<div class="section row">
  <WorkCard />
  <WorkCard />
  <div class="nc-card">Mit Hilfe von Design und Technologie entstehen Marken, mit der sich deine Nutzer identifizieren können und Produkte, die einfach sind und sich den Bedürfnissen jeden einzelnen anpassen.</div>
</div>
<div class="section row">
  <div class="highlight">
    <WorkCard />
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