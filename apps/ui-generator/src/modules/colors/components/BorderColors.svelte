<script lang="ts">
    import { CheckboxInput } from '@nordcode/forms-svelte';
    import SettingsInput from '../../common/components/SettingsInput.svelte';
    import { configStore } from '../../store/configStore.ts';
    import BorderColorPreviewEntry from './BorderColorPreviewEntry.svelte';

    const baseColors = [
        {
            name: 'Base',
            description:
                'Primary color for borders to create bounds around content, for example elements inside a card. Default borders are critical to understanding a page layout.',
        },

        {
            name: 'Muted',
            description:
                'Use for dividers to emphasize the separation between items, columns or sections.',
        },
        {
            name: 'Subtle',
            description: 'Used for very subtle separations.',
        },
        {
            name: 'Hover',
            description:
                'Can be used for hovering borders. Rarely useful, but it is consistent with text colors.',
        },
    ];
    const emphasisColor = {
        name: 'On-Emphasis',
        description: 'Can be used to border emphasis colored elements.',
    };
</script>

<section class="nc-region nc-stack -contained -stretched content-block">
    <h2 id="borders">Border Colors</h2>
    <div class="nc-grid preview-grid">
        {#if $configStore}
            <div class="nc-stack">
                <CheckboxInput
                    id="use-secondary-hue-border"
                    name="use-secondary-hue-border"
                    label="Use secondary hue"
                    bind:checked={$configStore.useSecondaryColorForBorders}
                />
                <form class="settings-container">
                    <fieldset class="nc-fieldset nc-stack">
                        <SettingsInput
                            label="Chroma Light"
                            bind:value={$configStore.lightNeutralChromaBorder}
                            token="--c-border-light"
                            max="1"
                            min="0"
                            step="0.001"
                        ></SettingsInput>
                        <SettingsInput
                            label="Lightness Light"
                            bind:value={$configStore.lightNeutralBorderLightness}
                            token="--l-border-light"
                            max="100"
                            min="0"
                            step="0.1"
                        ></SettingsInput>
                        <SettingsInput
                            label="Scale Factor Light"
                            bind:value={$configStore.lightBorderLightnessScaleFactor}
                            token="--scale-border-light"
                            max="1"
                            min="0"
                            step="0.001"
                        ></SettingsInput>
                    </fieldset>
                </form>
                <form class="settings-container">
                    <fieldset class="nc-fieldset nc-stack">
                        <SettingsInput
                            label="Chroma Dark"
                            bind:value={$configStore.darkNeutralChromaBorder}
                            token="--c-border-dark"
                            max="1"
                            min="0"
                            step="0.001"
                        ></SettingsInput>
                        <SettingsInput
                            label="Lightness Dark"
                            bind:value={$configStore.darkNeutralBorderLightness}
                            token="--l-border-dark"
                            max="100"
                            min="0"
                            step="0.1"
                        ></SettingsInput>
                        <SettingsInput
                            label="Scale Factor Dark"
                            bind:value={$configStore.darkBorderLightnessScaleFactor}
                            token="--scale-border-dark"
                            max="0.2"
                            min="0"
                            step="0.001"
                        ></SettingsInput>
                    </fieldset>
                </form>
            </div>
            <div class="nc-stack -nogap -stretched -contained">
                {#each baseColors as color}
                    <BorderColorPreviewEntry
                        {color}
                        surfaceColor="--color-surface-base"
                        baseToken="--color-border"
                    ></BorderColorPreviewEntry>
                {/each}
                <BorderColorPreviewEntry
                    color={emphasisColor}
                    surfaceColor="--color-surface-emphasis"
                    baseToken="--color-border"
                ></BorderColorPreviewEntry>
            </div>
        {/if}
    </div>
</section>
