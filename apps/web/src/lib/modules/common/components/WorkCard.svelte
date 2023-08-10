<div class="nc-card">
  <div>
    <figure>
      <img src="https://images.unsplash.com/photo-1690738083729-f5d21709425c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3165&q=80" alt="todo">
    </figure>
    <div class="heading">
      <span>Farmers Snack</span>
      <h2>A digital taste of your snack</h2>
    </div>
  </div>
</div>

<style lang="postcss">
  @import "@nordcode/ui/media";

  .nc-card {
    --card-padding-inline: 0px;
    --card-padding-block: 0px;

    background: linear-gradient(45deg, oklch(var(--color-border-base-lch) / 0.03), oklch(var(--color-surface-base-lch) / 0.8));
    backdrop-filter: blur(var(--spacing-base));
    box-shadow:
      inset 0px 0px var(--spacing-base) calc(var(--spacing-near) * -1) oklch(var(--color-border-base-lch) / 0.6);
    aspect-ratio: 4 / 5;

    @media (--OSdark) {
      box-shadow:
      inset 0px 0px var(--spacing-base) calc(var(--spacing-near) * -1) var(--color-border-base);
    }
  }

  img {
    aspect-ratio: 4/3;
    object-fit: cover;
    border-radius: var(--border-radius-small);
  }

  .heading {
    padding: var(--spacing-base);
  }
</style>