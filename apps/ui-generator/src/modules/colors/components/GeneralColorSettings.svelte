<script lang="ts">
import SettingsInput from '../../common/components/SettingsInput.svelte';
import { configStore } from '../../store/configStore.ts';
</script>
<section class="nc-region nc-stack -contained -stretched content-block">
    <h2 id="general">General Color Settings</h2>
    <div class="nc-grid preview-grid">
        <div class="nc-stack">
            <form class="settings-container">
                <fieldset class="nc-fieldset nc-stack">
                    <SettingsInput
                        label="Minimum Lightness"
                        bind:value={$configStore.lightnessMin}
                        max="1"
                        min="0"
                        step="0.01"
                    >
                    </SettingsInput>
                    <SettingsInput
                        label="Maximum Lightness"
                        bind:value={$configStore.lightnessMax}
                        max="1"
                        min="0"
                        step="0.01"
                    >
                    </SettingsInput>
                     <SettingsInput
                        label="Neutral Chroma Multiplier"
                        bind:value={$configStore.neutralChromaScale}
                        max="1"
                        min="0"
                        step="0.001"
                    ></SettingsInput>
                    <SettingsInput
                        label="Transparency Weaker"
                        bind:value={$configStore.transparencyWeaker}
                        max="1"
                        min="0"
                        step="0.001"
                    ></SettingsInput>
                </fieldset>
            </form>
        </div>
        <div class="nc-flow">
            <h2>Explanation</h2>
            <p>These values are used throughout our different tokens and components, mostly to modify colors.</p>
            <dl>
                <dt>Minimum & Maximum Lightness</dt>
                <dd>Used to calculate a scale for generating each color. <br>
                    The <b>higher the maximum lightness</b>, the <b>lighter</b> all colors will be.
                    The <b>lower the minimum lightness</b>, the <b>darker</b> all colors will be.
                </dd>
                <dt>
                    Neutral Chroma Multiplier
                </dt>
                <dd>
                    Also used to calculate a scale for generating each color. <br>
                    The <b>higher</b> the multiplier, the <b>more saturated</b> all colors will be.
                </dd>
                <dt>
                    Transparency Weaker
                </dt>
                <dd>
                    Used in various modifiers to slightly dampen a colors transparency. <br>
                    The <b>higher</b> the value, the <b>more opaque</b> the color will be.
                </dd>
            </dl>

        </div>
    </div>
</section>
