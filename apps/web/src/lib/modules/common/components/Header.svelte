<script>
	import Logo from './Logo.svelte';
</script>

<header class="nc-box">
	<nav aria-label="Hauptnavigation">
		<a href={"/"} aria-label="Startseite" class="home">
			<Logo />
		</a>
		<a class="gradient-text work" href="/#work">Projekte</a>
		<a class="gradient-text about" href="/#about">Team</a>
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
		/* inline-size: min(100%, 60ch); */
		inline-size: 100%;
		display: grid;
		grid:
			'home home work' auto
			'home home about' auto
			/ 1fr 1fr auto;
		align-items: center;
		border-radius: var(--border-radius-large);

		& a:focus-visible {
		   outline-offset: 0.1lh;

		}

		@media (--sm-n-above) {
			grid:
				'home . work about' auto
				/ auto 1fr auto auto;
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
		font-size: calc(var(--font-size-base) * 1.5);
		text-decoration: none;
		color: var(--color-brand-primary-base);
		padding-inline: var(--spacing-base);
		text-align: end;

		@media (--md-n-above) {
			padding-block: var(--spacing-base);
		}
	}
</style>
