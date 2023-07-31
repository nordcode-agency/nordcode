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
	@import "@nordcode/ui/media";
  header {
		isolation: isolate;
		z-index: 1;
		position: fixed;
		top: 0;
		left: 0;
		display: grid;
		place-items: center;
		inline-size: 100%;
		padding: var(--spacing-base);
	}

	nav {
		inline-size: min(100%, 60ch);
		display: grid;
		grid:
			"home home work" auto
			"home home about" auto
			/ 1fr 1fr auto;
		align-items: center;
		border-radius: var(--border-radius-large);
		background: oklch(var(--color-surface-subtle-lch) / 0.6);
		backdrop-filter: blur(16px);
		overflow: hidden;

		@media (--sm-n-above) {
			grid:
				"home home work about" auto
				/ 1fr 1fr auto auto;
			padding-inline: var(--spacing-base);
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
    font-size: var(--font-size-large);
    text-decoration: none;
    color: var(--color-brand-primary-strong);
    padding-inline: var(--spacing-base);
    /* padding-block: var(--spacing-nearest); */
		text-align: center;

		@media (--md-n-above) {
			padding-block: var(--spacing-base);
			font-size: var(--font-size-largest);
		}
  }
</style>

