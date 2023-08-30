<script lang="ts">
  export let highlight: boolean = false;
</script>

<div class="container" style:grid-column={highlight ? 'span 2' : 'span 1'}>
  <div class="nc-card card">
    <figure>
      <img src="https://images.unsplash.com/photo-1690738083729-f5d21709425c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3165&q=80" alt="todo">
    </figure>
    <div class="header">
      <div class="headings">
        <span>Farmers Snack</span>
        <h2>A digital taste of your snack</h2>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  @import "@nordcode/ui/media";

  .container {
    container-type: inline-size;
    inline-size: 100%;
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
      aspect-ratio: 16 / 9;

      & figure {
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

    @container (min-inline-size: 1200px) {
      aspect-ratio: 21 / 9;
    }
  }

  :global([style*="--work-card-variant: row"]) .card {
    grid-template: auto
      / [img-start] auto [img-end header-start] 1fr [header-end];

    & figure {
      aspect-ratio: 1 / 1;
      block-size: 96px;
    }
  }

  figure {
    grid-area: img;
  }

  img {
    block-size: 100%;
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
