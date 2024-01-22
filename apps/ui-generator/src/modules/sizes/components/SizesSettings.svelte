<script lang="ts">
    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import InputWrapper
        from "@nordcode/ui/src/modules/forms/svelte/InputFields/InputWrapper.svelte";
    import {
        configStore,
        updateBorderRadiusScale,
        updateBorderWidthScale,
        updateSpacingScale,
        updateSpacingBase,
        updateBorderWidths,
        updateBorderRadius,
    } from "../../store/configStore";
</script>

{#if configStore}
    <div>
        <form class="nc-stack -far full-width -stretched">
            <div class="nc-box -bordered">
                <fieldset class="nc-fieldset nc-stack">
                    <legend>Spacings</legend>

                    <InputWrapper
                        label="Spacing Base"
                        id="spacingBaseMain"
                        hint="This is the base value for calculations in rem"
                    >

                        <input class="nc-input"
                               id="spacingBaseMain"
                               name="spacingBaseMain"
                               aria-required="true"
                               autocomplete="off"
                               type="number"
                               step="0.1"
                               value={$configStore.spacingBase}
                               on:input={evt => updateSpacingBase(evt.target.value)}
                        />
                    </InputWrapper>

                    <InputWrapper
                        label="Spacing Scale"
                        id="spacingScale"
                        hint="Harmoniously update your spaces based on this scale"
                    >

                        <input class="nc-input"
                               id="spacingScale"
                               name="spacingScale"
                               aria-required="true"
                               autocomplete="off"
                               type="number"
                               step="0.1"
                               value={$configStore.spacingScale}
                               on:input={evt => updateSpacingScale(evt.target.value)}
                        />
                    </InputWrapper>
                    <details class="full-width">
                        <summary>Use custom spacings?</summary>
                        <fieldset class="nc-fieldset nc-stack">
                            <legend>Custom Spacings</legend>
                            <Input
                                name="spacingTiny"
                                label="Spacing Tiny"
                                id="spacingTiny"
                                type="number"
                                step="0.01"
                                bind:value={$configStore.spacingTiny}
                            />
                            <Input
                                name="spacingNearest"
                                label="Spacing Nearest"
                                id="spacingNearest"
                                type="number"
                                step="0.01"
                                bind:value={$configStore.spacingNearest} />
                            <Input
                                name="spacingNear"
                                label="Spacing Near"
                                id="spacingNear"
                                type="number"
                                step="0.01"
                                bind:value={$configStore.spacingNear} />
                            <Input
                                name="spacingBase"
                                label="Spacing Base"
                                id="spacingBase"
                                type="number"
                                step="0.01"
                                bind:value={$configStore.spacingBase} />
                            <Input
                                name="spacingFar"
                                label="Spacing Far"
                                id="spacingFar"
                                type="number"
                                step="0.01"
                                bind:value={$configStore.spacingFar} />
                            <Input
                                name="spacingFarthest"
                                label="Spacing Farthest"
                                id="spacingFarthest"
                                type="number"
                                step="0.01"
                                bind:value={$configStore.spacingFarthest} />
                        </fieldset>
                    </details>
                </fieldset>
            </div>

            <div class="nc-box -bordered">
                <fieldset class="nc-fieldset nc-stack">
                    <legend>Borders</legend>
                    <InputWrapper
                        label="Border Width Thin (Base)"
                        id="borderWidthThinMain"
                        hint="Set the base value for border width calculations"
                    >

                        <input class="nc-input"
                               id="borderWidthThinMain"
                               name="borderWidthThinMain"
                               aria-required="true"
                               autocomplete="off"
                               type="number"
                               step="0.1"
                               value={$configStore.borderWidthThin}
                               on:input={evt => updateBorderWidths(evt.target.value)}
                        />
                    </InputWrapper>

                    <InputWrapper
                        label="Border Width Scale"
                        id="borderWidthScale"
                        hint="Harmoniously update your border widths based on this scale"
                    >

                        <input class="nc-input"
                               id="borderWidthScale"
                               name="borderWidthScale"
                               aria-required="true"
                               autocomplete="off"
                               type="number"
                               step="0.1"
                               value={$configStore.borderWidthScale}
                               on:input={evt => updateBorderWidthScale(evt.target.value)}
                        />
                    </InputWrapper>
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
                                bind:value={$configStore.borderWidthThin} />
                            <Input
                                name="borderWidthMedium"
                                label="Border Width Medium"
                                id="borderWidthMedium"
                                type="number"
                                step="1"
                                bind:value={$configStore.borderWidthMedium} />
                            <Input
                                name="borderWidthThick"
                                label="Border Width Thick"
                                id="borderWidthThick"
                                type="number"
                                step="1"
                                bind:value={$configStore.borderWidthThick} />
                        </fieldset>
                    </details>

                    <hr />

                    <InputWrapper
                        label="Border Radius Small (Base)"
                        id="borderRadiusSmallMain"
                        hint="Set the base value for border radius calculations"
                    >

                        <input class="nc-input"
                               id="borderRadiusSmallMain"
                               name="borderRadiusSmallMain"
                               aria-required="true"
                               autocomplete="off"
                               type="number"
                               step="0.1"
                               value={$configStore.borderRadiusSmall}
                               on:input={evt => updateBorderRadius(evt.target.value)}
                        />
                    </InputWrapper>

                    <InputWrapper
                        label="Border Radius Scale"
                        id="borderRadiusScale"
                        hint="Harmoniously update your border radii based on this scale"
                    >

                        <input class="nc-input"
                               id="borderRadiusScale"
                               name="borderRadiusScale"
                               aria-required="true"
                               autocomplete="off"
                               type="number"
                               step="0.1"
                               value={$configStore.borderRadiusScale}
                               on:input={evt => updateBorderRadiusScale(evt.target.value)}
                        />
                    </InputWrapper>
                    <details class="full-width">
                        <summary>Use custom border radii?</summary>
                        <fieldset class="nc-fieldset nc-stack">
                            <legend>Custom Border radii</legend>
                            <Input
                                name="borderRadiusSmall"
                                label="Border Radius Small"
                                id="borderRadiusSmall"
                                type="number"
                                step="1"
                                hint="This is the base for scale calculations"
                                bind:value={$configStore.borderRadiusSmall} />
                            <Input
                                name="borderRadiusMedium"
                                label="Border Radius Medium"
                                id="borderRadiusMedium"
                                type="number"
                                step="1"
                                bind:value={$configStore.borderRadiusMedium} />
                            <Input
                                name="bordeRadiusLarge"
                                label="Border Radius Large"
                                id="bordeRadiusLarge"
                                type="number"
                                step="1"
                                bind:value={$configStore.borderRadiusLarge} />
                        </fieldset>
                    </details>
                </fieldset>
            </div>

            <div class="nc-box -bordered">
                <fieldset class="nc-fieldset nc-stack">
                    <legend>Shadows</legend>

                    <Input
                        name="lightColorShadowLightness"
                        label="Light Shadow Lightness"
                        id="lightColorShadowLightness"
                        type="number"
                        step="1"
                        max="100"
                        bind:value={$configStore.lightShadowColorLightness} />
                    <Input
                        name="lightColorShadowChroma"
                        label="Light Shadow Chroma"
                        id="lightColorShadowChroma"
                        type="number"
                        step="0.01"
                        bind:value={$configStore.lightShadowColorChroma} />

                    <hr />

                    <Input
                        name="darkColorShadowLightness"
                        label="Dark Shadow Lightness"
                        id="darkColorShadowLightness"
                        type="number"
                        step="1"
                        max="100"
                        bind:value={$configStore.darkShadowColorLightness} />

                    <Input
                        name="darkColorShadowChroma"
                        label="Dark Shadow Chroma"
                        id="darkColorShadowChroma"
                        type="number"
                        step="0.01"
                        bind:value={$configStore.darkShadowColorChroma} />

                    <hr />

                    <Input
                        name="shadowConfigDistanceBase"
                        label="Shadow Distance Base"
                        id="shadowConfigDistanceBase"
                        type="range"
                        step="0.1"
                        min="0.1"
                        max="3"
                        bind:value={$configStore.shadowConfigDistanceBase} />

                    <Input
                        name="shadowConfigDistanceScaleFactor"
                        label="Shadow Distance Scale Factor"
                        id="shadowConfigDistanceScaleFactor"
                        type="range"
                        step="0.1"
                        min="1"
                        max="10"
                        bind:value={$configStore.shadowConfigDistanceScaleFactor} />

                    <Input
                        name="shadowConfigBlurScaleFactor"
                        label="Shadow Blur Scale Factor"
                        id="shadowConfigBlurScaleFactor"
                        type="range"
                        step="0.1"
                        min="0"
                        max="10"
                        bind:value={$configStore.shadowConfigBlurScaleFactor} />

                    <Input
                        name="shadowConfigStartTransparency"
                        label="Shadow Start Transparency"
                        id="shadowConfigStartTransparency"
                        type="range"
                        step="0.01"
                        min="0"
                        max="1"
                        bind:value={$configStore.shadowConfigStartTransparency} />

                    <Input
                        name="shadowConfigTransparencyScale"
                        label="Shadow Transparency Scale"
                        id="shadowConfigTransparencyScale"
                        type="range"
                        step="0.01"
                        min="0.3"
                        max="1"
                        bind:value={$configStore.shadowConfigTransparencyScale} />

                    <Input
                        name="shadowConfigSpreadMin"
                        label="Shadow Spread Min"
                        id="shadowConfigSpreadMin"
                        type="range"
                        step="0.1"
                        min="0"
                        max="4"
                        bind:value={$configStore.shadowConfigSpreadMin} />

                    <Input
                        name="shadowConfigSpreadMax"
                        label="Shadow Spread Max"
                        id="shadowConfigSpreadMax"
                        type="range"
                        step="0.1"
                        min="-4"
                        max="4"
                        bind:value={$configStore.shadowConfigSpreadMax} />

                    <Input
                        name="shadowConfigXOffsetFactor"
                        label="Shadow X Offset Factor"
                        id="shadowConfigXOffsetFactor"
                        type="range"
                        step="0.1"
                        min="-4"
                        max="4"
                        bind:value={$configStore.shadowConfigXOffsetFactor} />

                </fieldset>
            </div>

            <button type="button" class="nc-button -destructive" on:click={configStore.reset}>
                Reset
            </button>

        </form>
    </div>
{/if}
