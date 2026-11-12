<script lang="ts">
import { CheckboxInput } from '@nordcode/forms-svelte';
import SettingsInput from '../../common/components/SettingsInput.svelte';
import { configStore } from '../../store/configStore.ts';
import ShadowPreviewEntry from './ShadowPreviewEntry.svelte';

const shadows = [
    {
        name: 'Box',
        description: 'Shadow with some inset to give the element a box-like appearance.',
    },
    {
        name: 'Inset',
        description:
            'Shadows that indicate that an element is embedded or pushed into the background. Used for inputs or pushed down buttons.',
    },
    {
        name: 'Inset Deep',
        description: 'A deeper inset shadow for elements that are pushed further into the background.',
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
        description: 'Level 4 shadow. Items that are floating above the surface. Used for modals or dialogs.',
    },
    {
        name: 'Farthest',
        description: 'Level 5 shadow. Items that are floating high above the surface.',
    },
];
</script>

<section class="nc-region content-block">
    <h2 id="shadows" class="section-headline">Shadows</h2>
    <div class="nc-grid preview-grid">
        <div class="nc-stack">
            <form class="settings-container nc-stack -stretched">
                <fieldset class="nc-fieldset nc-stack">
                    <SettingsInput
                        label="Chroma Light"
                        bind:value={$configStore.lightShadowColorChroma}
                        max="1"
                        min="0"
                        step="0.001"
                    ></SettingsInput>
                    <SettingsInput
                        label="Lightness Light"
                        bind:value={$configStore.lightShadowColorLightness}
                        max="100"
                        min="0"
                        step="0.1"
                    ></SettingsInput>
                    <SettingsInput
                        label="Strength Light"
                        bind:value={$configStore.lightShadowStrength}
                        max="100"
                        min="0"
                        step="1"
                    ></SettingsInput>
                </fieldset>
                <hr />
                <fieldset class="nc-fieldset nc-stack">
                    <SettingsInput
                        label="Chroma Dark"
                        bind:value={$configStore.darkShadowColorChroma}
                        max="1"
                        min="0"
                        step="0.001"
                    ></SettingsInput>
                    <SettingsInput
                        label="Lightness Dark"
                        bind:value={$configStore.darkShadowColorLightness}
                        max="100"
                        min="0"
                        step="0.1"
                    ></SettingsInput>
                    <SettingsInput
                        label="Strength Dark"
                        bind:value={$configStore.darkShadowStrength}
                        max="100"
                        min="0"
                        step="1"
                    ></SettingsInput>
                </fieldset>
                <hr />
                <fieldset class="nc-fieldset nc-stack">
                    <CheckboxInput
                        type="checkbox"
                        name="shadowFlat"
                        label="Flat shadows"
                        id="shadowFlat"
                        bind:checked={$configStore.shadowFlat}
                        required={false}
                    />
                    <SettingsInput
                        label="X Offset Factor"
                        bind:value={$configStore.shadowXOffsetFactor}
                        hint="0 casts the shadows straight down"
                        step="0.1"
                        min="-4"
                        max="4"
                    ></SettingsInput>
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

<style>
</style>
