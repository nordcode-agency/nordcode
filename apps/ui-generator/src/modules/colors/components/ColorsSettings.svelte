<script lang="ts">
    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import { configStore } from "../../store/configStore";
</script>

<div class="nc-stack -far -full-width -stretched">
    {#if configStore}
        <form class="nc-stack -far full-width -stretched">
            <div class="nc-box -bordered">
                <fieldset class="nc-fieldset nc-stack">
                    <legend>Accents</legend>
                    <Input
                        name="colorLCHPrimaryHue"
                        label="Primary Hue"
                        id="colorLCHPrimaryHue"
                        type="range"
                        max="360"
                        min="0"
                        step="1"
                        bind:value={$configStore.primaryHue} />
                    <Input
                        name="colorLCHPrimaryChroma"
                        label="Primary Chroma"
                        id="colorLCHPrimaryChroma"
                        type="range"
                        max="1"
                        min="0"
                        step="0.01"
                        bind:value={$configStore.primaryChroma} />
                    <Input
                        name="colorLCHPrimaryLightnessLight"
                        label="Primary Lightness Light"
                        id="colorLCHPrimaryLightnessLight"
                        type="range"
                        max="100"
                        min="0"
                        step="1"
                        bind:value={$configStore.primaryLightness} />

                    <Input
                        name="colorLCHPrimaryLightnessDark"
                        label="Primary Lightness Dark"
                        id="colorLCHPrimaryLightnessDark"
                        type="range"
                        max="100"
                        min="0"
                        step="1"
                        bind:value={$configStore.primaryLightnessDark} />
                    <hr />
                    <Input
                        name="colorLCHSecondaryHue"
                        label="Secondary Hue"
                        id="colorLCHSecondaryHue"
                        type="range"
                        max="360"
                        min="0"
                        step="1"
                        bind:value={$configStore.secondaryHue} />
                    <Input
                        name="colorLCHSecondaryChroma"
                        label="Secondary Chroma"
                        id="colorLCHSecondaryChroma"
                        type="range"
                        max="1"
                        min="0"
                        step="0.01"
                        bind:value={$configStore.secondaryChroma} />
                    <Input
                        name="colorLCHSecondaryLightnessLight"
                        label="Secondary Lightness Light"
                        id="colorLCHSecondaryLightnessLight"
                        type="range"
                        max="100"
                        min="0"
                        step="1"
                        bind:value={$configStore.secondaryLightness} />

                    <Input
                        name="colorLCHSecondaryLightnessDark"
                        label="Secondary Lightness Dark"
                        id="colorLCHSecondaryLightnessDark"
                        type="range"
                        max="100"
                        min="0"
                        step="1"
                        bind:value={$configStore.secondaryLightnessDark} />

                </fieldset>
            </div>
            <h2>Neutrals</h2>
            <div class="nc-box -bordered">
                <fieldset class="nc-fieldset nc-stack -full-width -stretched">
                    <legend>Neutral Hues</legend>
                    <p class="nc-hint">You can use either the primary hue or the secondary hue for
                        foreground and background colors. Choose here.</p>
                    <Input
                        name="colorUseSecondaryColorForFG"
                        label="Use secondary color for Foreground"
                        id="colorUseSecondaryColorForFG"
                        type="checkbox"
                        bind:value={$configStore.useSecondaryColorForFG} />

                    <Input
                        name="colorUseSecondaryColorForBG"
                        label="Use secondary color for Background"
                        id="colorUseSecondaryColorForBG"
                        type="checkbox"
                        bind:value={$configStore.useSecondaryColorForBG} />

                    <Input
                        name="colorUseSecondaryColorForBorders"
                        label="Use secondary color for Borders"
                        id="colorUseSecondaryColorForBorders"
                        type="checkbox"
                        bind:value={$configStore.useSecondaryColorForBorders} />
                </fieldset>
            </div>
            <div class="nc-box -bordered">
                <fieldset class="nc-fieldset nc-stack -full-width -stretched">
                    <legend>Light Theme</legend>
                    <Input
                        name="colorLCHLightNeutralChromaFG"
                        label="Neutral Light Chroma Foreground"
                        id="colorLCHLightNeutralChromaFG"
                        type="number"
                        step="0.001"
                        bind:value={$configStore.lightNeutralChromaFG} />
                    <Input
                        name="lightNeutralTextLightness"
                        label="Base Neutral Text Lightness"
                        id="lightNeutralTextLightness"
                        hint="Lightness of the default text color"
                        type="number"
                        step="1"
                        bind:value={$configStore.lightNeutralTextLightness} />
                    <Input
                        name="lightTextScaleFactor"
                        label="Light Text Lightness Scale Factor"
                        id="lightTextScaleFactor"
                        hint="Changes the lightness difference between neutral color tokens. Affects text and border colors."
                        type="number"
                        step="0.01"
                        bind:value={$configStore.lightTextLightnessScaleFactor} />

                    <hr />
                    <Input
                        name="colorLCHLightNeutralChromaBG"
                        label="Neutral Light Chroma Background"
                        id="colorLCHLightNeutralChromaBG"
                        type="number"
                        step="0.001"
                        bind:value={$configStore.lightNeutralChromaBG} />
                    <Input
                        name="lightNeutralSurfaceLightness"
                        label="Base Neutral Surface Lightness"
                        id="lightNeutralSurfaceLightness"
                        hint="Lightness of the default surface color"
                        type="number"
                        step="1"
                        bind:value={$configStore.lightNeutralSurfaceLightness} />

                    <Input
                        name="lightSurfaceScaleFactor"
                        label="Light Surface Lightness Scale Factor"
                        id="lightSurfaceScaleFactor"
                        type="number"
                        step="0.01"
                        bind:value={$configStore.lightSurfaceLightnessScaleFactor} />
                    <hr />
                    <Input
                        name="colorLCHLightNeutralChromaBorder"
                        label="Neutral Light Chroma Border"
                        id="colorLCHLightNeutralChromaBorder"
                        type="number"
                        step="0.001"
                        bind:value={$configStore.lightNeutralChromaBorder} />
                    <Input
                        name="lightNeutralBorderLightness"
                        label="Base Neutral Border Lightness"
                        id="lightNeutralBorderLightness"
                        hint="Lightness of the default border color"
                        type="number"
                        step="1"
                        bind:value={$configStore.lightNeutralBorderLightness} />

                </fieldset>
            </div>
            <div class="nc-box -bordered">
                <fieldset class="nc-fieldset nc-stack -full-width -stretched">
                    <legend>Dark Theme</legend>
                    <Input
                        name="colorLCHDarkNeutralChromaFG"
                        label="Neutral Dark Chroma Foreground"
                        id="colorLCHDarkNeutralChromaFG"
                        type="number"
                        step="0.001"
                        bind:value={$configStore.darkNeutralChromaFG} />
                    <Input
                        name="darkNeutralTextLightness"
                        label="Base Neutral Text Lightness"
                        id="darkNeutralTextLightness"
                        type="number"
                        step="1"
                        bind:value={$configStore.darkNeutralTextLightness} />

                    <Input
                        name="darkTextScaleFactor"
                        label="Dark Text Lightness Scale Factor"
                        id="darkTextScaleFactor"
                        type="number"
                        step="0.01"
                        bind:value={$configStore.darkTextLightnessScaleFactor} />

                    <hr />

                    <Input
                        name="colorLCHDarkNeutralChromaBG"
                        label="Neutral Dark Chroma Background"
                        id="colorLCHDarkNeutralChromaBG"
                        type="number"
                        step="0.001"
                        bind:value={$configStore.darkNeutralChromaBG} />
                    <Input
                        name="darkNeutralSurfaceLightness"
                        label="Base Neutral Surface Lightness"
                        id="darkNeutralSurfaceLightness"
                        type="number"
                        step="1"
                        bind:value={$configStore.darkNeutralSurfaceLightness} />

                    <Input
                        name="darkSurfaceScaleFactor"
                        label="Dark Surface Lightness Scale Factor"
                        id="darkSurfaceScaleFactor"
                        type="number"
                        step="0.01"
                        bind:value={$configStore.darkSurfaceLightnessScaleFactor} />
                    <hr />

                    <Input
                        name="colorLCHDarkNeutralChromaBorder"
                        label="Neutral Dark Chroma Border"
                        id="colorLCHDarkNeutralChromaBorder"
                        type="number"
                        step="0.001"
                        bind:value={$configStore.darkNeutralChromaBorder} />
                    <Input
                        name="darkNeutralBorderLightness"
                        label="Base Neutral Border Lightness"
                        id="darkNeutralBorderLightness"
                        type="number"
                        step="1"
                        bind:value={$configStore.darkNeutralBorderLightness} />

                </fieldset>
            </div>

            <button type="button" class="nc-button -destructive" on:click={configStore.reset}>
                Reset
            </button>

        </form>
    {/if}

</div>
