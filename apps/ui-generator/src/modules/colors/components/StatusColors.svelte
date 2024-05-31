<script lang="ts">
    import SettingsInput from '../../common/components/SettingsInput.svelte';
    import { configStore } from '../../store/configStore.ts';
    import ColorPreviewEntry from './ColorPreviewEntry.svelte';

    const baseColors = [
        {
            name: 'Surface',
            description:
                'Subtle version of the primary brand color. Used for backgrounds and borders.',
        },
        {
            name: 'Text',
            description: 'Primary brand color. Used for accents and highlights.',
        },
        {
            name: 'Base',
            description:
                'Background: Use to highlight the most important item of a view or an interface.',
        },
        {
            name: 'Hover',
            description: 'Used for text and icons on top of the primary brand color.',
        },
    ];
</script>

<section class="nc-region nc-stack -contained -stretched">
    <h2 id="status">Status Colors</h2>
    <div class="nc-grid preview-grid">
        <div>
            <p>The status colors are in a set hue, based on the lightness of the primary color.</p>
        </div>
        <div class="nc-stack -nogap -stretched -contained">
            {#each baseColors as color}
                <ColorPreviewEntry
                    {color}
                    surfaceColor="--color-status-success-surface"
                    baseToken="--color-status-success"
                ></ColorPreviewEntry>
            {/each}
            {#each baseColors as color}
                <ColorPreviewEntry
                    {color}
                    surfaceColor="--color-status-warning-surface"
                    baseToken="--color-status-warning"
                ></ColorPreviewEntry>
            {/each}
            {#each baseColors as color}
                <ColorPreviewEntry
                    {color}
                    surfaceColor="--color-status-danger-surface"
                    baseToken="--color-status-danger"
                ></ColorPreviewEntry>
            {/each}
            {#each baseColors as color}
                <ColorPreviewEntry
                    {color}
                    surfaceColor="--color-status-info-surface"
                    baseToken="--color-status-info"
                ></ColorPreviewEntry>
            {/each}
        </div>
    </div>
</section>
