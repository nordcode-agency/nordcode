<script lang="ts">
import { Input, InputWrapper, Select } from '@nordcode/forms-svelte';
import { CheckboxInput } from '@nordcode/forms-svelte';
import { configStore, updateFontScale } from '../../store/configStore';
</script>

{#if configStore}
<div>
  <form class="nc-region nc-stack -farthest full-width -stretched content-block">
    <div class="settings-container">
      <fieldset class="nc-fieldset nc-stack">
        <legend>Font Families</legend>
        <Input
          name="fontFamilySans"
          label="Font Family Sans"
          id="fontFamilySans"
          type="text"
          bind:value={$configStore.fontFamilySans} />
        <Input
          name="fontFamilySerif"
          label="Font Family Serif"
          id="fontFamilySerif"
          type="text"
          bind:value={$configStore.fontFamilySerif} />
        <Input
          name="fontFamilyMono"
          label="Font Family Mono"
          id="fontFamilyMono"
          type="text"
          bind:value={$configStore.fontFamilyMono} />
        <Select
          name="fontFamilyDefault"
          label="Font Family Default"
          id="fontFamilyDefault"
          bind:value={$configStore.fontFamilyDefault}
          options={
                    [
                        {label: "Sans", value: "sans"},
                        {label: "Serif", value: "serif"},
                        {label: "Mono", value: "mono"},
                    ]
                   }
        />
      </fieldset>
    </div>
    <div class="settings-container">

      <fieldset class="nc-fieldset nc-stack">
        <legend>Font Sizes</legend>

        <InputWrapper
          label="Font Scale"
          id="fontScale"
          hint="Harmoniously update your font sizes based on this scale"
        >

          <input class="nc-input"
                 id="fontScale"
                 name="fontScale"
                 aria-required="true"
                 autocomplete="off"
                 type="number"
                 step="0.1"
                 value={$configStore.fontSizeScale}
                 on:input={evt => updateFontScale(evt.target.value)}
          />
        </InputWrapper>

        <details class="full-width">
          <summary>Use custom font sizes?</summary>
          <fieldset class="nc-fieldset nc-stack">
            <legend>Custom Font Sizes</legend>
            <CheckboxInput type="checkbox" name="useCustomFontsizes" label="Use custom font sizes?"
                   id="useCustomFontsizes"
                   bind:checked={$configStore.useCustomFontSizes} />
            <Input
              name="fontSizeDisplay"
              label="Font Size Display"
              id="fontSizeDisplay"
              type="number"
              disabled={$configStore.useCustomFontSizes === false}
              bind:value={$configStore.fontSizeDisplay} />

            <Input
              name="fontSizeLargest"
              label="Font Size Largest"
              id="fontSizeLargest"
              type="number"
              disabled={$configStore.useCustomFontSizes === false}
              bind:value={$configStore.fontSizeLargest} />
            <Input
              name="fontSizeLarge"
              label="Font Size Large"
              id="fontSizeLarge"
              type="number"
              disabled={$configStore.useCustomFontSizes === false}
              bind:value={$configStore.fontSizeLarge} />
            <Input
              name="fontSizeBase"
              label="Font Size Base"
              id="fontSizeBase"
              type="number"
              disabled={$configStore.useCustomFontSizes === false}
              bind:value={$configStore.fontSizeBase} />
            <Input
              name="fontSizeSmall"
              label="Font Size Small"
              id="fontSizeSmall"
              type="number"
              disabled={$configStore.useCustomFontSizes === false}
              bind:value={$configStore.fontSizeSmall} />
            <Input
              name="fontSizeSmallest"
              label="Font Size Smallest"
              id="fontSizeSmallest"
              type="number"
              disabled={$configStore.useCustomFontSizes === false}
              bind:value={$configStore.fontSizeSmallest} />
          </fieldset>
        </details>
      </fieldset>
    </div>
    <div class="settings-container">
      <fieldset class="nc-fieldset nc-stack">
        <legend>Line Heights</legend>
        <Input
          name="line-height-large"
          label="Line Height Large"
          id="line-height-large"
          type="number"
          bind:value={$configStore.lineHeightLarge} />
        <Input
          name="line-height-base"
          label="Line Height Base"
          id="line-height-base"
          type="number"
          bind:value={$configStore.lineHeightBase} />
        <Input
          name="line-height-small"
          label="Line Height Small"
          id="line-height-small"
          type="number"
          bind:value={$configStore.lineHeightSmall} />
      </fieldset>
    </div>
    <div class="settings-container">
      <fieldset class="nc-fieldset nc-stack">
        <legend>Font Weights</legend>
        <Input
          name="fontWeightDefault"
          label="Default"
          id="fontWeightDefault"
          type="number"
          step="1"
          bind:value={$configStore.fontWeightDefault} />
        <Input
          name="fontWeightHeading"
          label="Heading"
          id="fontWeightHeading"
          type="number"
          step="1"
          bind:value={$configStore.fontWeightHeading} />
        <Input
          name="fontWeightActive"
          label="Active"
          id="fontWeightActive"
          type="number"
          step="1"
          bind:value={$configStore.fontWeightActive} />
        <Input
          name="fontWeightStrong"
          label="Strong"
          id="fontWeightStrong"
          type="number"
          step="1"
          bind:value={$configStore.fontWeightStrong} />

      </fieldset>
    </div>

    <div class="settings-container">
      <fieldset class="nc-fieldset nc-stack">
        <legend>Tracking</legend>
        <Input
          name="tracking-wide"
          label="Tracking Wide"
          id="tracking-wide"
          type="number"
          step="0.01"
          bind:value={$configStore.trackingWide} />
        <Input
          name="tracking-base"
          label="Tracking Base"
          id="tracking-base"
          type="number"
          step="0.01"
          bind:value={$configStore.trackingStandard} />
        <Input
          name="tracking-narrow"
          label="Tracking Narrow"
          id="tracking-narrow"
          type="number"
          step="0.01"
          bind:value={$configStore.trackingTight} />
      </fieldset>
    </div>
    <div class="settings-container">
      <fieldset class="nc-fieldset nc-stack">
        <legend>Measure</legend>
        <Input
          name="measure-large"
          label="Measure Large"
          id="measure-large"
          type="number"
          step="0.01"
          bind:value={$configStore.measureLarge} />
        <Input
          name="measure-base"
          label="Measure Base"
          id="measure-base"
          type="number"
          step="0.01"
          bind:value={$configStore.measureBase} />
        <Input
          name="measure-small"
          label="Measure Small"
          id="measure-small"
          type="number"
          step="0.01"
          bind:value={$configStore.measureSmall} />
      </fieldset>
    </div>

  </form>
</div>
  {/if}
