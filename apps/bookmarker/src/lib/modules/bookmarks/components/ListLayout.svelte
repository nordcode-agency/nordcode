<section class="list-layout">
  <aside>
	<slot name="aside" />
    </aside>
  <div>
      <slot name="main" />
  </div>
</section>

<style lang="postcss">
	.list-layout {
        inline-size: 100%;
		display: grid;
		grid-template:
			'aside main' 1fr
			/ 1fr 3fr;
        padding-top: var(--spacing-farthest);
	}

  .list-layout > aside {
    grid-area: aside;
  }

  .list-layout > div {
    grid-area: main;
  }
</style>
