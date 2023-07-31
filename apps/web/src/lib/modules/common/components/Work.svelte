<script>
	import WorkCard from "./WorkCard.svelte";

</script>
<section class="nc-ram-grid">
  
  <WorkCard />
  <WorkCard />
  <WorkCard />
  <WorkCard />
  <WorkCard />
</section>

<style>
  .nc-ram-grid {
    --fd-ram-grid-min-width: 300px;

    padding: var(--spacing-base);
  }
</style>