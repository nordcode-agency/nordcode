<script lang="ts">
import SettingsInput from '../../common/components/SettingsInput.svelte';
import { configStore } from '../../store/configStore.ts';
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
    description: 'Use for backgrounds that need to stand out, such as banners, badges, and alerts.',
};
</script>

<section class="nc-region nc-stack -contained -stretched content-block">
    <h2 id="surface">Surface Colors</h2>
    <div class="nc-grid preview-grid">
        <div class="nc-stack">
            <form>
                <fieldset class="nc-fieldset nc-stack">
                    <SettingsInput
                        label="Chroma Light"
                        bind:value={$configStore.lightNeutralChromaBG}
                        max="1"
                        min="0"
                        step="0.001"
                    ></SettingsInput>
                    <SettingsInput
                        label="Lightness Light"
                        bind:value={$configStore.lightNeutralSurfaceLightness}
                        max="100"
                        min="0"
                        step="0.1"
                    ></SettingsInput>
                    <SettingsInput
                        label="Scale Factor Light"
                        bind:value={$configStore.lightSurfaceLightnessScaleFactor}
                        max="0.2"
                        min="0"
                        step="0.001"
                    ></SettingsInput>
                </fieldset>
            </form>
            <form>
                <fieldset class="nc-fieldset nc-stack">
                    <SettingsInput
                        label="Chroma Dark"
                        bind:value={$configStore.darkNeutralChromaBG}
                        max="1"
                        min="0"
                        step="0.001"
                    ></SettingsInput>
                    <SettingsInput
                        label="Lightness Dark"
                        bind:value={$configStore.darkNeutralSurfaceLightness}
                        max="100"
                        min="0"
                        step="0.1"
                    ></SettingsInput>
                    <SettingsInput
                        label="Scale Factor Dark"
                        bind:value={$configStore.darkSurfaceLightnessScaleFactor}
                        max="0.2"
                        min="0"
                        step="0.001"
                    ></SettingsInput>
                </fieldset>
            </form>
        </div>
        <div class="nc-stack -nogap -stretched -contained">
            {#each baseColors as color}
                <SurfaceColorPreviewEntry
                    {color}
                    textColor="--color-text-base"
                    baseToken="--color-surface"
                ></SurfaceColorPreviewEntry>
            {/each}
            <SurfaceColorPreviewEntry
                color={emphasisColor}
                textColor="--color-text-on-emphasis"
                baseToken="--color-surface"
                protectedString="on-emphasis"
            ></SurfaceColorPreviewEntry>
        </div>
    </div>
</section>
