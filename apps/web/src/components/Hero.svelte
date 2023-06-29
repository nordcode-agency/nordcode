<div class="hero">
  <div class="nc-stack">
    <div class="nc-stack text">
      <h1>Wir erschaffen digitale Erlebnisse.</h1>
      <h2>Mit Hilfe von Design und Technologie entstehen Marken, mit der sich deine Nutzer identifizieren können und Produkte, die einfach sind und sich den Bedürfnissen jeden einzelnen anpassen.</h2>
    </div>
    <div class="nc-gallery">
      <div class="story-btn">
        Story
      </div>
      <button class="nc-button" type="button">Los geht's</button>
    </div>
  </div>
</div>

<style lang="postcss">
  @import "@nordcode/ui/media";

  .story-btn {
    aspect-ratio: 1/1;
    inline-size: 3rem;
    background-color: var(--color-surface-subtle);
  }

  .hero {
    display: grid;
    align-content: center;

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