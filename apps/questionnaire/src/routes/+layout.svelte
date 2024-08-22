<script lang="ts">
import '../global.css';

import { page } from '$app/stores';
import Header from '$lib/common/components/Header.svelte';
import Footer from '$lib/common/components/Footer.svelte';
</script>

<svelte:head>
    <title>{$page.data.title}</title>
    <meta name="description" content={$page.data.description} />
</svelte:head>

<Header></Header>
<main>
<slot />
</main>
<Footer></Footer>

<style>
    main {
        /* padding-block-start: 90px; equals <Navigation> block-size */
        min-block-size: 100dvh;
    }
</style>
