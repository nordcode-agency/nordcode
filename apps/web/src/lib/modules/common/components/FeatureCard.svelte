<script lang="ts" async>
	import type { MediaImage } from '$lib/types/index';
	import { ensureTrailingSlash } from '$lib/utils/ensureTrailingSlash';

	export let heading: string;
	export let subheading: string | undefined = undefined;
	export let cover: MediaImage;
	export let slug: string;
	/** Used to perform view transitions */
	export let id: string | undefined = undefined;
</script>

<div class="container">
	<a href={ensureTrailingSlash(slug)} class="nc-card card">
		<figure style={`view-transition-name: ${id}`}>
			<enhanced:img class="img" src={cover.src} alt={cover.alt} />
		</figure>
		<div class="header">
			<div class="headings">
				{#if subheading}
					<span>{subheading}</span>
				{/if}
				<h2 class="section-title">{heading}</h2>
			</div>
		</div>
	</a>
</div>

<style lang="postcss">
	.container {
		container-type: inline-size;
		inline-size: 100%;
	}
	.card {
		--card-padding-inline: 0px;
		--card-padding-block: 0px;

		display: grid;
		grid-template:
			[img-start full-start]
			auto
			[img-end header-start]
			1fr
			[header-end full-end]
			/ 1fr;
		background: linear-gradient(
			45deg,
			color-mix(in oklch, var(--color-border-base), transparent 97%),
			color-mix(in oklch, var(--color-surface-base), transparent 20%)
		);
		backdrop-filter: blur(var(--spacing-base));
		block-size: 100%;

		@container (min-inline-size: 360px) {
			& h2 {
				font-size: var(--font-size-large);
			}
		}

		@container (min-inline-size: 680px) {
			& {
				aspect-ratio: 16 / 9;

				& :is(figure, .img-placeholder) {
					grid-area: full;
				}

				& .header {
					display: grid;
					place-items: end;
					padding-block: var(--spacing-far);
				}

				& .headings {
					background: color-mix(in oklch, var(--color-surface-subtle), transparent 10%);
					backdrop-filter: blur(var(--spacing-base));
					padding-block: var(--spacing-base);
					padding-inline: var(--spacing-far);
					border-radius: var(--border-radius-large);
					box-shadow: var(--shadow-near);
				}
			}
		}

		@container (min-inline-size: 1024px) {
			& {
				aspect-ratio: 21 / 9;
			}
		}
	}

	figure {
		grid-area: img;
		overflow: hidden;
	}

	.img,
	picture {
		inline-size: 100%;
		aspect-ratio: 3 / 2;
		object-fit: cover;
		border-radius: var(--border-radius-small);
	}

	.header {
		grid-area: header;
		padding: var(--spacing-base);
	}

	h2 {
		font-size: var(--font-size-base);
		line-height: var(--line-height-base);
	}

	.headings {
		& span {
			color: var(--color-text-muted);
		}
	}
</style>
