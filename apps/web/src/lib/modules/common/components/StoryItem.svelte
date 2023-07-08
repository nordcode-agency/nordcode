<script lang="ts">
  export let caption: string;
</script>

<figure>
  <slot />
  {#if caption}
    <figcaption>
      {caption}
    </figcaption>
  {/if}
</figure>

<style lang="postcss">
  figure {
    inline-size: 100%;
    block-size: 100%;
    display: grid;
    grid-template: [fig-start] 1fr [cap-start] auto [cap-end fig-end] / [cap-start fig-start] 1fr [cap-start fig-end];
    
    & :global(> :not(figcaption)) {
      inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
      grid-area: fig;
    }
  }

  figcaption {
    grid-area: cap;
    inline-size: 100%;
    padding-inline: var(--spacing-base);
    padding-block: var(--spacing-far);
    background: linear-gradient(transparent, rgba(0,0,0,0.6));
    font-size: var(--font-size-large);
  }
</style>