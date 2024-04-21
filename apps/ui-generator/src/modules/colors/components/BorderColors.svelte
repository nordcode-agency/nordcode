<script lang="ts">

    import SettingsInput from '../../common/components/SettingsInput.svelte';
    import { configStore } from '../../store/configStore.ts';
    import BorderColorPreviewEntry from './BorderColorPreviewEntry.svelte';

    const baseColors = [
        {
            name: "Default",
            description: 'Primary color for borders to create bounds around content, for example elements inside a card. Default borders are critical to understanding a page layout.',
        },

        {
            name: "Muted",
            description:
                'Use for dividers to emphasize the separation between items, columns or sections.',
        },
    ];

</script>

<section class="nc-region nc-stack -contained">
    <h2 id="borders">Border Colors</h2>
    <div class="nc-grid color-grid">
        <div class="nc-stack">
            <form>
                <fieldset class="nc-fieldset nc-stack">
                    <SettingsInput
                        label="Chroma Light"
                        bind:value={$configStore.lightNeutralChromaBorder}
                        max="1"
                        min="0"
                        step="0.001"
                    >
                    </SettingsInput>
                    <SettingsInput
                        label="Lightness Light"
                        bind:value={$configStore.lightNeutralBorderLightness}
                        max="100"
                        min="0"
                        step="0.1"
                    >
                    </SettingsInput>
                </fieldset>
            </form>
            <form>
                <fieldset class="nc-fieldset nc-stack">
                    <SettingsInput
                        label="Chroma Dark"
                        bind:value={$configStore.darkNeutralChromaBorder}
                        max="1"
                        min="0"
                        step="0.001"
                    >
                    </SettingsInput>
                    <SettingsInput
                        label="Lightness Dark"
                        bind:value={$configStore.darkNeutralBorderLightness}
                        max="100"
                        min="0"
                        step="0.1"
                    >
                    </SettingsInput>
                </fieldset>
            </form>
        </div>
        <div class="nc-stack -nogap -stretched -contained">
            {#each baseColors as color}
                <BorderColorPreviewEntry color={color}
                                         surfaceColor="--color-surface-default"
                                         baseToken="--color-border"
                ></BorderColorPreviewEntry>
            {/each}
        </div>
    </div>
</section>

