<script lang="ts">
import '../global.css';

import { page } from '$app/stores';
import Footer from '$lib/common/components/Footer.svelte';
import Header from '$lib/common/components/Header.svelte';
import type { WithChildren } from '$lib/common/types/WithChildren';

let { children }: WithChildren = $props();
</script>

<svelte:head>
    <title>{$page.data.title}</title>
    <meta name="description" content={$page.data.description} />
</svelte:head>

<!-- <Header></Header> -->
<main>
    {@render children?.()}
</main>
<Footer></Footer>

<style>
main {
    /* padding-block-start: 90px; equals <Navigation> block-size */
    min-block-size: 100dvh;
}

:global {
    .nc-form {
        inline-size: min(100%, 60rem);
    }
}
</style>
