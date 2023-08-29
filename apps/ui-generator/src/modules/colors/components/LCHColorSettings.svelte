<script lang="ts">
    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import {configStore} from "../../store/configStore";
</script>

<form class="stack -full-width -stretched">
        <fieldset class="nc-fieldset stack -layout-base">
            <legend>Accents</legend>
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

        </fieldset>
    <fieldset class="stack -full-width -stretched">
        <legend>Neutrals</legend>
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
                                <Input
                    name="colorLCHLightLightnessFactor"
                    label="Light Lightness Scale Factor"
                    id="colorLCHLightLightnessFactor"
                    hint="Changes the difference between neutral color tokens. Affects text, background and border colors."
                    type="number"
                    step="0.1"
                    bind:value={$configStore.lightLightnessScaleFactor}/>
                <Input
                    name="darkLightnessFactor"
                    label="Dark Lightness Scale Factor"
                    id="darkLightnessFactor"
                    hint="Changes the difference between neutral color tokens. Affects text, background and border colors."
                    type="number"
                    step="0.1"
                    bind:value={$configStore.darkLightnessScaleFactor}/>


    </fieldset>

                <button type="button" class="nc-button -destructive" on:click={configStore.reset}>Reset</button>

    </form>
