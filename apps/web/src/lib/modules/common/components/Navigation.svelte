<nav>
  <ul>
    <li><a href="#">Work</a></li>
    <li><a href="#">About</a></li>
  </ul>
</nav>

<style lang="postcss">
  nav {
    display: flex;
    justify-content: flex-end;
  }
  a {
    font-size: var(--font-size-largest);
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
  }
</style>