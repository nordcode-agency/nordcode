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
  section {
    position: relative;
    background-image: url($lib/assets/polestar.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-blend-mode: color-burn;
    /* @todo NEXT add a patterns with clip blend whatever and let polestar rotate slowly */
  }

  .bg-text {
    position: absolute;
    top: 0px;
    color: var(--color-brand-primary-base);
    font-weight: var(--font-weight-bold);
    font-size: 50rem;
    line-height: 20rem;
    color: oklch(var(--color-brand-primary-base-lch) / 0.2);
    /* background: linear-gradient(to left, var(--color-brand-secondary-strong), var(--color-brand-primary-strong)); */
    /* -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }
  .nc-ram-grid {
    --fd-ram-grid-min-width: 300px;
    --fd-ram-grid-gap: var(--spacing-far);

    padding: var(--spacing-base);
  }
</style>