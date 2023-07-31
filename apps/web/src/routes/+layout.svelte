<script lang="ts">
  import Header from "$lib/modules/common/components/Header.svelte";
  import Footer from '$lib/modules/common/components/Footer.svelte';

  import { onMount } from "svelte";
  import { page } from "$app/stores";

  onMount(async () => {
    await import("@nordcode/ui/src/modules/dialogs/ts/dialogs")
  })
</script>


<svelte:head>
  <title>{$page.data.title}</title>
  <meta name="description" content={$page.data.description}/>
</svelte:head>

<Header />
<main class="nc-stack">
  <slot/>
</main>
<Footer/>

<style>
  @import "@nordcode/ui/complete";
  @import "@nordcode/ui/fonts";

  main {
    /* padding-block-start: 90px; equals <Navigation> block-size */
    min-block-size: 100dvh;
  }
</style>
