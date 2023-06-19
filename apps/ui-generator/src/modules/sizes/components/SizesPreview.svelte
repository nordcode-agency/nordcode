<script lang="ts">

    import SpacingRow from "./SpacingPreview.svelte";
    import {sizesStore} from "../sizesStore";
    import BlockPreview from "./BlockPreview.svelte";

    const spacings = {
        '--spacing-tiny': 'gap: var(--spacing-tiny)',
        '--spacing-nearest': 'gap: var(--spacing-nearest)',
        '--spacing-near': 'gap: var(--spacing-near)',
        '--spacing-base': 'gap: var(--spacing-base)',
        '--spacing-far': 'gap: var(--spacing-far)',
        '--spacing-farthest': 'gap: var(--spacing-farthest)',
    }

    const borderWidths = {
        '--border-width-thin': 'border-width: var(--border-width-thin)',
        '--border-width-base': 'border-width: var(--border-width-base)',
        '--border-width-thick': 'border-width: var(--border-width-thick)',
    }

    const borderRadii = {
        '--border-radius-small': 'border-radius: var(--border-radius-small)',
        '--border-radius-base': 'border-radius: var(--border-radius-base)',
        '--border-radius-large': 'border-radius: var(--border-radius-large)',
        '--border-radius-round': 'border-radius: var(--border-radius-round)',
    }

    const shadows = {
        '--shadow-inset': 'box-shadow: var(--shadow-inset)',
        '--shadow-nearest': 'box-shadow: var(--shadow-nearest)',
        '--shadow-near': 'box-shadow: var(--shadow-near)',
        '--shadow-base': 'box-shadow: var(--shadow-base)',
        '--shadow-far': 'box-shadow: var(--shadow-far)',
    }


</script>

{#if Object.values($sizesStore).length > 0}
<div class="stack -layout-far">
    <div class="stack -layout-near">
        <h2>Spacings</h2>
        {#each Object.entries(spacings) as [key, value]}
            <SpacingRow label="{key}" style="{value}" />
        {/each}
    </div>
    <div class="stack -layout-near">
        <h2>Borders</h2>
        {#each Object.entries(borderWidths) as [key, value]}
            <BlockPreview label="{key}" style="{value}" />
        {/each}
        {#each Object.entries(borderRadii) as [key, value]}
            <BlockPreview label="{key}" style="{value}" />
        {/each}
d
    </div>
    <div class="stack -layout-near">
        <h2>Shadows</h2>
        {#each Object.entries(shadows) as [key, value]}
            <BlockPreview label="{key}" style="{value}" />
        {/each}
    </div>


</div>
    {:else}
    <p>loading...</p>
{/if}
