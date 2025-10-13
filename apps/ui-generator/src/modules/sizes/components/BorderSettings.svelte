<script lang="ts">
import { Input } from '@nordcode/forms-svelte';
import { CheckboxInput } from '@nordcode/forms-svelte';
import SettingsInput from '../../common/components/SettingsInput.svelte';
import {
    configStore,
    updateBorderRadius,
    updateBorderRadiusScale,
    updateBorderWidths,
    updateBorderWidthScale,
} from '../../store/configStore';
import BorderPreviewEntry from './BorderPreviewEntry.svelte';

const widths = [
    {
        name: 'Thin',
        description: 'Thin border width. Usually the default for most elements.',
    },
    {
        name: 'Medium',
        description: 'Medium border width',
    },
    {
        name: 'Thick',
        description: 'Thick border width',
    },
];

const radius = [
    {
        name: 'Small',
        description: 'Small border radius for most smaller elements, like inputs or buttons.',
    },
    {
        name: 'Medium',
        description: 'Medium border radius for most layout elements, like cards or dialogs.',
    },
    {
        name: 'Large',
        description:
            'Largest border radius for large elements or special cases. Can be used for full screen layout containers.',
    },
    {
        name: 'Round',
        description: "Utility border radius. It's constant and round.",
    },
];
</script>

<section class="nc-region content-block -contained -stretched">
    <h2 id="borders" class="section-headline">Borders</h2>
    <div class="nc-grid preview-grid">
        <div>
            <form class="settings-container">
                <fieldset class="nc-fieldset nc-stack">
                    <SettingsInput
                        label="Border Width Thin (Base)"
                        bind:value={$configStore.borderWidthThin}
                        step="0.1"
                        min="0"
                        max="4"
                        oninput={evt => {
                            updateBorderWidths(evt.target.value);
                        }}
                    ></SettingsInput>
                    <SettingsInput
                        label="Border Width Scale"
                        bind:value={$configStore.borderWidthScale}
                        step="0.1"
                        min="0"
                        max="4"
                        oninput={evt => {
                            updateBorderWidthScale(evt.target.value);
                        }}
                    ></SettingsInput>

                    <details class="full-width">
                        <summary>Use custom border widths?</summary>
                        <fieldset class="nc-fieldset nc-stack">
                            <legend>Custom Border widths</legend>
                            <Input
                                name="borderWidthThin"
                                label="Border Width Thin"
                                id="borderWidthThin"
                                type="number"
                                step="1"
                                hint="This is the base for scale calculations"
                                bind:value={$configStore.borderWidthThin}
                            />
                            <Input
                                name="borderWidthMedium"
                                label="Border Width Medium"
                                id="borderWidthMedium"
                                type="number"
                                step="1"
                                bind:value={$configStore.borderWidthMedium}
                            />
                            <Input
                                name="borderWidthThick"
                                label="Border Width Thick"
                                id="borderWidthThick"
                                type="number"
                                step="1"
                                bind:value={$configStore.borderWidthThick}
                            />
                        </fieldset>
                    </details>

                    <hr />

                    <SettingsInput
                        label="Border Radius Small (Base)"
                        bind:value={$configStore.borderRadiusSmall}
                        step="0.1"
                        min="0"
                        max="8"
                        oninput={evt => {
                            updateBorderRadius(evt.target.value);
                        }}
                    ></SettingsInput>
                    <SettingsInput
                        label="Border Radius Scale"
                        bind:value={$configStore.borderRadiusScale}
                        step="0.1"
                        min="0"
                        max="4"
                        oninput={evt => {
                            updateBorderRadiusScale(evt.target.value);
                        }}
                    ></SettingsInput>

                    <details class="full-width">
                        <summary>Use custom border radii?</summary>
                        <Input
                            name="borderRadiusSmall"
                            label="Border Radius Small"
                            id="borderRadiusSmall"
                            type="number"
                            step="1"
                            hint="This is the base for scale calculations"
                            bind:value={$configStore.borderRadiusSmall}
                        />
                        <Input
                            name="borderRadiusMedium"
                            label="Border Radius Medium"
                            id="borderRadiusMedium"
                            type="number"
                            step="1"
                            bind:value={$configStore.borderRadiusMedium}
                        />
                        <Input
                            name="bordeRadiusLarge"
                            label="Border Radius Large"
                            id="bordeRadiusLarge"
                            type="number"
                            step="1"
                            bind:value={$configStore.borderRadiusLarge}
                        />
                    </details>
                </fieldset>
            </form>
        </div>
        <div class="nc-stack -stretched -contained">
            {#each widths as width}
                <BorderPreviewEntry
                    entry={width}
                    token={`--border-width-${width.name.toLowerCase()}`}
                    style={`border-width: var(--border-width-${width.name.toLowerCase()});`}
                />
            {/each}
            {#each radius as rad}
                <BorderPreviewEntry
                    entry={rad}
                    token={`--border-radius-${rad.name.toLowerCase()}`}
                    style={`border-radius: var(--border-radius-${rad.name.toLowerCase()});`}
                />
            {/each}
        </div>
    </div>
</section>
