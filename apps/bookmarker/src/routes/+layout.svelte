<script lang="ts">
  import NotificationCenter from "@nordcode/ui/src/modules/notifications/svelte/NotificationCenter.svelte";
  import NotificationTemplate from "@nordcode/ui/src/modules/notifications/svelte/NotificationTemplate.svelte";
  import {onMount} from "svelte";
  import {page} from "$app/stores";

  onMount(async () => {
    await import ("@nordcode/ui/src/modules/dialogs/ts/dialogs.ts")
    await import ("@nordcode/ui/src/modules/notifications/js/notifications.js")
    await import ("@nordcode/ui/src/modules/copyButtons/ts/copyButtons")
  })
</script>


<svelte:head>
  <title>{$page.data.title}</title>
  <meta name="description" content={$page.data.description}/>
</svelte:head>

<main class="layout-container">
  <slot/>
  <NotificationTemplate />
  <NotificationCenter />
</main>

<style>
  @import "@nordcode/ui/complete";
  @import "@nordcode/ui/base";
  @import "@nordcode/ui/fonts";

  :global(.nc-notification) {
    box-shadow: var(--shadow-nearest);
    border-radius: var(--border-radius-medium);
  }

  :global(html) {
    --layout-max-width: 960px;
    --layout-padding: var(--spacing-base);

         --button-background: var(--color-brand-primary-base);
         --button-color: var(--color-surface-strong);
         --button-border-color: var(--color-border-subtle);

        --button-background-hover: var(--color-brand-primary-strong);
        --button-color-hover: var(--color-surface-strong);
        --button-border-color-hover: var(--color-border-base);


       --button-border-radius: var(--border-radius-small);
       --button-offset-distance: 0;
       --button-box-shadow: none;
        --button-offset-distance-hover: 0;



/* Typography */

--font-family-mono: DMMono, monospace;
--font-family-sans: system-ui, sans-serif;
--font-family-serif: serif;
--font-family-default: var(--font-family-sans);

--font-weight-bold: 600;
--font-weight-regular: 400;
--font-weight-light: 300;

--line-height-large: 2;
--line-height-base: 1.4;
--line-height-small: 1.2;

--tracking-base: 0em;
--tracking-tight: -0.04em;
--tracking-wide: 0.08em;

--measure-large: 88ch;
--measure-base: 72ch;
--measure-small: 44ch;

--font-size-smallest: 0.592rem;
--font-size-small: 0.769rem;
--font-size-base: 1rem;
--font-size-large: 1.3rem;
--font-size-largest: 1.69rem;


/* Spacing */

--spacing-tiny: 0.094rem;
--spacing-nearest: 0.207rem;
--spacing-near: 0.455rem;
--spacing-base: 1rem;
--spacing-far: 2.2rem;
--spacing-farthest: 4.84rem;


/* Borders */

--border-width-thin: 1px;
--border-width-medium: 2px;
--border-width-thick: 4px;

--border-radius-small: 2px;
--border-radius-medium: 4px;
--border-radius-large: 8px;
--border-radius-round: 1e5px;


/* SHADOWS */
/* Light Theme */


--shadow-inset-light: inset 2px 2px 0px 0 oklch(20% 0.5 277 / 10%);

--shadow-nearest-light: 0.17px 0.30600000000000005px 0.37px 1px oklch(20% 0.5 277 / 24.88%), 0.26px 0.468px 0.57px -0.25px oklch(20% 0.5 277 / 20.74%), 0.41px 0.738px 0.9px -1.5px oklch(20% 0.5 277 / 17.28%), 0.64px 1.1520000000000001px 1.41px -2.75px oklch(20% 0.5 277 / 14.4%), 1px 1.8px 2.2px -4px oklch(20% 0.5 277 / 12%);
--shadow-near-light: 0.34px 0.6120000000000001px 0.75px 1px oklch(20% 0.5 277 / 24.88%), 0.52px 0.936px 1.14px -0.25px oklch(20% 0.5 277 / 20.74%), 0.82px 1.476px 1.8px -1.5px oklch(20% 0.5 277 / 17.28%), 1.28px 2.3040000000000003px 2.82px -2.75px oklch(20% 0.5 277 / 14.4%), 2px 3.6px 4.4px -4px oklch(20% 0.5 277 / 12%);
--shadow-medium-light: 0.67px 1.2060000000000002px 1.47px 1px oklch(20% 0.5 277 / 24.88%), 1.05px 1.8900000000000001px 2.31px -0.25px oklch(20% 0.5 277 / 20.74%), 1.64px 2.952px 3.61px -1.5px oklch(20% 0.5 277 / 17.28%), 2.56px 4.6080000000000005px 5.63px -2.75px oklch(20% 0.5 277 / 14.4%), 4px 7.2px 8.8px -4px oklch(20% 0.5 277 / 12%);
--shadow-far-light: 1.34px 2.4120000000000004px 2.95px 1px oklch(20% 0.5 277 / 24.88%), 2.1px 3.7800000000000002px 4.62px -0.25px oklch(20% 0.5 277 / 20.74%), 3.28px 5.904px 7.22px -1.5px oklch(20% 0.5 277 / 17.28%), 5.12px 9.216000000000001px 11.26px -2.75px oklch(20% 0.5 277 / 14.4%), 8px 14.4px 17.6px -4px oklch(20% 0.5 277 / 12%);

--shadow-color-light: oklch(20% 0.5 277);

/* Dark Theme */

--shadow-inset-dark: inset 2px 2px 0px 0  oklch(80% 0.5 277 / 10%);

--shadow-nearest-dark: 0.17px 0.30600000000000005px 0.37px 1px oklch(80% 0.5 277 / 24.88%), 0.26px 0.468px 0.57px -0.25px oklch(80% 0.5 277 / 20.74%), 0.41px 0.738px 0.9px -1.5px oklch(80% 0.5 277 / 17.28%), 0.64px 1.1520000000000001px 1.41px -2.75px oklch(80% 0.5 277 / 14.4%), 1px 1.8px 2.2px -4px oklch(80% 0.5 277 / 12%);
--shadow-near-dark: 0.34px 0.6120000000000001px 0.75px 1px oklch(80% 0.5 277 / 24.88%), 0.52px 0.936px 1.14px -0.25px oklch(80% 0.5 277 / 20.74%), 0.82px 1.476px 1.8px -1.5px oklch(80% 0.5 277 / 17.28%), 1.28px 2.3040000000000003px 2.82px -2.75px oklch(80% 0.5 277 / 14.4%), 2px 3.6px 4.4px -4px oklch(80% 0.5 277 / 12%);
--shadow-medium-dark: 0.67px 1.2060000000000002px 1.47px 1px oklch(80% 0.5 277 / 24.88%), 1.05px 1.8900000000000001px 2.31px -0.25px oklch(80% 0.5 277 / 20.74%), 1.64px 2.952px 3.61px -1.5px oklch(80% 0.5 277 / 17.28%), 2.56px 4.6080000000000005px 5.63px -2.75px oklch(80% 0.5 277 / 14.4%), 4px 7.2px 8.8px -4px oklch(80% 0.5 277 / 12%);
--shadow-far-dark: 1.34px 2.4120000000000004px 2.95px 1px oklch(80% 0.5 277 / 24.88%), 2.1px 3.7800000000000002px 4.62px -0.25px oklch(80% 0.5 277 / 20.74%), 3.28px 5.904px 7.22px -1.5px oklch(80% 0.5 277 / 17.28%), 5.12px 9.216000000000001px 11.26px -2.75px oklch(80% 0.5 277 / 14.4%), 8px 14.4px 17.6px -4px oklch(80% 0.5 277 / 12%);

--shadow-color-dark: oklch(80% 0.5 277);




/* COLORS */

/* Light Theme */


--color-brand-primary-light-strong: oklch(45% 0.31 277);
--color-brand-primary-light-base: oklch(56% 0.23 277);
--color-brand-primary-light-subtle: oklch(64% 0.10 277);


--color-brand-secondary-light-strong: oklch(45% 0.31 307);
--color-brand-secondary-light-base: oklch(56% 0.23 307);
--color-brand-secondary-light-subtle: oklch(64% 0.10 307);


--color-text-light-strong: oklch(8% 0.03 277);
--color-text-light-base: oklch(16% 0.03 277);
--color-text-light-subtle: oklch(30% 0.03 277);

--color-surface-light-strong: oklch(99% 0.03 277);
--color-surface-light-base: oklch(97% 0.03 277);
--color-surface-light-subtle: oklch(90% 0.03 277);

--color-border-light-strong: oklch(4% 0.03 277);
--color-border-light-base: oklch(20% 0.03 277);
--color-border-light-subtle: oklch(40% 0.03 277);

/* Dark Theme */


--color-brand-primary-dark-strong: oklch(60% 0.3 277);
--color-brand-primary-dark-base: oklch(68% 0.19 277);
--color-brand-primary-dark-subtle: oklch(75% 0.10 277);


--color-brand-secondary-dark-strong: oklch(60% 0.3 307);
--color-brand-secondary-dark-base: oklch(68% 0.19 307);
--color-brand-secondary-dark-subtle: oklch(75% 0.10 307);


--color-text-dark-strong: oklch(99% 0.03 277);
--color-text-dark-base: oklch(94% 0.03 277);
--color-text-dark-subtle: oklch(80% 0.03 277);

--color-surface-dark-strong: oklch(8% 0.03 277);
--color-surface-dark-base: oklch(18% 0.03 277);
--color-surface-dark-subtle: oklch(28% 0.03 277);

--color-border-dark-strong: oklch(99% 0.03 277);
--color-border-dark-base: oklch(80% 0.03 277);
--color-border-dark-subtle: oklch(54% 0.03 277);

/*    Status */
--color-status-error: oklch(62.67% 0.289 25.41);


  }
</style>
