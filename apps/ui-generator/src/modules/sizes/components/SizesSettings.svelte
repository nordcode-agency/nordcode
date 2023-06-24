<script lang="ts">
    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import InputWrapper from "@nordcode/ui/src/modules/forms/svelte/InputFields/InputWrapper.svelte"
    import {
        configStore,
        updateBorderRadiusScale,
        updateBorderWidthScale,
        updateShadowDistanceScale,
        updateSpacingScale
    } from "../../store/configStore";
</script>

<div>
    <form class="stack -layout-far -full-width -stretched">
        <fieldset class="nc-fieldset stack -layout-base">
            <legend>Spacings</legend>
            <InputWrapper
                    name="spacingScale"
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
            <details class="-full-width">
                <summary>Use custom spacings?</summary>
                <fieldset class="nc-fieldset stack -layout-base">
                    <legend>Custom Spacings</legend>
                    <Input
                            name="spacingTiny"
                            label="Spacing Tiny"
                            id="spacingTiny"
                            type="number"
                            step="0.01"
                            bind:value={$configStore.spacingTiny}/>
                    <Input
                            name="spacingNearest"
                            label="Spacing Nearest"
                            id="spacingNearest"
                            type="number"
                            step="0.01"
                            bind:value={$configStore.spacingNearest}/>
                    <Input
                            name="spacingNear"
                            label="Spacing Near"
                            id="spacingNear"
                            type="number"
                            step="0.01"
                            bind:value={$configStore.spacingNear}/>
                    <Input
                            name="spacingBase"
                            label="Spacing Base"
                            id="spacingBase"
                            type="number"
                            step="0.01"
                            bind:value={$configStore.spacingBase}/>
                    <Input
                            name="spacingFar"
                            label="Spacing Far"
                            id="spacingFar"
                            type="number"
                            step="0.01"
                            bind:value={$configStore.spacingFar}/>
                    <Input
                            name="spacingFarthest"
                            label="Spacing Farthest"
                            id="spacingFarthest"
                            type="number"
                            step="0.01"
                            bind:value={$configStore.spacingFarthest}/>
                </fieldset>
            </details>
        </fieldset>

        <fieldset class="nc-fieldset stack -layout-base">
            <legend>Borders</legend>
            <InputWrapper
                    name="borderWidthScale"
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
            <details class="-full-width">
                <summary>Use custom border widths?</summary>
                <fieldset class="nc-fieldset stack -layout-base">
                    <legend>Custom Border widths</legend>
                    <Input
                            name="borderWidthThin"
                            label="Border Width Thin"
                            id="borderWidthThin"
                            type="number"
                            step="1"
                            hint="This is the base for scale calculations"
                            bind:value={$configStore.borderWidthThin}/>
                    <Input
                            name="borderWidthNormal"
                            label="Border Width Normal"
                            id="borderWidthNormal"
                            type="number"
                            step="1"
                            bind:value={$configStore.borderWidthNormal}/>
                    <Input
                            name="borderWidthThick"
                            label="Border Width Thick"
                            id="borderWidthThick"
                            type="number"
                            step="1"
                            bind:value={$configStore.borderWidthThick}/>
                </fieldset>
            </details>

            <InputWrapper
                    name="borderRadiusScale"
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
            <details class="-full-width">
                <summary>Use custom border radii?</summary>
                <fieldset class="nc-fieldset stack -layout-base">
                    <legend>Custom Border radii</legend>
                    <Input
                            name="borderRadiusSmall"
                            label="Border Radius Small"
                            id="borderRadiusSmall"
                            type="number"
                            step="1"
                            hint="This is the base for scale calculations"
                            bind:value={$configStore.borderRadiusSmall}/>
                    <Input
                            name="borderRadiusNormal"
                            label="Border Radius Normal"
                            id="borderRadiusNormal"
                            type="number"
                            step="1"
                            bind:value={$configStore.borderRadiusMedium}/>
                    <Input
                            name="bordeRadiusLarge"
                            label="Border Radius Large"
                            id="bordeRadiusLarge"
                            type="number"
                            step="1"
                            bind:value={$configStore.borderRadiusLarge}/>
                </fieldset>
            </details>
        </fieldset>

        <fieldset class="nc-fieldset stack -layout-base">
            <legend>Shadows</legend>
            <div class="cluster -nowrap">
                <Input
                        name="colorShadowHue"
                        label="Color Shadow Hue"
                        id="colorShadowHue"
                        type="range"
                        step="1"
                        min="0"
                        max="360"
                        bind:value={$configStore.shadowColorHue}/>

                <Input
                        name="colorShadowChroma"
                        label="Shadow Chroma"
                        id="colorShadowChroma"
                        type="number"
                        step="0.01"
                        bind:value={$configStore.shadowColorChroma}/>
            </div>
            <InputWrapper
                    name="shadowDistanceScale"
                    label="Shadow Distance Scale"
                    id="shadowDistanceScale"
                    hint="Harmoniously update your shadow distances based on this scale"
            >

                <input class="nc-input"
                       id="shadowDistanceScale"
                       name="shadowDistanceScale"
                       aria-required="true"
                       autocomplete="off"
                       type="number"
                       step="0.1"
                       value={$configStore.shadowDistanceScale}
                       on:input={evt => updateShadowDistanceScale(evt.target.value)}
                />
            </InputWrapper>
            <details class="-full-width">
                <summary>Use custom shadow distances?</summary>
                <fieldset class="nc-fieldset stack -layout-base">
                    <legend>Custom Shadow Distances</legend>
                    <Input
                            name="shadowDistanceInset"
                            label="Shadow Distance Inset"
                            id="shadowDistanceInset"
                            type="number"
                            step="1"
                            bind:value={$configStore.shadowDistanceInset}/>
                    <Input
                            name="shadowDistanceNearest"
                            label="Shadow Distance Nearest"
                            id="shadowDistanceNearest"
                            type="number"
                            step="1"
                            hint="This is the base for scale calculations"
                            bind:value={$configStore.shadowDistanceNearest}/>
                    <Input
                            name="shadowDistanceNear"
                            label="Shadow Distance Near"
                            id="shadowDistanceNear"
                            type="number"
                            step="1"
                            bind:value={$configStore.shadowDistanceNear}/>
                    <Input
                            name="shadowDistanceMedium"
                            label="Shadow Distance Medium"
                            id="shadowDistanceMedium"
                            type="number"
                            step="1"
                            bind:value={$configStore.shadowDistanceMedium}/>
                    <Input
                            name="shadowDistanceFar"
                            label="Shadow Distance Far"
                            id="shadowDistanceFar"
                            type="number"
                            step="1"
                            bind:value={$configStore.shadowDistanceFar}/>
                </fieldset>
            </details>

        </fieldset>


        <button type="button" class="nc-button -destructive" on:click={configStore.reset}>Reset</button>

    </form>
</div>
