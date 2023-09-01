
<article class="section">
  <div class="stack">
    <figure>
      <img src="https://images.unsplash.com/photo-1690738083729-f5d21709425c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3165&q=80" alt="todo">
    </figure>
    <div class="headings">
      <span>Farmers Snack</span>
      <h2>A digital taste of your snack</h2>
    </div>
  </div>
</article>

<style lang="postcss">
  article {
    inline-size: min(60vw, 96ch, 100%);
    margin-inline: auto;
  }

  figure {
    view-transition-name: workimage;
  }

  :global(::view-transition-old(workimage)),
  :global(::view-transition-new(workimage)) {
      height: 100%;
      width: 100%;
    }

  img {
    aspect-ratio: 21/9;
    inline-size: 100%;
    object-fit: cover;
    border-radius: var(--border-radius-large);
  }

  .headings {
    view-transition-name: workheadings;
  }
</style>