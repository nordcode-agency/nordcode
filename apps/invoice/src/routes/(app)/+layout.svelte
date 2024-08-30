<script lang="ts">
import Header from '$lib/common/components/Header.svelte';
import Footer from '$lib/common/components/Footer.svelte';
import type { WithChildren } from '$lib/common/types/WithChildren';

export const { children }: WithChildren = $props();
</script>

<Header></Header>
<main class="nc-center page-center-layout">
    {@render children?.()}
</main>
<Footer></Footer>

<style>
    main {
        /* padding-block-start: 90px; equals <Navigation> block-size */
        min-block-size: 100dvh;
    }
</style>
