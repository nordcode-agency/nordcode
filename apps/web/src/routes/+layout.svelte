<script lang="ts">


  import Footer from '$lib/modules/common/components/Footer.svelte';

  import {onMount} from "svelte";
  import {page} from "$app/stores";

  onMount(async () => {
    await import ("@nordcode/ui/src/modules/dialogs/ts/dialogs.ts")
  })
</script>


<svelte:head>
  <title>{$page.data.title}</title>
  <meta name="description" content={$page.data.description}/>
</svelte:head>

<main class="nc-stack">
  <slot/>
</main>
<Footer/>

<style>
  @import "@nordcode/ui/complete";
  @import "@nordcode/ui/fonts";
</style>
