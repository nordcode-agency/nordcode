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
                        token="--lightness-max"
                        max="1"
                        min="0"
                        step="0.01"
                    ></SettingsInput>
                    <SettingsInput
                        label="Maximum Lightness"
                        bind:value={$configStore!.lightnessMax}
                        token="--lightness-min"
                        max="1"
                        min="0"
                        step="0.01"
                    ></SettingsInput>
                    <SettingsInput
                        label="Neutral Chroma Multiplier"
                        bind:value={$configStore!.neutralChromaScale}
                        token="--neutral-chroma-scale"
                        max="3"
                        min="0"
                        step="0.001"
                    ></SettingsInput>
                    <SettingsInput
                        label="Transparency Weaker"
                        bind:value={$configStore.transparencyWeaker}
                        token="--transparency-weaker"
                        max="1"
                        min="0"
                        step="0.001"
                    ></SettingsInput>
                </fieldset>
            </form>
        </div>
        <div class="nc-flow">
            <h2>Explanation</h2>
            <p>
                These values are used throughout our different tokens and components, mostly to
                modify colors.
            </p>
            <dl>
                <dt>Minimum & Maximum Lightness</dt>
                <dd>
                    Used as guidelines for minimal and maximal lightness.<br />
                    The <b>higher the maximum lightness</b>, the <b>lighter</b> can a color be. The
                    <b>lower the minimum lightness</b>, the <b>darker</b> can a color be.
                </dd>
                <dt>Neutral Chroma Multiplier</dt>
                <dd>
                    Used in calculation for the chroma of neutral colors. <br />
                    A multipler of 1 will result in all neutral color shades having the same chroma.
                    A <b>value below 1</b> will result in a more desaturated color. A
                    <b>value above 1</b> will result more saturated colors for subtler colors.
                </dd>
                <dt>Transparency Weaker</dt>
                <dd>
                    Used in various modifiers to slightly dampen a colors transparency. <br />
                    The <b>higher</b> the value, the <b>more opaque</b> the color will be.
                </dd>
            </dl>
        </div>
    </div>
</section>
