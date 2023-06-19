<script lang="ts">
    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import {colorStore} from "../colorStore";
</script>

<form class="stack -layout-far -full-width -stretched">
        <fieldset class="nc-fieldset stack -layout-base">
            <legend>Colors</legend>
               <Input
                    name="colorLCHLightPrimaryHue"
                    label="Primary Light Hue"
                    id="colorLCHLightPrimaryHue"
                    type="range"
                    max="360"
                    min="0"
                    step="1"
                    bind:value={$colorStore.oklch.primaryHue}/>
               <Input
                    name="colorLCHLightSecondaryHue"
                    label="Secondary Light Hue"
                    id="colorLCHLightSecondaryHue"
                    type="range"
                    max="360"
                    min="0"
                    step="1"
                    bind:value={$colorStore.oklch.secondaryHue}/>

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
