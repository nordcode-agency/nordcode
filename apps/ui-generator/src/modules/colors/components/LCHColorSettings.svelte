<script lang="ts">
    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import {configStore} from "../../store/configStore";
</script>

<form class="stack -layout-far -full-width -stretched">
        <fieldset class="nc-fieldset stack -layout-base">
            <legend>Colors</legend>
               <Input
                    name="colorLCHPrimaryHue"
                    label="Primary Hue"
                    id="colorLCHPrimaryHue"
                    type="range"
                    max="360"
                    min="0"
                    step="1"
                    bind:value={$configStore.primaryHue}/>
               <Input
                    name="colorLCHPrimaryLightness"
                    label="Primary Lightness"
                    id="colorLCHPrimaryLightness"
                    type="range"
                    max="100"
                    min="0"
                    step="1"
                    bind:value={$configStore.primaryLightness}/>
               <Input
                    name="colorLCHSecondaryHue"
                    label="Secondary Hue"
                    id="colorLCHSecondaryHue"
                    type="range"
                    max="360"
                    min="0"
                    step="1"
                    bind:value={$configStore.secondaryHue}/>
               <Input
                    name="colorLCHSecondaryLightness"
                    label="Secondary Lightness"
                    id="colorLCHSecondaryLightness"
                    type="range"
                    max="100"
                    min="0"
                    step="1"
                    bind:value={$configStore.secondaryLightness}/>

                <Input
                    name="colorLCHLightNeutralChroma"
                    label="Neutral Light Chroma"
                    id="colorLCHLightNeutralChroma"
                    type="number"
                    step="0.01"
                    bind:value={$configStore.lightNeutralChroma}/>
                <Input
                    name="colorLCHDarkNeutralChroma"
                    label="Neutral Dark Chroma"
                    id="colorLCHDarkNeutralChroma"
                    type="number"
                    step="0.01"
                    bind:value={$configStore.darkNeutralChroma}/>
        </fieldset>

                <button type="button" class="nc-button -destructive" on:click={configStore.reset}>Reset</button>

    </form>
