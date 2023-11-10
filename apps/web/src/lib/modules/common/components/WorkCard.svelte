<script lang="ts" async>
  import type { MediaImage } from '$lib/types/index';

  export let variant: 'horizontal' | '' = '';
  export let heading: string;
  export let subheading: string;
  export let cover: MediaImage;
  export let slug: string;

  $: href = `/work/${slug}`;
</script>

<div class="container">
  <a {href} class="nc-card card" data-variant={variant}>
    <figure>
      <img loading="lazy" src={cover.src} alt={cover.alt}>
    </figure>
    <div class="header">
      <div class="headings">
        <span>{subheading}</span>
        <h2>{heading}</h2>
      </div>
    </div>
  </a>
</div>

<style lang="postcss">
  @import "@nordcode/ui/media";

  .container {
    container-type: inline-size;
  }
  .card {
    --card-padding-inline: 0px;
    --card-padding-block: 0px;

    display: grid;
    grid-template:
      [img-start full-start]
      auto
      [img-end header-start]
      1fr
      [header-end full-end]
      / 1fr;
    background: linear-gradient(45deg, oklch(var(--color-border-default-lch) / 0.03), oklch(var(--color-surface-default-lch) / 0.8));
    backdrop-filter: blur(var(--spacing-base));
    box-shadow:
      var(--_card-shadow),
      inset 0px 0px var(--spacing-base) calc(var(--spacing-near) * -1) oklch(var(--color-border-default-lch) / 0.8);
    block-size: 100%;
    text-decoration: none;
    transition: border-color 300ms ease, box-shadow 300ms;

    &:is([href], button):hover {
      border-color: var(--color-brand-primary-base);
      box-shadow:
      var(--_card-shadow),
      inset 0px calc(var(--spacing-near) * -1) var(--spacing-base) calc(var(--spacing-near) * -1) oklch(var(--color-brand-primary-base-lch) / 0.1);
    }

    &[data-variant="horizontal"] {
      grid-template: auto 
        / [img-start full-start] auto [img-end header-start] 1fr [header-end full-end];

        & :is(figure, .img-placeholder) {
          inline-size: clamp(120px, 8vw, 160px);
        }

        & img {
          aspect-ratio: 1 / 1;
        }

        & .headings {
          min-inline-size: 0;
        }
    }

    @media (--OSdark) {
      box-shadow:
      var(--_card-shadow),
      inset 0px 0px var(--spacing-base) calc(var(--spacing-near) * -1) var(--color-border-default);
    }

    @container (min-inline-size: 360px) {
      & h2 {
        font-size: var(--font-size-large);
      }
    }

    @container (min-inline-size: 480px) {
      aspect-ratio: auto;
    }

    @container (min-inline-size: 680px) {
      &:not([data-variant="horizontal"]) {
        aspect-ratio: 16 / 9;
  
        & :is(figure, .img-placeholder) {
          grid-area: full;
        }
  
        & .header {
          display: grid;
          place-items: end;
          padding-block: var(--spacing-far);
        }
  
        & .headings {
          background: oklch(var(--color-surface-subtle-lch) / 0.9);
          backdrop-filter: blur(var(--spacing-base));
          padding-block: var(--spacing-base);
          padding-inline: var(--spacing-far);
          border-radius: var(--border-radius-large);
          box-shadow: var(--shadow-near);
        }
      }
    }

    @container (min-inline-size: 1024px) {
      &:not([data-variant="horizontal"]) {
        aspect-ratio: 21 / 9;
      }
    }
  }

  figure {
    grid-area: img;
  }

  .img-placeholder {
    grid-area: img;
    text-align: center;
    block-size: 100%;
    inline-size: 100%;
    aspect-ratio: 3 / 2;
  }

  img {
    block-size: 100%;
    inline-size: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    border-radius: var(--border-radius-small);
  }

  .header {
    grid-area: header;
    padding: var(--spacing-base);
  }

  h2 {
    font-size: var(--font-size-base);
  }

  .headings {
    & span {
      color: var(--color-text-muted);
    }
  }
</style>
