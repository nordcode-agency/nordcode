<script>
	import { EMAIL } from '$lib/content/contact';
	import { Navigation } from '$lib/content/navigation';
	import { ensureTrailingSlash } from '$lib/utils/ensureTrailingSlash';
</script>

<section class="nc-box">
	<div class="container nc-center nc-card">
		<div class="nc-stack -far">
			<h2 class="section-title">Bereit für dein Projekt?</h2>
			<p>
				Wir würden gerne mehr über dein Vorhaben erfahren. Egal ob mit einer konkreten Idee,
				einer vagen Vorstellung, kleinem oder großen Budget. Erzähl uns mehr, unverbindlich
				und ohne doppelten Boden.
			</p>
			<div class="actions">
				<a class="nc-button -primary" href={ensureTrailingSlash(Navigation.start.url)}
					>{Navigation.start.name}</a
				>
				<a class="nc-button -outline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		align-items: center;

		& h2 {
			color: var(--color-text-base);
			margin-block-end: var(--spacing-far);
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
		min-block-size: 60vh;
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
		flex-wrap: wrap;
		gap: var(--spacing-near);
	}
</style>
