<script lang="ts">
	import imgPerson1 from '$lib/assets/person1.jpg?enhanced';
	import imgPerson2 from '$lib/assets/person2.jpg?enhanced';
</script>

<section class="section">
	<div id="about" class="container nc-box nc-stack">
		<div
			class="nc-ram-grid"
			style="--nc-ram-grid-gap: var(--spacing-adaptive); --nc-ram-grid-min-width: 32ch;"
		>
			<div class="images">
				<figure>
					<enhanced:img src={imgPerson1} alt="Joshua" sizes="min(32ch, 100vw)" />
				</figure>
				<figure>
					<enhanced:img src={imgPerson2} alt="Lukas" sizes="min(32ch, 100vw)" />
				</figure>
			</div>
			<div class="content">
				<div class="nc-flow">
					<h2 class="section-title heading-bg">Wer ist nordcode?</h2>
					<p>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
						eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
						voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
						clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
						amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
						diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
						clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
						amet.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.container {
		inline-size: 100%;
		min-block-size: 100dvh;
		display: grid;
		place-items: center;
	}

	.nc-flow,
	figure {
		@media (--md-n-above) {
			flex-wrap: nowrap;
		}
	}

	.images {
		display: flex;
		gap: var(--spacing-base);
		justify-content: center;
	}

	figure {
		flex-basis: 32ch;
		display: grid;
		place-items: center;
		aspect-ratio: 4/5;
		inline-size: min(calc(var(--spacing-farthest) * 4), 100%);
		border-radius: calc(var(--border-radius-large) * 1);
		overflow: hidden;

		@media (--md-n-above) {
			border-radius: calc(var(--border-radius-large) * 2);
		}

		@media (--lg-n-above) {
			margin-block-end: var(--spacing-farthest);

			&:last-of-type {
				transform: translateY(var(--spacing-farthest));
			}
		}
	}

	.content {
		flex-shrink: 0;
		inline-size: 100%;
	}

	.nc-flow {
		inline-size: 100%;

		@media (--lg-n-above) {
			inline-size: min(48ch, 100%);
		}
		margin-inline: auto;
	}
</style>
