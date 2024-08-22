<script lang="ts">
import '../global.css';

import { page } from '$app/stores';
</script>

<svelte:head>
    <title>{$page.data.title}</title>
    <meta name="description" content={$page.data.description} />
</svelte:head>

<main>
<slot />
</main>

<style>
    main {
        /* padding-block-start: 90px; equals <Navigation> block-size */
        min-block-size: 100dvh;
    }
</style>
