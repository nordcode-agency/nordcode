<script lang="ts">
    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import {colorStore} from "../colorStore";
</script>

<form class="stack -layout-far -full-width -stretched">

        <fieldset class="nc-fieldset stack -layout-base">
            <legend>Light</legend>
               <Input
                    name="colorLCHLightPrimaryHue"
                    label="Primary Light Hue"
                    id="colorLCHLightPrimaryHue"
                    type="number"
                    step="1"
                    bind:value={$colorStore.oklch.light.primary.hue}/>
            <hr />
               <Input
                    name="colorLCHLightSecondaryHue"
                    label="Secondary Light Hue"
                    id="colorLCHLightSecondaryHue"
                    type="number"
                    step="1"
                    bind:value={$colorStore.oklch.light.secondary.hue}/>

            <hr />
            <div class="cluster -nowrap">
                <Input
                    name="colorLCHLightNeutralHue"
                    label="Neutral Light Hue"
                    id="colorLCHLightNeutralHue"
                    type="number"
                    step="1"
                    bind:value={$colorStore.oklch.light.neutral.hue}/>
                <Input
                    name="colorLCHLightNeutralChroma"
                    label="Neutral Light Chroma"
                    id="colorLCHLightNeutralChroma"
                    type="number"
                    step="0.01"
                    bind:value={$colorStore.oklch.light.neutral.chroma}/>
            </div>
        </fieldset>
    <fieldset class="nc-fieldset stack -layout-base">
            <legend>Dark</legend>
               <Input
                    name="colorLCHDarkPrimaryHue"
                    label="Primary Dark Hue"
                    id="colorLCHDarkPrimaryHue"
                    type="number"
                    step="1"
                    bind:value={$colorStore.oklch.dark.primary.hue}/>
            <hr />
               <Input
                    name="colorLCHDarkSecondaryHue"
                    label="Secondary Dark Hue"
                    id="colorLCHDarkSecondaryHue"
                    type="number"
                    step="1"
                    bind:value={$colorStore.oklch.dark.secondary.hue}/>

            <hr />
            <div class="cluster -nowrap">
                <Input
                    name="colorLCHDarkNeutralHue"
                    label="Neutral Dark Hue"
                    id="colorLCHDarkNeutralHue"
                    type="number"
                    step="1"
                    bind:value={$colorStore.oklch.dark.neutral.hue}/>
                <Input
                    name="colorLCHDarkNeutralChroma"
                    label="Neutral Dark Chroma"
                    id="colorLCHDarkNeutralChroma"
                    type="number"
                    step="0.01"
                    bind:value={$colorStore.oklch.dark.neutral.chroma}/>
            </div>
        </fieldset>
                <button type="button" class="nc-button -destructive" on:click={colorStore.reset}>Reset</button>

    </form>
