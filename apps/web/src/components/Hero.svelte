<script lang="ts">
  import Dialog from '@nordcode/ui/src/modules/dialogs/svelte/Dialog.svelte';
</script>

<div class="hero">
  <div class="nc-stack">
    <div class="nc-stack text">
      <h1>Wir erschaffen digitale Erlebnisse.</h1>
      <h2>Mit Hilfe von Design und Technologie entstehen Marken, mit der sich deine Nutzer identifizieren können und Produkte, die einfach sind und sich den Bedürfnissen jeden einzelnen anpassen.</h2>
    </div>
    <div class="nc-gallery">
      <button class="story-btn nc-button" data-dialogtarget="preview">
        Preview
      </button>
      <dialog id="preview">

      </dialog>
      <button class="nc-button" type="button">Los geht's</button>
    </div>
  </div>
</div>

<style lang="postcss">
  @import "@nordcode/ui/media";

  .nc-gallery {
    --gallery-padding-inline: 0;
  }

  .story-btn {
    /* display: grid;
    place-items: center; */
    /* aspect-ratio: 1/1; */
    /* inline-size: 3rem; */
    /* border-radius: var(--border-radius-round); */
  }

  .hero {

    & h1 {
      hyphens: none;
      background: linear-gradient(
        to left,
        var(--color-brand-secondary-strong),
        var(--color-brand-primary-strong)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    & h2 {
      color: var(--color-text-subtle);
    }
  }

  .text {
    max-inline-size: 60ch;
  }
</style>