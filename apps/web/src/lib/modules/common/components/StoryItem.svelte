<script lang="ts">
  export let caption: string;
  export let id: string;
</script>

<li {id}>
  <figure>
    <div class="figure">
      <slot />
    </div>
    <footer>
      {#if caption}
        <figcaption>
          {caption}
        </figcaption>
      {/if}
      {#if $$slots.cta}
        <slot name="cta" />
      {/if}
    </footer>
  </figure>
</li>

<style lang="postcss">
  @import "@nordcode/ui/media";

  li {
    inline-size: 100%;
    block-size: 100%;
  }

  figure {
    inline-size: 100%;
    block-size: 100%;
    display: grid;
    grid-template:
      [fig-start]
      1fr
      [footer-start]
      auto
      [footer-end fig-end]
      / [footer-start fig-start] 1fr [footer-end fig-end];
  }

  footer {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: var(--spacing-base);
    grid-area: footer;
    inline-size: 100%;
    padding-inline: var(--spacing-base);
    padding-block: var(--spacing-base);
    background: linear-gradient(transparent, rgba(0,0,0,0.6));
  }

  .figure {
    grid-area: fig;
    inline-size: 100%;
    block-size: 100%;

    & :global(> *) {
      inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
    }
  }

  figcaption {
    color: var(--color-text-dark-base);
    text-shadow: 0px var(--spacing-nearest) var(--spacing-base) var(--color-shadow-light-base);

    @media (--md-n-above) {
      font-size: var(--font-size-large);
    }
  }
</style>