<script lang="ts">
    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import {configStore} from "../../store/configStore";
</script>

{#if configStore}
<form class="nc-stack -full-width -stretched">
        <div class="nc-box -bordered">
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
        </div>
    <h2>Neutrals</h2>
        <div class="nc-box -bordered">
    <fieldset class="nc-fieldset stack -full-width -stretched">
        <legend>Light Theme</legend>
        <Input
                name="colorLCHLightNeutralChroma"
                label="Neutral Light Chroma"
                id="colorLCHLightNeutralChroma"
                type="number"
                step="0.01"
                bind:value={$configStore.lightNeutralChroma}/>

        <Input
                name="lightNeutralTextLightness"
                label="Base Neutral Text Lightness"
                id="lightNeutralTextLightness"
                hint="Lightness of the default text color"
                type="number"
                step="1"
                bind:value={$configStore.lightNeutralTextLightness}/>
        <Input
                name="lightTextScaleFactor"
                label="Light Text Lightness Scale Factor"
                id="lightTextScaleFactor"
                hint="Changes the lightness difference between neutral color tokens. Affects text and border colors."
                type="number"
                step="0.1"
                bind:value={$configStore.lightTextLightnessScaleFactor}/>

        <Input
                name="lightNeutralSurfaceLightness"
                label="Base Neutral Surface Lightness"
                id="lightNeutralSurfaceLightness"
                hint="Lightness of the default surface color"
                type="number"
                step="1"
                bind:value={$configStore.lightNeutralSurfaceLightness}/>


        <Input
                name="lightSurfaceScaleFactor"
                label="Light Surface Lightness Scale Factor"
                id="lightSurfaceScaleFactor"
                type="number"
                step="0.1"
                bind:value={$configStore.lightSurfaceLightnessScaleFactor}/>

        <Input
                name="lightNeutralBorderLightness"
                label="Base Neutral Border Lightness"
                id="lightNeutralBorderLightness"
                hint="Lightness of the default border color"
                type="number"
                step="1"
                bind:value={$configStore.lightNeutralBorderLightness}/>


    </fieldset>
        </div>
        <div class="nc-box -bordered">
    <fieldset  class="nc-fieldset stack -full-width -stretched">
        <legend>Dark Theme</legend>
        <Input
                name="colorLCHDarkNeutralChroma"
                label="Neutral Dark Chroma"
                id="colorLCHDarkNeutralChroma"
                type="number"
                step="0.01"
                bind:value={$configStore.darkNeutralChroma}/>
        <Input
                name="darkNeutralTextLightness"
                label="Base Neutral Text Lightness"
                id="darkNeutralTextLightness"
                type="number"
                step="1"
                bind:value={$configStore.darkNeutralTextLightness}/>

        <Input
                name="darkTextScaleFactor"
                label="Dark Text Lightness Scale Factor"
                id="darkTextScaleFactor"
                type="number"
                step="0.1"
                bind:value={$configStore.darkTextLightnessScaleFactor}/>
        <Input
                name="darkNeutralSurfaceLightness"
                label="Base Neutral Surface Lightness"
                id="darkNeutralSurfaceLightness"
                type="number"
                step="1"
                bind:value={$configStore.darkNeutralSurfaceLightness}/>


        <Input
                name="darkSurfaceScaleFactor"
                label="Dark Surface Lightness Scale Factor"
                id="darkSurfaceScaleFactor"
                type="number"
                step="0.1"
                bind:value={$configStore.darkSurfaceLightnessScaleFactor}/>

        <Input
                name="darkNeutralBorderLightness"
                label="Base Neutral Border Lightness"
                id="darkNeutralBorderLightness"
                type="number"
                step="1"
                bind:value={$configStore.darkNeutralBorderLightness}/>


    </fieldset>
        </div>

    <button type="button" class="nc-button -destructive" on:click={configStore.reset}>Reset</button>

</form>
  {/if}
