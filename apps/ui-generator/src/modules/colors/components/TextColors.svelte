<script lang="ts">
import { CheckboxInput } from '@nordcode/forms-svelte';
import SettingsInput from '../../common/components/SettingsInput.svelte';
import { configStore } from '../../store/configStore.ts';
import ColorPreviewEntry from './ColorPreviewEntry.svelte';

const baseColors = [
    {
        name: 'Base',
        description:
            'Primary color for text and icons in any given interface. It should be used for body content, titles and labels.',
    },
    {
        name: 'Muted',
        description:
            'Use for content that is secondary or that provides additional context but is not critical to understanding the flow of an interface.',
    },
    {
        name: 'Subtle',
        description: 'Use for placeholder text, icons or decorative foregrounds.',
    },
    {
        name: 'Hover',
        description: 'Used for text and icons on top of the primary brand color.',
    },
];

const emphasisColor = {
    name: 'On-Emphasis',
    description:
        'Use for text on top of emphasized backgrounds, such as banners, badges, and alerts.',
};
</script>

<section class="nc-region nc-stack -contained -stretched content-block">
    <h2 id="text">Text Colors</h2>
    <div class="nc-grid preview-grid">
        <div class="nc-stack">
            <CheckboxInput
                id="use-secondary-hue-fg"
                name="use-secondary-hue-fg"
                label="Use secondary hue"
                bind:checked={$configStore.useSecondaryColorForFG}
            />
            <form class="settings-container">
                <fieldset class="nc-fieldset nc-stack">
                    <SettingsInput
                        label="Chroma Light"
                        bind:value={$configStore.lightNeutralChromaFG}
                        max="1"
                        min="0"
                        step="0.001"
                    ></SettingsInput>
                    <SettingsInput
                        label="Lightness Light"
                        bind:value={$configStore.lightNeutralTextLightness}
                        max="100"
                        min="0"
                        step="0.1"
                    ></SettingsInput>
                    <SettingsInput
                        label="Scale Factor Light"
                        bind:value={$configStore.lightTextLightnessScaleFactor}
                        max="0.2"
                        min="0"
                        step="0.001"
                    ></SettingsInput>
                </fieldset>
            </form>
            <form class="settings-container">
                <fieldset class="nc-fieldset nc-stack">
                    <SettingsInput
                        label="Chroma Dark"
                        bind:value={$configStore.darkNeutralChromaFG}
                        max="1"
                        min="0"
                        step="0.001"
                    ></SettingsInput>
                    <SettingsInput
                        label="Lightness Dark"
                        bind:value={$configStore.darkNeutralTextLightness}
                        max="100"
                        min="0"
                        step="0.1"
                    ></SettingsInput>
                    <SettingsInput
                        label="Scale Factor Dark"
                        bind:value={$configStore.darkTextLightnessScaleFactor}
                        max="0.2"
                        min="0"
                        step="0.001"
                    ></SettingsInput>
                </fieldset>
            </form>
        </div>
        <div class="nc-stack -nogap -stretched -contained">
            {#each baseColors as color}
                <ColorPreviewEntry
                    {color}
                    surfaceColor="--color-surface-base"
                    baseToken="--color-text"
                ></ColorPreviewEntry>
            {/each}
            <ColorPreviewEntry
                color={emphasisColor}
                surfaceColor="--color-surface-emphasis"
                baseToken="--color-text"
            ></ColorPreviewEntry>
        </div>
    </div>
</section>
