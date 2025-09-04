<script>
	import Logo from './Logo.svelte';
</script>

<header class="nc-box">
	<nav aria-label="Hauptnavigation">
		<a href={"/"} aria-label="Startseite" class="home">
			<Logo />
		</a>
		<a class="gradient-text work" href="/#work">Unsere Projekte</a>
		<a class="gradient-text about" href="/#about">Das Team</a>
	</nav>
</header>

<style>
    @custom-media --sm-n-above (width >= 480px);
    @custom-media --md-n-above (width >= 768px);
    @custom-media --lg-n-above (width >= 1024px);

	header {
		pointer-events: none;
		isolation: isolate;
		display: grid;
		place-items: center;
		inline-size: 100%;
		padding-block: var(--spacing-far);
	}

	nav {
		pointer-events: auto;
		inline-size: 100%;
		display: grid;
		grid:
			'home home' auto
			'work about' auto
			/ auto 1fr ;
		align-items: center;
		border-radius: var(--border-radius-large);
		gap: var(--spacing-base);

		& a:focus-visible {
		   outline-offset: 0.1lh;
		}

		@media (--sm-n-above) {
			grid:
				'home . work about' auto
				/ auto 1fr auto auto;
			gap: var(--spacing-far);
		}
	}

	.home {
		max-inline-size: 14rem;
		grid-area: home;
	}

	.work {
		grid-area: work;
	}

	.about {
		grid-area: about;
	}

	.work,
	.about {
		display: block;
		inline-size: 100%;
		font-size: calc(var(--font-size-base) * 1.25);
		text-decoration: none;

		@media (--md-n-above) {
			font-size: calc(var(--font-size-base) * 1.35);
			padding-block: var(--spacing-base);
			text-align: end;
		}
	}
</style>
