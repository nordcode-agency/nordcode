<script lang="ts">
    import SettingsInput from '../../common/components/SettingsInput.svelte';
    import { configStore } from '../../store/configStore.ts';
    import ColorPreviewEntry from './ColorPreviewEntry.svelte';

    const baseColors = [
        {
            name: 'Surface',
            description:
                'Subtle version of the primary brand color. Used for backgrounds and borders.',
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
            description: 'Used for text and icons on top of the primary brand color.',
        },
        {
            name: 'Hover',
            description:
                'Used for slight hover highlights, like on outline buttons or checkbox inputs',
        },
    ];
</script>

<section class="nc-region nc-stack -contained -stretched content-block">
    <h2 id="primary">Primary Colors</h2>
    <div class="nc-grid preview-grid">
        {#if $configStore}
            <div>
                <form class="settings-container -sticky">
                    <fieldset class="nc-fieldset nc-stack">
                        <SettingsInput
                            label="Accent Hue"
                            bind:value={$configStore.primaryHue}
                            token="--h-brand-primary"
                            max="360"
                            min="0"
                            step="1"
                        ></SettingsInput>
                        <SettingsInput
                            label="Chroma"
                            bind:value={$configStore.primaryChroma}
                            token="--c-brand-primary"
                            max="1"
                            min="0"
                            step="0.001"
                        ></SettingsInput>
                        <SettingsInput
                            label="Lightness Light"
                            bind:value={$configStore.primaryLightness}
                            token="--l-brand-primary-light"
                            max="100"
                            min="0"
                            step="0.1"
                        ></SettingsInput>

                        <SettingsInput
                            label="Lightness Dark"
                            bind:value={$configStore.primaryLightnessDark}
                            token="--l-brand-primary-dark"
                            max="100"
                            min="0"
                            step="0.1"
                        ></SettingsInput>
                    </fieldset>
                </form>
            </div>
            <div class="nc-stack -nogap -stretched -contained">
                {#each baseColors as color}
                    <ColorPreviewEntry
                        {color}
                        surfaceColor="--color-brand-primary-surface"
                        baseToken="--color-brand-primary"
                    ></ColorPreviewEntry>
                {/each}
            </div>
        {/if}
    </div>
</section>
