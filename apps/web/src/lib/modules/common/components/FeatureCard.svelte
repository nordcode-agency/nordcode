<script lang="ts" async>
import type { MediaImage } from '$lib/types/index';

export let heading: string;
export let subheading: string | undefined = undefined;
export let cover: MediaImage;
export let slug: string;
/** Used to perform view transitions */
export let id: string | undefined = undefined;
</script>

<div class="container">
	<a href={slug} class="nc-card card">
		<figure style={`view-transition-name: ${id}`}>
			<img src={cover.src} alt={cover.alt} />
		</figure>
		<div class="header">
			<div class="headings">
				{#if subheading}
					<span>{subheading}</span>
				{/if}
				<h2>{heading}</h2>
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
			oklch(var(--color-border-base-lch) / 0.03),
			oklch(var(--color-surface-base-lch) / 0.8)
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
					background: oklch(var(--color-surface-subtle-lch) / 0.9);
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
	}

	img {
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
