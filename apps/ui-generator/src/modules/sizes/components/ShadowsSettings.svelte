<script lang="ts">
import SettingsInput from '../../common/components/SettingsInput.svelte';
import { configStore } from '../../store/configStore.ts';
import ShadowPreviewEntry from './ShadowPreviewEntry.svelte';

const shadows = [
    {
        name: 'Inset',
        description:
            'Shadows that indicate that an element is embedded or pushed into the background. Used for inputs or pushed down buttons.',
    },
    {
        name: 'Nearest',
        description: 'Level 1 shadow. Items that are closed to the surface.',
    },
    {
        name: 'Near',
        description: 'Level 2 shadow. Items that are slightly elevated from the surface.',
    },
    {
        name: 'Medium',
        description: 'Level 3 shadow. Items that are elevated from the surface. Commonly cards.',
    },
    {
        name: 'Far',
        description:
            'Level 4 shadow. Items that are floating above the surface. Used for modals or dialogs.',
    },
];
</script>

<style>



</style>

<section class="nc-region nc-stack -contained">
    <h2 id="shadows">Shadows</h2>
    <div class="nc-grid preview-grid">
        <div class="nc-stack">
            <form>
                <fieldset class="nc-fieldset nc-stack">
                    <SettingsInput
                        label="Chroma Light"
                        bind:value={$configStore.lightShadowColorChroma}
                        max="1"
                        min="0"
                        step="0.001"
                    >
                    </SettingsInput>
                    <SettingsInput
                        label="Lightness Light"
                        bind:value={$configStore.lightShadowColorLightness}
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
                        bind:value={$configStore.lightShadowColorChroma}
                        max="1"
                        min="0"
                        step="0.001"
                    >
                    </SettingsInput>
                    <SettingsInput
                        label="Lightness Dark"
                        bind:value={$configStore.darkShadowColorLightness}
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
                        label="Base Distance"
                        bind:value={$configStore.shadowConfigDistanceBase}
                        step="0.1"
                        min="0.1"
                        max="3"
                    >
                    </SettingsInput>
                    <SettingsInput
                        label="Distance Scale Factor"
                        bind:value={$configStore.shadowConfigDistanceScaleFactor}
                        step="0.1"
                        min="1"
                        max="10"
                    >
                    </SettingsInput>
                    <SettingsInput
                        label="Blur Scale Factor"
                        bind:value={$configStore.shadowConfigBlurScaleFactor}
                        step="0.1"
                        min="1"
                        max="10"
                    >
                    </SettingsInput>
                    <SettingsInput
                        label="Start Transparency"
                        bind:value={$configStore.shadowConfigStartTransparency}
                        step="0.01"
                        min="0"
                        max="1"
                    >
                    </SettingsInput>
                    <SettingsInput
                        label="Transparency Scale Factor"
                        bind:value={$configStore.shadowConfigTransparencyScale}
                        step="0.01"
                        min="0.3"
                        max="1"
                    >
                    </SettingsInput>
                    <SettingsInput
                        label="Spread Max"
                        bind:value={$configStore.shadowConfigSpreadMax}
                        step="0.1"
                        min="-6"
                        max="0"
                    >
                    </SettingsInput>
                    <SettingsInput
                        label="X Offset Factor"
                        bind:value={$configStore.shadowConfigXOffsetFactor}
                        step="0.1"
                        min="-4"
                        max="4"
                    >
                    </SettingsInput>
                </fieldset>
            </form>
        </div>
            <div class="nc-stack -nogap -stretched -contained">
                {#each shadows as shadow}
                   <ShadowPreviewEntry entry={shadow} />
                {/each}
            </div>
    </div>
</section>

