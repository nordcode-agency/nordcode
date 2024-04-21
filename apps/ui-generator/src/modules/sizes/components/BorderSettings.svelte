<script lang="ts">
    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import InputWrapper
        from "@nordcode/ui/src/modules/forms/svelte/InputFields/InputWrapper.svelte";
    import {
        configStore,
        updateBorderRadiusScale,
        updateBorderWidthScale,
        updateBorderWidths,
        updateBorderRadius,
    } from "../../store/configStore";
    import SettingsInput from '../../common/components/SettingsInput.svelte';

    const widths = [
        {
            name: "Thin",
        },
        {
            name: "Medium",
        },
        {
            name: "Thick",
        },
    ];

    const radius = [
        {
            name: "Small",
        },
        {
            name: "Medium",
        },
        {
            name: "Large",
        },
        {
            name: "Round",
        },
    ];

</script>

<style>
    .borders-preview {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 8rem;
        gap: var(--spacing-base);
        position: sticky;
        inset-block-start: var(--spacing-far);
        block-size: max-content;

    }
    .border-preview {
        block-size: 8rem;
        display: grid;
        place-content: center;
        border-color: var(--color-border-default);
    }
</style>

<section class="nc-region nc-stack -contained">
    <h2 id="borders">Borders</h2>
    <div class="nc-grid preview-grid">
        <div class="nc-stack">
            <form>
                <fieldset class="nc-fieldset nc-stack">
                    <InputWrapper
                        label="Border Width Thin (Base)"
                        id="borderWidthThinMain"
                        hint="Set the base value for border width calculations"
                    >

                        <input class="nc-input"
                               id="borderWidthThinMain"
                               name="borderWidthThinMain"
                               aria-required="true"
                               autocomplete="off"
                               type="number"
                               step="0.1"
                               value={$configStore.borderWidthThin}
                               on:input={evt => updateBorderWidths(evt.target.value)}
                        />
                    </InputWrapper>

                    <InputWrapper
                        label="Border Width Scale"
                        id="borderWidthScale"
                        hint="Harmoniously update your border widths based on this scale"
                    >

                        <input class="nc-input"
                               id="borderWidthScale"
                               name="borderWidthScale"
                               aria-required="true"
                               autocomplete="off"
                               type="number"
                               step="0.1"
                               value={$configStore.borderWidthScale}
                               on:input={evt => updateBorderWidthScale(evt.target.value)}
                        />
                    </InputWrapper>
                    <details class="full-width">
                        <summary>Use custom border widths?</summary>
                        <fieldset class="nc-fieldset nc-stack">
                            <legend>Custom Border widths</legend>
                            <Input
                                name="borderWidthThin"
                                label="Border Width Thin"
                                id="borderWidthThin"
                                type="number"
                                step="1"
                                hint="This is the base for scale calculations"
                                bind:value={$configStore.borderWidthThin} />
                            <Input
                                name="borderWidthMedium"
                                label="Border Width Medium"
                                id="borderWidthMedium"
                                type="number"
                                step="1"
                                bind:value={$configStore.borderWidthMedium} />
                            <Input
                                name="borderWidthThick"
                                label="Border Width Thick"
                                id="borderWidthThick"
                                type="number"
                                step="1"
                                bind:value={$configStore.borderWidthThick} />
                        </fieldset>
                    </details>

                    <hr />

                    <InputWrapper
                        label="Border Radius Small (Base)"
                        id="borderRadiusSmallMain"
                        hint="Set the base value for border radius calculations"
                    >

                        <input class="nc-input"
                               id="borderRadiusSmallMain"
                               name="borderRadiusSmallMain"
                               aria-required="true"
                               autocomplete="off"
                               type="number"
                               step="0.1"
                               value={$configStore.borderRadiusSmall}
                               on:input={evt => updateBorderRadius(evt.target.value)}
                        />
                    </InputWrapper>

                    <InputWrapper
                        label="Border Radius Scale"
                        id="borderRadiusScale"
                        hint="Harmoniously update your border radii based on this scale"
                    >

                        <input class="nc-input"
                               id="borderRadiusScale"
                               name="borderRadiusScale"
                               aria-required="true"
                               autocomplete="off"
                               type="number"
                               step="0.1"
                               value={$configStore.borderRadiusScale}
                               on:input={evt => updateBorderRadiusScale(evt.target.value)}
                        />
                    </InputWrapper>
                    <details class="full-width">
                        <summary>Use custom border radii?</summary>
                        <fieldset class="nc-fieldset nc-stack">
                            <legend>Custom Border radii</legend>
                            <Input
                                name="borderRadiusSmall"
                                label="Border Radius Small"
                                id="borderRadiusSmall"
                                type="number"
                                step="1"
                                hint="This is the base for scale calculations"
                                bind:value={$configStore.borderRadiusSmall} />
                            <Input
                                name="borderRadiusMedium"
                                label="Border Radius Medium"
                                id="borderRadiusMedium"
                                type="number"
                                step="1"
                                bind:value={$configStore.borderRadiusMedium} />
                            <Input
                                name="bordeRadiusLarge"
                                label="Border Radius Large"
                                id="bordeRadiusLarge"
                                type="number"
                                step="1"
                                bind:value={$configStore.borderRadiusLarge} />
                        </fieldset>
                    </details>

                </fieldset>
            </form>
        </div>
        <div class="borders-preview">
            {#each widths as width}
                {#each radius as rad}
                <div class="nc-box border-preview" style="border-radius: var(--border-radius-{rad.name.toLowerCase()}); border-width: var(--border-width-{width.name.toLowerCase()});">
                    {width.name} / {rad.name}
                </div>
                {/each}
            {/each}
        </div>
    </div>
</section>

