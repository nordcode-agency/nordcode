<script lang="ts">
  export let caption: string;
</script>

<figure>
  <div class="figure">
    <slot />
  </div>
  {#if caption}
    <div class="gradient"></div>
    <figcaption>
      {caption}
    </figcaption>
  {/if}
  {#if $$slots.cta}
    <div class="cta">
      <slot name="cta" />
    </div>
  {/if}
</figure>

<style lang="postcss">
  @import "@nordcode/ui/media";

  figure {
    inline-size: 100%;
    block-size: 100%;
    display: grid;
    grid-template:
      [fig-start actions-start]
      1fr
      [cap-start cta-start actions-end]
      auto
      [cap-end fig-end cta-end]
      / [cap-start fig-start] 1fr [cap-end cta-start actions-start] auto [fig-end cta-end actions-end];
  }

  .gradient {
    grid-area: cap-start / cap-start / cap-end / cta-end;
    background: linear-gradient(transparent, rgba(0,0,0,0.6));
    inline-size: 100%;
    block-size: 100%;
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
    grid-area: cap;
    inline-size: 100%;
    padding-inline: var(--spacing-base);
    padding-block: var(--spacing-far);
    font-size: var(--font-size-large);
    color: var(--color-text-dark-base);
  }

  .cta {
    grid-area: cta;
    display: grid;
    place-items: center;
    block-size: 100%;
    padding-block: var(--spacing-far);
    padding-inline-end: var(--spacing-base);
  }

  .actions {
    display: flex;
    flex-direction: column-reverse;
    gap: var(--spacing-base);
    padding: var(--spacing-base);
  }
</style>