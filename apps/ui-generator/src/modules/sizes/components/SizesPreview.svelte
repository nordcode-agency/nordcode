<script lang="ts">

    import SpacingRow from "./SpacingPreview.svelte";
    import {sizesStore} from "../sizesStore";

    const spacings = {
        '--spacing-tiny': 'gap: var(--spacing-tiny)',
        '--spacing-nearest': 'gap: var(--spacing-nearest)',
        '--spacing-near': 'gap: var(--spacing-near)',
        '--spacing-base': 'gap: var(--spacing-base)',
        '--spacing-far': 'gap: var(--spacing-far)',
        '--spacing-farthest': 'gap: var(--spacing-farthest)',
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


</div>
    {:else}
    <p>loading...</p>
{/if}
