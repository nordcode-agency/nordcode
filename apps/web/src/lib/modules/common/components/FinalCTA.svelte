<script>
	import { EMAIL } from '$lib/content/contact';
	import { Navigation } from '$lib/content/navigation';
	import { ensureTrailingSlash } from '$lib/utils/ensureTrailingSlash';
</script>

<div class="container nc-center nc-card | finalCTA">
	<div class="nc-stack -far prose">
		<h2 class="finalCTA-headline">Bereit für dein Projekt?</h2>
		<p>
			Wir würden gerne mehr über dein Vorhaben erfahren. Egal ob mit einer konkreten Idee,
			einer vagen Vorstellung, kleinem oder großen Budget. Erzähl uns mehr, unverbindlich und
			ohne doppelten Boden.
		</p>
		<div class="actions">
			<a class="nc-button -brand" href={ensureTrailingSlash(Navigation.start.url)}
				>Starte dein Projekt</a
			>
			<a class="nc-button -muted-brand" href={`mailto:${EMAIL}`}>Schreib uns per Mail</a>
			<a class="nc-button -muted-brand" href={`https://wa.me/message/6D6KQFSIQQ6EG1`}>Schreib uns per Whatsapp</a>
		</div>
	</div>
</div>

<style>
	.finalCTA {
		display: flex;
		align-items: center;

		& p {
			color: var(--color-text-muted);
			max-inline-size: var(--measure-base);
		}
	}

	.finalCTA-headline {
		font-size: 2.5rem;
		font-weight: 700;
	}

	.container {
		/* --center-measure: 140ch; */
		--bg-top: light-dark(var(--color-surface-subtle), var(--color-surface-subtle));
		--bg-bottom: light-dark(var(--color-surface-muted), var(--color-surface-muted));

		display: flex;
		align-items: center;
		padding: var(--spacing-far) var(--spacing-adaptive);
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
		align-items: center;
		gap: var(--spacing-base);

		& a {
		  font-size: var(--font-size-large);

			&:not(.nc-button) {
				font-weight: var(--font-weight-active);
			}
		}
	}
</style>
