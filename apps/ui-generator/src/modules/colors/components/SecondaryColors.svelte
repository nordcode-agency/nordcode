<script lang="ts">
import SettingsInput from '../../common/components/SettingsInput.svelte';
import { configStore } from '../../store/configStore.ts';
import ColorPreviewEntry from './ColorPreviewEntry.svelte';

const baseColors = [
    {
        name: 'Surface',
        description:
            'Subtle version of the secondary brand color. Used for backgrounds and borders.',
    },
    {
        name: 'Base',
        description: 'Primary brand color. Used for accents and highlights.',
    },
    {
        name: 'Emphasis',
        description:
            'Background: Use to highlight the most important item of a view or an interface.',
    },
    {
        name: 'Contrast',
        description: 'Used for text and icons on top of the secondary brand color.',
    },
    {
        name: 'Hover',
        description: 'Used for slight hover highlights, like on outline buttons or checkbox inputs',
    },
];
</script>

<section class="nc-region nc-stack -contained">
    <h2 id="secondary">Secondary Colors</h2>
    <div class="nc-grid preview-grid">
        <form>
            <fieldset class="nc-fieldset nc-stack">
                <SettingsInput
                    label="Accent Hue"
                    bind:value={$configStore.secondaryHue}
                    max="360"
                    min="0"
                    step="1"
                >
                </SettingsInput>
                <SettingsInput
                    label="Chroma"
                    bind:value={$configStore.secondaryChroma}
                    max="1"
                    min="0"
                    step="0.001"
                >
                </SettingsInput>
                <SettingsInput
                    label="Lightness Light"
                    bind:value={$configStore.secondaryLightness}
                    max="100"
                    min="0"
                    step="0.1"
                >
                </SettingsInput>

                <SettingsInput
                    label="Lightness Dark"
                    bind:value={$configStore.secondaryLightnessDark}
                    max="100"
                    min="0"
                    step="0.1"
                >
                </SettingsInput>
            </fieldset>
        </form>
        <div class="nc-stack -nogap -stretched -contained">
            {#each baseColors as color}
                <ColorPreviewEntry color={color}
                                   surfaceColor="--color-brand-secondary-surface"
                                   baseToken="--color-brand-secondary"
                ></ColorPreviewEntry>
            {/each}
        </div>
    </div>

</section>

