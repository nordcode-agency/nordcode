<script lang="ts">
    import SettingsInput from '../../common/components/SettingsInput.svelte';
    import { Input, InputWrapper, Select } from '@nordcode/forms-svelte';
    import { CheckboxInput } from '@nordcode/forms-svelte';
    import { configStore, updateFontScale } from '../../store/configStore';
</script>

{#if $configStore}
    <div>
        <form class="nc-region nc-stack -farthest full-width -stretched content-block">
            <div class="settings-container">
                <fieldset class="nc-fieldset nc-stack">
                    <legend>Font Families</legend>
                    <Input
                        name="fontFamilySans"
                        label="Font Family Sans"
                        id="fontFamilySans"
                        type="text"
                        bind:value={$configStore.fontFamilySans}
                    />
                    <Input
                        name="fontFamilySerif"
                        label="Font Family Serif"
                        id="fontFamilySerif"
                        type="text"
                        bind:value={$configStore.fontFamilySerif}
                    />
                    <Input
                        name="fontFamilyMono"
                        label="Font Family Mono"
                        id="fontFamilyMono"
                        type="text"
                        bind:value={$configStore.fontFamilyMono}
                    />
                    <Select
                        name="fontFamilyDefault"
                        label="Font Family Default"
                        id="fontFamilyDefault"
                        bind:value={$configStore.fontFamilyDefault}
                        options={[
                            { label: 'Sans', value: 'sans' },
                            { label: 'Serif', value: 'serif' },
                            { label: 'Mono', value: 'mono' },
                        ]}
                    />
                </fieldset>
            </div>
            <div class="settings-container">
                <fieldset class="nc-fieldset nc-stack">
                    <legend>Font Sizes</legend>

                    <SettingsInput
                        label="Font Scale"
                        hint="Harmoniously update your font sizes based on this scale"
                        bind:value={$configStore.fontSizeScale}
                        max="5"
                        min="0"
                        step="0.05"
                        oninput={evt => updateFontScale(evt.target.value)}
                    ></SettingsInput>

                    <details class="full-width">
                        <summary>Use custom font sizes?</summary>
                        <fieldset class="nc-fieldset nc-stack">
                            <legend>Custom Font Sizes</legend>
                            <CheckboxInput
                                type="checkbox"
                                name="useCustomFontsizes"
                                label="Use custom font sizes?"
                                id="useCustomFontsizes"
                                bind:checked={$configStore.useCustomFontSizes}
                            />

                            <SettingsInput
                                label="Font Size Display"
                                bind:value={$configStore.fontSizeDisplay}
                                max="10"
                                min="0"
                                step="0.005"
                                disabled={$configStore.useCustomFontSizes === false}
                            ></SettingsInput>

                            <SettingsInput
                                label="Font Size Largest"
                                bind:value={$configStore.fontSizeLargest}
                                max="10"
                                min="0"
                                step="0.005"
                                disabled={$configStore.useCustomFontSizes === false}
                            ></SettingsInput>

                            <SettingsInput
                                label="Font Size Large"
                                bind:value={$configStore.fontSizeLarge}
                                max="10"
                                min="0"
                                step="0.005"
                                disabled={$configStore.useCustomFontSizes === false}
                            ></SettingsInput>

                            <SettingsInput
                                label="Font Size Base"
                                bind:value={$configStore.fontSizeBase}
                                max="10"
                                min="0"
                                step="0.005"
                                disabled={$configStore.useCustomFontSizes === false}
                            ></SettingsInput>

                            <SettingsInput
                                label="Font Size Small"
                                bind:value={$configStore.fontSizeSmall}
                                max="10"
                                min="0"
                                step="0.005"
                                disabled={$configStore.useCustomFontSizes === false}
                            ></SettingsInput>

                            <SettingsInput
                                label="Font Size Smallest"
                                bind:value={$configStore.fontSizeSmallest}
                                max="10"
                                min="0"
                                step="0.005"
                                disabled={$configStore.useCustomFontSizes === false}
                            ></SettingsInput>
                        </fieldset>
                    </details>
                </fieldset>
            </div>
            <div class="settings-container">
                <fieldset class="nc-fieldset nc-stack">
                    <legend>Line Heights</legend>
                    <SettingsInput
                        label="Line Height Large"
                        bind:value={$configStore.lineHeightLarge}
                        max="10"
                        min="0"
                        step="0.05"
                    ></SettingsInput>

                    <SettingsInput
                        label="Line Height Base"
                        bind:value={$configStore.lineHeightBase}
                        max="10"
                        min="0"
                        step="0.05"
                    ></SettingsInput>

                    <SettingsInput
                        label="Line Height Small"
                        bind:value={$configStore.lineHeightSmall}
                        max="10"
                        min="0"
                        step="0.05"
                    ></SettingsInput>
                </fieldset>
            </div>
            <div class="settings-container">
                <fieldset class="nc-fieldset nc-stack">
                    <legend>Font Weights</legend>
                    <SettingsInput
                        label="Font Weight Default"
                        bind:value={$configStore.fontWeightDefault}
                        max="1000"
                        min="0"
                        step="1"
                    ></SettingsInput>
                    <SettingsInput
                        label="Font Weight Heading"
                        bind:value={$configStore.fontWeightHeading}
                        max="1000"
                        min="0"
                        step="1"
                    ></SettingsInput>
                    <SettingsInput
                        label="Font Weight Strong"
                        bind:value={$configStore.fontWeightStrong}
                        max="1000"
                        min="0"
                        step="1"
                    ></SettingsInput>
                    <SettingsInput
                        label="Font Weight Active"
                        bind:value={$configStore.fontWeightActive}
                        max="1000"
                        min="0"
                        step="1"
                    ></SettingsInput>
                </fieldset>
            </div>

            <div class="settings-container">
                <fieldset class="nc-fieldset nc-stack">
                    <legend>Tracking</legend>
                    <SettingsInput
                        label="Tracking Wide"
                        bind:value={$configStore.trackingWide}
                        max="1"
                        min="0"
                        step="0.01"
                    ></SettingsInput>
                    <SettingsInput
                        label="Tracking Base"
                        bind:value={$configStore.trackingStandard}
                        max="1"
                        min="0"
                        step="0.01"
                    ></SettingsInput>
                    <SettingsInput
                        label="Tracking Tight"
                        bind:value={$configStore.trackingTight}
                        max="1"
                        min="0"
                        step="0.01"
                    ></SettingsInput>
                </fieldset>
            </div>
            <div class="settings-container">
                <fieldset class="nc-fieldset nc-stack">
                    <legend>Measure</legend>
                    <SettingsInput
                        label="Measure Large"
                        bind:value={$configStore.measureLarge}
                        max="200"
                        min="0"
                        step="1"
                    ></SettingsInput>

                    <SettingsInput
                        label="Measure Base"
                        bind:value={$configStore.measureBase}
                        max="200"
                        min="0"
                        step="1"
                    ></SettingsInput>

                    <SettingsInput
                        label="Measure Small"
                        bind:value={$configStore.measureSmall}
                        max="200"
                        min="0"
                        step="1"
                    ></SettingsInput>
                </fieldset>
            </div>
        </form>
    </div>
{/if}
