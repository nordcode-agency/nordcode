<script lang="ts">

    import SettingsInput from '../../common/components/SettingsInput.svelte';
    import { configStore } from '../../store/configStore.ts';
    import SurfaceColorPreviewEntry from './SurfaceColorPreviewEntry.svelte';

    const baseColors = [
        {
            name: "Default",
            description: 'Primary color for backgrounds in any given interface.',
        },

        {
            name: "Subtle",
            description:
                'Provides visual rest and contrast against the default background.',
        },
        {
            name: "Inset",
            description: 'Can be used instead of the default background to create a focal point, such as in conversations or activity feeds.',
        },

    ];

    const emphasisColor = {
        name: "Emphasis",
        description: 'Use for backgrounds that need to stand out, such as banners, badges, and alerts.',
    };
</script>

<style>
    .nc-grid {
        grid-template-columns: 1fr 3fr;
        gap: var(--spacing-far);
    }

    .fieldset-container {
        background: var(--color-surface-inset);
        padding: var(--spacing-base);
        border-radius: var(--border-radius-medium);
        box-shadow: var(--shadow-medium);
    }

</style>

<section class="nc-region nc-stack -contained">
    <h2>Surface Colors</h2>
    <div class="nc-grid">
        <div class="nc-stack">
            <form>
                <div class="fieldset-container">
                    <fieldset class="nc-fieldset nc-stack">
                        <SettingsInput
                            label="Chroma Light"
                            bind:value={$configStore.lightNeutralChromaBG}
                            max="1"
                            min="0"
                            step="0.001"
                        >
                        </SettingsInput>
                        <SettingsInput
                            label="Lightness Light"
                            bind:value={$configStore.lightNeutralSurfaceLightness}
                            max="100"
                            min="0"
                            step="0.1"
                        >
                        </SettingsInput>
                        <SettingsInput
                            label="Scale Factor Light"
                            bind:value={$configStore.lightSurfaceLightnessScaleFactor}
                            max="100"
                            min="0"
                            step="0.001"
                        >
                        </SettingsInput>
                    </fieldset>
                </div>
            </form>
            <form>
                <div class="fieldset-container">
                    <fieldset class="nc-fieldset nc-stack">
                        <SettingsInput
                            label="Chroma Dark"
                            bind:value={$configStore.darkNeutralChromaBG}
                            max="1"
                            min="0"
                            step="0.001"
                        >
                        </SettingsInput>
                        <SettingsInput
                            label="Lightness Dark"
                            bind:value={$configStore.darkNeutralSurfaceLightness}
                            max="100"
                            min="0"
                            step="0.1"
                        >
                        </SettingsInput>
                        <SettingsInput
                            label="Scale Factor Dark"
                            bind:value={$configStore.darkSurfaceLightnessScaleFactor}
                            max="100"
                            min="0"
                            step="0.001"
                        >
                        </SettingsInput>
                    </fieldset>
                </div>
            </form>
        </div>
        <div class="nc-stack -nogap -stretched -contained">
            {#each baseColors as color}
                <SurfaceColorPreviewEntry color={color}
                                          textColor="--color-text-default"
                                          baseToken="--color-surface"
                ></SurfaceColorPreviewEntry>
            {/each}
            <SurfaceColorPreviewEntry color={emphasisColor}
                                      textColor="--color-text-on-emphasis"
                                      baseToken="--color-surface"
                                      protectedString="on-emphasis"
            ></SurfaceColorPreviewEntry>
        </div>
    </div>
</section>

