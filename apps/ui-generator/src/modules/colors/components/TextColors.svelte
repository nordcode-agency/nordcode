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
        {#if $configStore}
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
                            token="--c-text-light"
                            max="1"
                            min="0"
                            step="0.001"
                        ></SettingsInput>
                        <SettingsInput
                            label="Lightness Light"
                            bind:value={$configStore.lightNeutralTextLightness}
                            token="--l-text-light"
                            max="100"
                            min="0"
                            step="0.1"
                        ></SettingsInput>
                        <SettingsInput
                            label="Scale Factor Light"
                            bind:value={$configStore.lightTextLightnessScaleFactor}
                            token="--scale-text-light"
                            max="2"
                            min="0.5"
                            step="0.001"
                        ></SettingsInput>
                    </fieldset>
                </form>
                <form class="settings-container">
                    <fieldset class="nc-fieldset nc-stack">
                        <SettingsInput
                            label="Chroma Dark"
                            bind:value={$configStore.darkNeutralChromaFG}
                            token="--c-text-dark"
                            max="1"
                            min="0"
                            step="0.001"
                        ></SettingsInput>
                        <SettingsInput
                            label="Lightness Dark"
                            bind:value={$configStore.darkNeutralTextLightness}
                            token="--l-text-dark"
                            max="100"
                            min="0"
                            step="0.1"
                        ></SettingsInput>
                        <SettingsInput
                            label="Scale Factor Dark"
                            bind:value={$configStore.darkTextLightnessScaleFactor}
                            token="--scale-text-dark"
                            max="1.5"
                            min="0.25"
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
        {/if}
    </div>
</section>
