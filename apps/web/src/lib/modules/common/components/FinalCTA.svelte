<script>
	import SecondaryCtaButton from '$lib/modules/common/components/SecondaryCtaButton.svelte';
	import LogoClipPath from './LogoClipPath.svelte';
</script>

<section class="nc-box nc-pile">
	<div class="container">
		<div class="nc-pile pile">
			<div class="bg nc-pile">
				{#each Array.from({ length: 2 }) as _item, idx}
					<div class="bg-logo" data-idx={idx}>
						<LogoClipPath />
					</div>
				{/each}
			</div>
			<!-- <div class="colors nc-pile">
                <div />
                <div />
            </div>
            <div class="shaders">
                <div />
                <div />
                <div />
                <div />
                <div />
            </div> -->
			<div class="finalCTA">
				<a class="nc-button -stealth" href="/start">Jetzt loslegen</a>
			</div>
		</div>
	</div>
</section>

<style>
	.container {
		max-inline-size: 1400px;
		block-size: 60vh;
		padding: 0;
	}

	.pile {
		inline-size: 100%;
		block-size: 100%;
		/* overflow: hidden; */
	}
	section {
		perspective: 200px;
		inline-size: 100%;
	}

	.bg {
		inline-size: 100%;
		block-size: 100%;
		min-block-size: 0;
		min-inline-size: 0;
	}

	.bg-logo {
		/* inline-size: 35vmin;
        block-size: 35vmin; */
		inline-size: 30vw;
		block-size: 30vw;
		clip-path: url(#logo-clip);

		&:nth-of-type(1) {
			background-image: linear-gradient(
				to right in oklch,
				oklch(90% 0.5 200 / 0) 0%,
				oklch(70% 0.5 256) 50%,
				oklch(90% 0.5 200 / 0) 100%
			);
			/* transform: rotate(173deg); */
		}

		&:nth-of-type(2) {
			background-image: linear-gradient(
				to right in oklch,
				oklch(90% 0.5 200 / 0) 0%,
				oklch(70% 0.5 256) 50%,
				oklch(90% 0.5 200 / 0) 100%
			);
			transform: translateX(10%);
		}
	}

	.colors {
		display: grid;
		grid-template: 'pile' 1fr / 1fr;
		place-items: center;
		inline-size: 100%;
		block-size: 100%;
		max-block-size: inherit;

		& div {
			display: block;
			inline-size: 35vmin;
			aspect-ratio: 1;
			grid-area: pile;
			animation: spin infinite 20s linear;
			backface-visibility: hidden;
			border-radius: 5%;

			&:nth-child(1) {
				background: #00d5ff;
				box-shadow: 0 0 30px 10px oklch(var(--color-brand-secondary-base-lch) / 0.4);
				animation-delay: -3s;
			}

			&:nth-child(2) {
				background: #0000ff;
				box-shadow: 0 0 30px 10px oklch(var(--color-brand-primary-base-lch) / 0.4);
			}
		}
	}

	.shaders {
		transform: rotate(15deg);
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		inline-size: 100%;
		block-size: 100%;
		max-block-size: inherit;
		overflow: hidden;

		& div {
			display: block;
			aspect-ratio: 1 / 6;
			background: oklch(var(--color-surface-default-lch) / 0.5);
			backdrop-filter: blur(100px);
			box-shadow: 0 0 20px 5px oklch(var(--color-surface-default-lch) / 0.4);
			border-radius: 5%;
		}
	}

	.finalCTA {
		font-weight: lighter;
		font-size: calc(var(--font-size-largest) * 1.5);
		/* color: var(--color-text-default);
        background-color: var(--color-surface-default);
        border-radius: var(--border-radius-large); */
	}

	@keyframes spin {
		0%,
		100% {
			transform: translate3d(0, 0, 0);
		}

		25% {
			transform: translate3d(-15vw, -10dvh, -10vmin) rotateY(90deg) rotateX(90deg);
		}

		50% {
			transform: translate3d(-8vw, 15dvh, 15vmin) rotateY(180deg) rotateX(180deg);
		}

		75% {
			transform: translate3d(15vw, 8dvh, -10vmin) rotateY(270deg) rotateX(270deg);
		}
	}
</style>
