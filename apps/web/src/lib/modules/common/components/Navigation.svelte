<nav>
  <ul>
    <li><a href="#">Work</a></li>
    <li><a href="#">About</a></li>
  </ul>
</nav>

<style lang="postcss">
  @import "@nordcode/ui/media";

  nav {
    display: flex;
    justify-content: flex-end;

    @media (--md-n-above) {
      justify-content: center;
    }
  }
  a {
    /* font-size: var(--font-size-largest); */
    font-size: clamp(1.5rem, 6vw, 2.5rem);
    text-decoration: none;
    color: var(--color-brand-primary-strong);
    padding-block: var(--spacing-nearest);
    padding-inline: var(--spacing-base);
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-base);
    list-style: none;
    padding: 0;
  }
</style>