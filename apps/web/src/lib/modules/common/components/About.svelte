<script lang="ts">
	import imgLukas from '$lib/assets/lukas-nordcode.jpg?enhanced';
	import imgJoshua from '$lib/assets/joshua-nordcode.jpg?enhanced';
</script>

<section class="section">
	<div id="about" class="container nc-box nc-stack">
		<div
			class="nc-ram-grid"
			style="--nc-ram-grid-gap: var(--spacing-adaptive); --nc-ram-grid-min-width: 44ch;"
		>
			<div class="images">
				<figure>
					<enhanced:img src={imgLukas} alt="" sizes="min(32ch, 100vw)" />
					<figcaption class="sr-only">Lukas von nordcode</figcaption>
				</figure>
				<figure>
					<enhanced:img src={imgJoshua} alt="" sizes="min(32ch, 100vw)" />
					<figcaption class="sr-only">Joshua von nordcode</figcaption>
				</figure>
			</div>
			<div class="content">
				<div class="nc-flow prose">
					<h2 class="section-title heading-bg">Das sind wir</h2>
					<p>
						Hi, wir sind <strong>Lukas</strong> und <strong>Joshua</strong>, zwei
						Frontend-Entwickler mit zusammen <strong>über 15 Jahren Erfahrung</strong>.
					</p>
					<p>
						Wir leben irgendwo im Norden von Deutschland und sind leidenschaftliche
						Webentwickler, mit verschiedenen Stärken und Schwächen und großer Lust,
						coole Projekte zu bauen.
					</p>
					<p>
						Unser Fokus liegt auf <strong>Web, das funktioniert</strong>. Barrierefrei,
						schnell und sicher muss es immer sein. Ein bisschen Freude soll es machen. Alles andere entscheidet das Projekt.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@custom-media --md-n-above (width >= 768px);
	@custom-media --lg-n-above (width >= 1024px);

	.container {
		inline-size: 100%;
		min-block-size: 100vh;
		display: grid;
		place-items: center;
		align-items: center;
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
        --img-offset: var(--spacing-farthest);

		flex-basis: 32ch;
		display: grid;
		place-items: center;
		inline-size: min(calc(var(--spacing-farthest) * 4), 100%);
		overflow: hidden;

		& img {
			aspect-ratio: 4/6;
			border-radius: calc(var(--border-radius-large) * 2);
			object-fit: cover;

			@media (--md-n-above) {
				border-radius: calc(var(--border-radius-large) * 2);
			}
		}

		&:last-of-type {
			transform: translateY(var(--img-offset));
		}

        margin-block-end: var(--spacing-farthest);
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
