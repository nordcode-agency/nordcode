<script lang="ts">
import '../global.css';

import { page } from '$app/stores';
import type { Snippet } from 'svelte';

const {
    children,
}: {
    children: Snippet[];
} = $props();
</script>

<svelte:head>
    <title>{$page.data.title}</title>
    <meta name="description" content={$page.data.description} />
</svelte:head>

<main>
    {@render children?.()}
</main>

<style>
main {
    /* padding-block-start: 90px; equals <Navigation> block-size */
    min-block-size: 100dvh;
}
</style>
