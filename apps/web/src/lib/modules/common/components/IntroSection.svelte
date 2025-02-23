<script>
	import LogoClipPath from './LogoClipPath.svelte';
</script>

<section class="section nc-box intro">
	<p class="heading-bg prose">
		Wir haben eine Leidenschaft für <span class="gradient-text">schönes Design</span> und eine
		<span class="gradient-text">tolle User Experience</span>. Diese Leidenschaft nutzen wir, um
		ein Erlebnis für deine Nutzer zu schaffen, dass funktioniert.
		<span aria-hidden="true" role="presentation" class="intro-icon">
			<LogoClipPath />
		</span>
	</p>
</section>

<style>
    @custom-media --sm-n-above (width >= 480px);
    @custom-media --md-n-above (width >= 768px);
    @custom-media --lg-n-above (width >= 1024px);

	.intro-icon {
		display: block;
		inline-size: 100vw;
		block-size: 100vw;
		aspect-ratio: 1;
		position: absolute;
		inset-inline-start: 0;
		inset-block-start: 50%;
		transform: translate(-15%, -60%);
		background: linear-gradient(to bottom, var(--color-surface-subtle), transparent);
		z-index: -1;
		color: var(--color-surface-subtle);
		clip-path: url(#logo-clip);

		@media (--sm-n-above) {
			inline-size: 80vw;
			block-size: 80vw;
		}

		@media (--md-n-above) {
			inline-size: 60vw;
			block-size: 60vw;
		}

		@media (--lg-n-above) {
			inset-block-start: 0;
			transform: translate(-50%, -15.5%);
			inline-size: 10em;
			block-size: 10em;
		}
	}

	.intro {
		min-block-size: 50vh;
		display: flex;
		align-items: center;

		& p {
			--scaler: 1;
			max-inline-size: 40ch;
			margin-block: auto;
			margin: 0 auto;
			font-size: calc(var(--font-size-largest) * var(--scaler));
			padding-block: calc(var(--spacing-farthest) * var(--scaler));
			color: var(--color-text-base);

			@media (--sm-n-above) {
				--scaler: 1.2;
			}

			@media (--md-n-above) {
				--scaler: 1.5;
			}

			@media (--lg-n-above) {
				--scaler: 1.8;
			}
		}
	}
</style>
