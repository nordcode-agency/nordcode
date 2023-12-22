<script lang="ts">
	import Header from "$lib/modules/common/components/Header.svelte";
	import type { PageData } from "../$types";


	export let data: PageData;

  const { questions } = data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="nc-stack fullscreen">
  <Header />
  <section class="nc-stack nc-center">
    <h1>Was ist dein Plan?</h1>
    <h2>Wähle die Option, die am besten für dich passt.</h2>
    <div class="nc-ram-grid grid">
      {#each questions as question}
        <div class="nc-card">
          <h3>{question.heading}</h3>
          <p>{question.desc}</p>
        </div>
      {/each}
    </div>
  </section>
</div>

<style lang="postcss">
  .grid {
    --nc-ram-grid-gap: var(--spacing-far);
    --nc-ram-grid-min-width: 40ch;

  }
</style>