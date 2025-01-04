<script lang="ts">
	import SecondaryCtaButton from './SecondaryCtaButton.svelte';

	type TService = {
		title: string;
		description: string;
		cta: {
			href: string;
			label: string;
		};
	};

	const services: TService[] = [
		{
			title: 'Websites',
			description:
				'Wir entwickeln Webseiten und Webanwendungen, die auf modernen Technologien basieren und auf allen Geräten gut aussehen.',
			cta: {
				href: '/start/website',
				label: 'Website erstellen'
			}
		},
		{
			title: 'E-Commerce',
			description:
				'Wir erstellen Online-Shops, die einfach zu bedienen sind und die Kunden begeistern.',
			cta: {
				href: '/start/shop',
				label: 'Shop eröffnen'
			}
		},
		{
			title: 'Apps',
			description:
				'Wir optimieren Webseiten für Suchmaschinen, damit sie besser gefunden werden und mehr Besucher anziehen. Oder Design Systeme.',
			cta: {
				href: '/start/app',
				label: 'App erstellen'
			}
		},
		{
			title: 'Individuell',
			description:
				'Wir erstellen Inhalte, die Ihre Zielgruppe ansprechen und überzeugen, sei es Text, Bild oder Video.',
			cta: {
				href: '/start/custom',
				label: 'Anfragen'
			}
		}
	];
</script>

<section class="section">
	<div id="services" class="nc-box inner-section">
		<h2 class="section-title">Das können wir sehr gut</h2>
		<div class="container">
			{#each services as { title, description, cta }}
				<div class="nc-stack item">
					<div class="nc-stack">
						<h3>{title}</h3>
						<p>{description}</p>
					</div>
					<SecondaryCtaButton href={cta.href}>{cta.label}</SecondaryCtaButton>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="postcss">
	.inner-section {
		display: flex;
		column-gap: var(--spacing-adaptive);
		row-gap: var(--spacing-far);
		flex-wrap: wrap;
		justify-content: space-between;
		inline-size: 100%;
	}

	.container {
		display: flex;
		column-gap: var(--spacing-adaptive);
		row-gap: max(calc(var(--spacing-adaptive) * 1.5), var(--spacing-far));
		flex-wrap: wrap;
		justify-content: space-between;
		inline-size: 100%;
	}

	h2 {
		max-inline-size: 9ch;
	}

	.container {
		flex: 1 1 calc(42ch * 2 + var(--spacing-far));
		max-inline-size: calc(52ch * 2 + var(--spacing-far));
		align-self: end;
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-far);
		row-gap: var(--spacing-farthest);
		counter-reset: steps;

		@media (--sm-n-above) {
			row-gap: calc(var(--spacing-adaptive) * 1.5);
		}

		@media (--md-n-above) {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.item {
		--size: 6rem;

		position: relative;

		justify-content: space-between;
		counter-increment: steps;

		&::before {
			content: '0' counter(steps);
			display: none;
			position: absolute;
			font-size: var(--size);
			block-size: var(--size);
			font-weight: bold;
			color: var(--color-surface-subtle);
			inset: 0;
			z-index: -1;
			line-height: 1;
		}

		@media (--sm-n-above) {
			--size: 10rem;

			padding-block-start: calc(var(--size) * 0.36);
			padding-inline-start: calc(var(--size) * 0.42);

			&::before {
				display: block;
				transform: translateY(-10%);
			}
		}
	}
</style>
