<script lang="ts">
import { page } from '$app/stores';
import '../global.css';

import type { WithChildren } from '$lib/common/types/WithChildren';

export const { children }: WithChildren = $props();
</script>

<svelte:head>
    <title>{$page.data.title}</title>
    <meta name="description" content={$page.data.description} />
</svelte:head>

{@render children?.()}
