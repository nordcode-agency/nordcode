<script lang="ts">
    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import Select from "@nordcode/ui/src/modules/forms/svelte/InputFields/Select.svelte";
    import InputWrapper from "@nordcode/ui/src/modules/forms/svelte/InputFields/InputWrapper.svelte"
    import {typoStore, updateFontScale} from "../typoStore";
</script>

<div>
    <form class="stack -layout-far -full-width -stretched">
        <fieldset class="nc-fieldset stack -layout-base">
            <legend>Font Families</legend>
            <Input
                    name="fontFamilySans"
                    label="Font Family Sans"
                    id="fontFamilySans"
                    type="text"
                    bind:value={$typoStore.fontFamilySans}/>
            <Input
                    name="fontFamilySerif"
                    label="Font Family Serif"
                    id="fontFamilySerif"
                    type="text"
                    bind:value={$typoStore.fontFamilySerif}/>
            <Input
                    name="fontFamilyMono"
                    label="Font Family Mono"
                    id="fontFamilyMono"
                    type="text"
                    bind:value={$typoStore.fontFamilyMono}/>
            <Select
                    name="fontFamilyDefault"
                    label="Font Family Default"
                    id="fontFamilyDefault"
                    type="text"
                    bind:value={$typoStore.fontFamilyDefault}
                    options={
                    [
                        {label: "Sans", value: "sans"},
                        {label: "Serif", value: "serif"},
                        {label: "Mono", value: "mono"},
                    ]
                   }
            />
        </fieldset>
        <fieldset class="nc-fieldset stack -layout-base">
            <legend>Font Sizes</legend>


            <InputWrapper
                    name="fontScale"
                    label="Font Scale"
                    id="fontScale"
                    hint="Harmoniously update your font sizes based on this scale"
            >

                <input class="nc-input"
                       id="fontScale"
                       name="fontScale"
                       aria-required="true"
                       autocomplete="off"
                       type="number"
                       step="0.1"
                       value={$typoStore.fontSizeScale}
                       on:input={evt => updateFontScale(evt.target.value)}
                />
            </InputWrapper>

            <details class="-full-width">
                <summary>Use custom font sizes?</summary>
                <fieldset class="nc-fieldset stack -layout-base">
                    <legend>Custom Font Sizes</legend>
                    <Input type="checkbox" name="useCustomFontsizes" label="Use custom font sizes?"
                           id="useCustomFontsizes"
                           bind:value={$typoStore.useCustomFontSizes}/>

                    <Input
                            name="fontSizeLargest"
                            label="Font Size Largest"
                            id="fontSizeLargest"
                            type="number"
                            disabled={$typoStore.useCustomFontSizes === false}
                            bind:value={$typoStore.fontSizeLargest}/>
                    <Input
                            name="fontSizeLarge"
                            label="Font Size Large"
                            id="fontSizeLarge"
                            type="number"
                            disabled={$typoStore.useCustomFontSizes === false}
                            bind:value={$typoStore.fontSizeLarge}/>
                    <Input
                            name="fontSizeBase"
                            label="Font Size Base"
                            id="fontSizeBase"
                            type="number"
                            disabled={$typoStore.useCustomFontSizes === false}
                            bind:value={$typoStore.fontSizeBase}/>
                    <Input
                            name="fontSizeSmall"
                            label="Font Size Small"
                            id="fontSizeSmall"
                            type="number"
                            disabled={$typoStore.useCustomFontSizes === false}
                            bind:value={$typoStore.fontSizeSmall}/>
                    <Input
                            name="fontSizeSmallest"
                            label="Font Size Smallest"
                            id="fontSizeSmallest"
                            type="number"
                            disabled={$typoStore.useCustomFontSizes === false}
                            bind:value={$typoStore.fontSizeSmallest}/>
                </fieldset>
            </details>
        </fieldset>
        <fieldset class="nc-fieldset stack -layout-base">
            <legend>Line Heights</legend>
            <Input
                    name="line-height-large"
                    label="Line Height Large"
                    id="line-height-large"
                    type="number"
                    bind:value={$typoStore.lineHeightLarge}/>
            <Input
                    name="line-height-base"
                    label="Line Height Base"
                    id="line-height-base"
                    type="number"
                    bind:value={$typoStore.lineHeightBase}/>
            <Input
                    name="line-height-small"
                    label="Line Height Small"
                    id="line-height-small"
                    type="number"
                    bind:value={$typoStore.lineHeightSmall}/>
        </fieldset>
        <fieldset class="nc-fieldset stack -layout-base">
            <legend>Tracking</legend>
            <Input
                    name="tracking-wide"
                    label="Tracking Wide"
                    id="tracking-wide"
                    type="number"
                    step="0.01"
                    bind:value={$typoStore.trackingWide}/>
            <Input
                    name="tracking-base"
                    label="Tracking Base"
                    id="tracking-base"
                    type="number"
                    step="0.01"
                    bind:value={$typoStore.trackingStandard}/>
            <Input
                    name="tracking-narrow"
                    label="Tracking Narrow"
                    id="tracking-narrow"
                    type="number"
                    step="0.01"
                    bind:value={$typoStore.trackingTight}/>
        </fieldset>
        <fieldset class="nc-fieldset stack -layout-base">
            <legend>Measure</legend>
            <Input
                    name="measure-large"
                    label="Measure Large"
                    id="measure-large"
                    type="number"
                    step="0.01"
                    bind:value={$typoStore.measureLarge}/>
            <Input
                    name="measure-base"
                    label="Measure Base"
                    id="measure-base"
                    type="number"
                    step="0.01"
                    bind:value={$typoStore.measureBase}/>
            <Input
                    name="measure-small"
                    label="Measure Small"
                    id="measure-small"
                    type="number"
                    step="0.01"
                    bind:value={$typoStore.measureSmall}/>
        </fieldset>

        <button type="button" class="nc-button -destructive" on:click={typoStore.reset}>Reset</button>
    </form>
</div>
