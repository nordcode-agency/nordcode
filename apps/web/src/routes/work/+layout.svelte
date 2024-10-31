<script lang="ts">
import { page } from '$app/stores';
import Breadcrumbs from '$lib/modules/common/components/Breadcrumbs.svelte';
import Header from '$lib/modules/common/components/Header.svelte';
import type { Breadcrumb } from '$lib/types/Breadcrumb';
/**
 * @typedef {Object} Props
 * @property {import('svelte').Snippet} [children]
 */

/** @type {Props} */
let { children } = $props();

const breadcrumbItems: Breadcrumb[] = [
    {
        name: 'Work',
        url: '/#work',
    },
    {
        name: $page.data?.heading,
        url: $page.data?.url?.toString() ?? '',
    },
];

// $effect(() => {
// 	document.documentElement.style.setProperty('--h-brand-primary', $page.data.hue.light);
// });

// const { heading, subheading, cover, name, url, goal, colorPalette, tags } = data;
</script>

<Header />

<svelte:head>
	<title>{$page.data.heading} - nordcode</title>
</svelte:head>

<article class="nc-box" style="--h-brand-primary: {$page.data.hue.light}">
	<div class="nc-stack">
		<div class="nc-box nc-stack -inherit hero">
			<Breadcrumbs items={breadcrumbItems} />
			<div class="nc-with-sidebar">
				<figure
					class="thumbnail"
					style={`view-transition-name: ${$page.data.name}`}
					data-aside
				>
					<enhanced:img
						class="img"
						src={$page.data.cover?.src}
						alt={$page.data.cover?.alt}
					/>
				</figure>
				<div class="nc-stack" data-grow>
					<div class="headings">
						<span class="subheading slide-up-from">{$page.data.subheading}</span>
						<h1 class="gradient-text slide-up-from">{$page.data.heading}</h1>
					</div>
					{#if $page.data.tags}
						<div class="nc-cluster -near | tags">
							{#each $page.data.tags as tag}
								<span class="nc-slub tag">{tag}</span>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
		<div class="main slide-up-from">
			<div class="side">
				<p class="tldr">
					<strong>
						{$page.data.goal}
					</strong>
				</p>
				{#if $page.data.url}
					<div class="actions">
						<a href={$page.data.url} target="_blank" class="nc-button -outline info"
							>Webseite besuchen</a
						>
					</div>
				{/if}
				{#if $page.data.colorPalette}
					<div class="nc-stack -nogap">
						<div class="nc-cluster -nogap -centered">
							<small class="nc-input-label" style="margin-inline-end: 1ch"
								>Hell:</small
							>
							{#each $page.data.colorPalette.light as color}
								<div
									style={`background-color: ${color}; aspect-ratio: 1/1; inline-size: 3ex`}
								></div>
							{/each}
						</div>
						<div class="nc-cluster -nogap -centered">
							<small class="nc-input-label" style="margin-inline-end: 1ch"
								>Dunkel:</small
							>
							{#each $page.data.colorPalette.dark as color}
								<div
									style={`background-color: ${color}; aspect-ratio: 1/1; inline-size: 3ex`}
								></div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
			<div class="body nc-flow">
				{@render children?.()}
			</div>
		</div>
	</div>
</article>

<style lang="postcss">
	.thumbnail {
		view-transition-name: work-figure;
		inline-size: 100%;
		aspect-ratio: 3/2;
		margin: 0;

		@media (--md-n-above) {
			flex-basis: 20ch;
			aspect-ratio: 1/1;
		}
	}

	@keyframes slide-up {
		to {
			transform: translateY(0%);
			opacity: 1;
		}
	}

	.headings {
		/* view-transition-name: work-headings; */

		& h1 {
			animation: var(--animation-slide-up) 0.2s;
			font-size: calc(var(--font-size-display) * 1.1);
			line-height: 1.3;

			@media (--md-n-above) {
				font-size: calc(var(--font-size-display) * 1.5);
			}
		}
	}

	.subheading {
		display: block;
		font-weight: var(--font-weight-bold);
		font-size: var(--font-size-large);
		color: var(--color-text-muted);
		animation: var(--animation-slide-up);
	}

	.hero {
		padding-inline: 0;

		@media (--md-n-above) {
			--stack-gap: var(--spacing-far);
		}

		@media (--lg-n-above) {
			padding-block-end: calc(var(--spacing-farthest) * 2);
		}
	}

	.main {
		animation: var(--animation-slide-up) 0.4s;
		display: grid;
		grid:
			'side' auto
			'main' auto
			/ 1fr;
		align-items: start;
		justify-items: start;
		gap: var(--spacing-far);

		@media (--lg-n-above) {
			grid:
				'side main' auto
				'side main' auto
				'.    main' auto
				/ 2fr 5fr;
		}
	}

	article {
		padding-block-start: 0;
		color: var(--color-text-muted);
	}

	.body {
		grid-area: main;
		max-inline-size: min(100%, var(--measure-base));
	}

	p,
	ul,
	li {
		font-size: var(--font-size-large);
		line-height: var(--line-height-base);
	}

	.full-width {
		inline-size: 100%;
		margin-block: var(--spacing-far);
	}

	.side {
		grid-area: side;

		@media (--lg-n-above) {
			position: sticky;
			top: calc(var(--spacing-adaptive) / 2);
		}
	}

	.actions {
		padding-block: var(--spacing-base);
	}

	.tldr {
		flex-grow: 1;
		flex-basis: 24ch;
		text-wrap: balance;
		font-size: var(--font-size-large);
		color: var(--color-text-base);
	}

	figure {
		--flow-gap: var(--spacing-far);

		margin-block: var(--flow-gap);
		min-block-size: 0;
		overflow: hidden;
	}
	.img,
	picture {
		/* aspect-ratio: 16/9; */
		inline-size: 100%;
		block-size: 100%;
		object-fit: cover;
		border-radius: var(--border-radius-large);
		overflow: hidden;
	}
</style>
