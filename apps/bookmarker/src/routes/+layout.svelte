<script lang="ts">


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

<main class="layout-container">
  <slot/>
</main>

<style>
  @import "@nordcode/ui/complete";
  @import "@nordcode/ui/fonts";

  :global(html) {
    --layout-max-width: 1600px;
    --layout-padding: var(--spacing-near);
  }
</style>
