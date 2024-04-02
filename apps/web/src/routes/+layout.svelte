<script lang="ts">
  import "../app.css"
  import Footer from '$lib/modules/common/components/Footer.svelte';
  import { onNavigate } from '$app/navigation';

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;

        const projectName = navigation.from?.params?.project;
        if (projectName) {
          const thumbEl = document.querySelector(`[href="/work/${projectName}"] figure`) as HTMLElement | null;
          if (thumbEl) {
            thumbEl.style.viewTransitionName = projectName;
          }
        };
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
  main {
    /* padding-block-start: 90px; equals <Navigation> block-size */
    min-block-size: 100dvh;
      block-size: 100%;
      position: relative;
  }
</style>
