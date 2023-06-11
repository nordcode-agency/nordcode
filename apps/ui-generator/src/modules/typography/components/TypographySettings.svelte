<script lang="ts">
    import {typoStore} from "../../config/typoStore";
    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import Select from "@nordcode/ui/src/modules/forms/svelte/InputFields/Select.svelte";
</script>

<div>
    <form class="stack -layout-far -full-width -stretched">
        <fieldset>
            <legend>Font Families</legend>
            <Input
                   name="fontFamilySans"
                     label="Font Family Sans"
                   id="fontFamilySans"
                   type="text"
                   bind:value={$typoStore.fontFamilySans} />
            <Input
                   name="fontFamilySerif"
                     label="Font Family Serif"
                   id="fontFamilySerif"
                   type="text"
                   bind:value={$typoStore.fontFamilySerif} />
            <Input
                   name="fontFamilyMono"
                     label="Font Family Mono"
                   id="fontFamilyMono"
                   type="text"
                   bind:value={$typoStore.fontFamilyMono} />
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
        <fieldset>
            <legend>Font Sizes</legend>
            <Input
                   name="fontSize"
                     label="Font Size"
                   id="fontSize"
                   type="number"
                   bind:value={$typoStore.fontSizeBase} />
        </fieldset>
        <fieldset>
            <legend>Line Heights</legend>
            <Input
                   name="line-height-large"
                     label="Line Height Large"
                   id="line-height-large"
                   type="number"
                   bind:value={$typoStore.lineHeightLarge} />
            <Input
                   name="line-height-base"
                     label="Line Height Base"
                   id="line-height-base"
                   type="number"
                   bind:value={$typoStore.lineHeightBase} />
            <Input
                   name="line-height-small"
                     label="Line Height Small"
                   id="line-height-small"
                   type="number"
                   bind:value={$typoStore.lineHeightSmall} />
        </fieldset>
        <fieldset>
            <legend>Tracking</legend>
            <Input
                   name="tracking-wide"
                     label="Tracking Wide"
                   id="tracking-wide"
                   type="number"
                   step="0.01"
                   bind:value={$typoStore.trackingWide} />
            <Input
                   name="tracking-base"
                     label="Tracking Base"
                   id="tracking-base"
                   type="number"
                   step="0.01"
                   bind:value={$typoStore.trackingStandard} />
            <Input
                   name="tracking-narrow"
                     label="Tracking Narrow"
                   id="tracking-narrow"
                   type="number"
                   step="0.01"
                   bind:value={$typoStore.trackingTight} />
        </fieldset>
        <fieldset>
            <legend>Measure</legend>
            <Input
                   name="measure-large"
                     label="Measure Large"
                   id="measure-large"
                   type="number"
                   step="0.01"
                   bind:value={$typoStore.measureLarge} />
            <Input
                   name="measure-base"
                     label="Measure Base"
                   id="measure-base"
                   type="number"
                   step="0.01"
                   bind:value={$typoStore.measureBase} />
            <Input
                   name="measure-small"
                     label="Measure Small"
                   id="measure-small"
                   type="number"
                   step="0.01"
                   bind:value={$typoStore.measureSmall} />
        </fieldset>
    </form>
</div>
