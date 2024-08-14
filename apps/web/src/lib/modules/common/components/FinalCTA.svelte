<script>
	import LogoClipPath from './LogoClipPath.svelte';
	const logoLength = 7;
</script>

<!-- style={`transform: scale(${1 + idx * 1.3}) rotate(${(idx + 1) * 6}deg);`} -->

<section class="nc-box nc-pile">
	<div class="container nc-card">
		<div class="nc-pile pile">
			<div class="bg nc-pile">
				{#each Array.from({ length: logoLength }) as _item, idx}
					<div
						class="bg-logo"
						data-idx={idx}
						style={`--scale: ${2 + idx * 1.3}; --finalRotation: ${(idx + 1) * 6}deg;`}
					>
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
		--card-border-color: transparent;
		--shadow-color: color-mix(in oklch, var(--color-surface-subtle), transparent 34%);

		max-inline-size: 1400px;
		block-size: 60vh;
		padding: 0;
		background-color: var(--color-surface-muted);
		box-shadow: 0px 0.2px 0.2px var(--shadow-color), 0px 1.1px 1.2px -0.4px var(--shadow-color),
			0px 2.1px 2.4px -0.7px var(--shadow-color), 0px 3.4px 3.8px -1.1px var(--shadow-color),
			0px 5.4px 6.1px -1.4px var(--shadow-color), 0px 8.5px 9.6px -1.8px var(--shadow-color),
			0px 12.9px 14.5px -2.1px var(--shadow-color), 0px 19px 21.4px -2.5px var(--shadow-color);
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

    @keyframes rotateLogo {
        from {
            transform: rotate(0deg) scale(var(--scale));
        }
        to {
            transform: rotate(var(--finalRotation)) scale(var(--scale));
        }
    }

	.bg-logo {
		/* inline-size: 35vmin;
        block-size: 35vmin; */
		inline-size: 20vw;
		block-size: 20vw;
		clip-path: url(#logo-clip);
		background-image: radial-gradient(
			in oklch,
			color-mix(in oklch, var(--color-brand-primary-emphasis), transparent 80%),
			color-mix(in oklch, var(--color-brand-secondary-emphasis), transparent 80%)
		);
        transform: rotate(var(--finalRotation)) scale(var(--scale));
        animation: rotateLogo linear both;
        /* animation-timeline: view(block); */
        /* animation-range: cover 0% cover 100%; */
        animation-duration: 1ms; /* Firefox requires this to apply the animation */
        animation-timeline: --bodyTimeline;
        animation-range: 90% 100%;
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
				box-shadow: 0 0 30px 10px
					color-mix(in oklch, var(--color-brand-secondary-base), transparent 60%);
				animation-delay: -3s;
			}

			&:nth-child(2) {
				background: #0000ff;
				box-shadow: 0 0 30px 10px
					color-mix(in oklch, var(--color-brand-primary-base), transparent 60%);
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
			background: color-mix(in oklch, var(--color-surface-base), transparent 50%);
			backdrop-filter: blur(100px);
			box-shadow: 0 0 20px 5px color-mix(in oklch, var(--color-surface-base), transparent 60%);
			border-radius: 5%;
		}
	}

	.finalCTA {
		& a {
			color: var(--color-text-on-emphasis);
			font-weight: normal;
			font-size: calc(var(--font-size-largest) * 1.5);
		}
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
