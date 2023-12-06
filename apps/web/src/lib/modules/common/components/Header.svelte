<script>
	import Logo from "./Logo.svelte";
</script>

<header>
	<nav>
		<a href="/" aria-label="Startseite">
			<Logo />
		</a>
		<a href="/work">Work</a>
		<a href="/about">About</a>
	</nav>
</header>

<style>
  header {
		pointer-events: none;
		isolation: isolate;
		display: grid;
		place-items: center;
		inline-size: 100%;
		padding: var(--spacing-base);

		@media (--sm-n-above) {
			padding-inline: var(--spacing-far);
		}
	}

	nav {
		pointer-events: auto;
		/* inline-size: min(100%, 60ch); */
		inline-size: 100%;
		display: grid;
		grid:
			"home home work" auto
			"home home about" auto
			/ 1fr 1fr auto;
		align-items: center;
		border-radius: var(--border-radius-large);
		/* background: oklch(var(--color-surface-subtle-lch) / 0.8); */
		/* backdrop-filter: blur(16px); */
		overflow: hidden;

		@media (--sm-n-above) {
			grid:
				"home home work about" auto
				/ 1fr 1fr auto auto;
		}
	}

	a[href="/"] {
		max-inline-size: 14rem;
		padding: var(--spacing-base);
		grid-area: home;
	}

	a[href="/work"] {
		grid-area: work;
	}

	a[href="/about"] {
		grid-area: about;
	}

	a {
		display: block;
		inline-size: 100%;
    font-size: calc(var(--font-size-base) * 1.5);
    text-decoration: none;
    color: var(--color-brand-primary-base);
    padding-inline: var(--spacing-base);
    /* padding-block: var(--spacing-nearest); */
		text-align: center;

		@media (--md-n-above) {
			padding-block: var(--spacing-base);
			/* font-size: var(--font-size-largest); */
		}
  }
</style>

