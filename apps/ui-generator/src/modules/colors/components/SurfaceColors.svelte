<script lang="ts">
    import CheckboxInput from '../../../../../../packages/forms-svelte/src/lib/components/InputFields/CheckboxInput.svelte';
    import SettingsInput from '../../common/components/SettingsInput.svelte';
    import { configStore } from '../../store/configStore.ts';
    import ColorPreviewEntry from './ColorPreviewEntry.svelte';
    import SurfaceColorPreviewEntry from './SurfaceColorPreviewEntry.svelte';

    const baseColors = [
        {
            name: 'Base',
            description: 'Primary color for backgrounds in any given interface.',
        },
        {
            name: 'Muted',
            description: 'Provides visual rest and contrast against the default background.',
        },
        {
            name: 'Subtle',
            description: 'Provides a little more distinction, but still remains in the background.',
        },
    ];

    const emphasisColor = {
        name: 'Emphasis',
        description:
            'Use for backgrounds that need to stand out, such as banners, badges, and alerts.',
    };
</script>

<section class="nc-region nc-stack -contained -stretched content-block">
    <h2 id="surface">Surface Colors</h2>
    <div class="nc-grid preview-grid">
        {#if $configStore}
            <div class="nc-stack">
                <CheckboxInput
                    id="use-secondary-hue-bg"
                    name="use-secondary-hue-bg"
                    label="Use secondary hue"
                    bind:checked={$configStore.useSecondaryColorForBG}
                />
                <form class="settings-container">
                    <fieldset class="nc-fieldset nc-stack">
                        <SettingsInput
                            label="Chroma Light"
                            bind:value={$configStore.lightNeutralChromaBG}
                            token="--c-surface-light"
                            max="1"
                            min="0"
                            step="0.001"
                        ></SettingsInput>
                        <SettingsInput
                            label="Lightness Light"
                            bind:value={$configStore.lightNeutralSurfaceLightness}
                            token="--l-surface-light"
                            max="100"
                            min="0"
                            step="0.1"
                        ></SettingsInput>
                        <SettingsInput
                            label="Scale Factor Light"
                            bind:value={$configStore.lightSurfaceLightnessScaleFactor}
                            token="--scale-surface-light"
                            max="1.5"
                            min="0.25"
                            step="0.001"
                        ></SettingsInput>
                    </fieldset>
                </form>
                <form class="settings-container">
                    <fieldset class="nc-fieldset nc-stack">
                        <SettingsInput
                            label="Chroma Dark"
                            bind:value={$configStore.darkNeutralChromaBG}
                            token="--c-surface-dark"
                            max="1"
                            min="0"
                            step="0.001"
                        ></SettingsInput>
                        <SettingsInput
                            label="Lightness Dark"
                            bind:value={$configStore.darkNeutralSurfaceLightness}
                            token="--l-surface-dark"
                            max="100"
                            min="0"
                            step="0.1"
                        ></SettingsInput>
                        <SettingsInput
                            label="Scale Factor Dark"
                            bind:value={$configStore.darkSurfaceLightnessScaleFactor}
                            token="--scale-surface-dark"
                            max="2"
                            min="0.5"
                            step="0.001"
                        ></SettingsInput>
                    </fieldset>
                </form>
            </div>
            <div class="nc-stack -nogap -stretched -contained">
                {#each baseColors as color}
                    <ColorPreviewEntry
                        {color}
                        surfaceColor="--color-text-base"
                        baseToken="--color-surface"
                    ></ColorPreviewEntry>
                {/each}
                <ColorPreviewEntry
                    color={emphasisColor}
                    surfaceColor="--color-text-on-emphasis"
                    baseToken="--color-surface"
                ></ColorPreviewEntry>
            </div>
        {/if}
    </div>
</section>
