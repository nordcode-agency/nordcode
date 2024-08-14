<section class="nc-box">
	<div class="container nc-center nc-card">
		<div class="nc-stack -far">
			<h3>Bereit für dein Projekt?</h3>
			<p>
				Wir würden gerne mehr über dein Vorhaben erfahren. Egal ob mit einer konkreten Idee,
				einer vagen Vorstellung, kleinem oder großen Budget. Erzähl uns mehr, unverbindlich
				und ohne Kosten.
			</p>
			<div class="actions">
				<a class="nc-button -primary" href="/start">Jetzt loslegen</a>
				<a class="nc-button -outline" href="mailto:hello@nordcode.agency"
					>hello@nordcode.agency</a
				>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		align-items: center;

		& h3 {
            font-size: 2.4rem;
			color: var(--color-text-base);
		}

		& p {
			color: var(--color-text-muted);
			max-inline-size: 40ch;
		}
	}

	.container {
		/* --center-measure: 140ch; */
		--bg-top: light-dark(var(--color-surface-subtle), var(--color-surface-subtle));
		--bg-bottom: light-dark(var(--color-surface-muted), var(--color-surface-muted));

		display: flex;
		align-items: center;
		block-size: 60vh;
		padding: var(--spacing-adaptive);
		background: radial-gradient(
				ellipse at top right in oklch,
				var(--color-brand-primary-base) -40%,
				transparent 70%
			),
			radial-gradient(
				ellipse at bottom center in oklch,
				var(--color-brand-secondary-base) -70%,
				transparent 90%
			),
			linear-gradient(in oklch, var(--bg-top), var(--bg-bottom));
	}

	.actions {
		display: flex;
		gap: var(--spacing-near);
	}
</style>
