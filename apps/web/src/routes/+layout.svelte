<script lang="ts">
  import Footer from '$lib/modules/common/components/Footer.svelte';
  import { onNavigate } from '$app/navigation';

  onNavigate((navigation) => { 
      if (!document.startViewTransition) return;
      const pathname = navigation?.to?.url.pathname;
      const anchorEl = document.querySelector(`[href="${pathname}"]`);

      /** @url https://developer.chrome.com/docs/web-platform/view-transitions/#transitioning-elements-dont-need-to-be-the-same-dom-element */
      const figureEl = anchorEl?.querySelector('figure');
      if (figureEl) figureEl.style.viewTransitionName = 'work-figure';

      return new Promise((resolve) => {
          document.startViewTransition(async () => {
            resolve();
              await navigation.complete;
          });
      });
  });

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

<main>
  <slot/>
</main>
<Footer/>

<style>
  @import "../app.css";

  main {
    /* padding-block-start: 90px; equals <Navigation> block-size */
    min-block-size: 100dvh;
  }
</style>
