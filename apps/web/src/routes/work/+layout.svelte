<script lang="ts">
	import { page } from '$app/stores';
	import Breadcrumbs from '$lib/modules/common/components/Breadcrumbs.svelte';
	import FinalCTA from '$lib/modules/common/components/FinalCTA.svelte';
	import Header from '$lib/modules/common/components/Header.svelte';
	import type { Breadcrumb } from '$lib/types/Breadcrumb';
	import Meta from '$lib/modules/common/components/Meta.svelte';

	let { children } = $props();

	const breadcrumbItems: Breadcrumb[] = [
		{
			name: 'Work',
			url: '/#work'
		},
		{
			name: $page.data?.heading,
			url: $page.data?.url?.toString() ?? ''
		}
	];

	$effect(() => {
		return () => {
			document.documentElement.style.removeProperty('--h-brand-primary');
			document.documentElement.style.removeProperty('--h-brand-secondary');
		};
	});
</script>

<Meta title={`${$page.data.heading} | nordcode`} description={$page.data.goal}></Meta>

<Header />

<article class="section nc-box" style="--h-brand-primary: {$page.data.hue.light}">
	<div class="nc-stack">
		<div class="nc-box nc-stack -inherit hero">
			<Breadcrumbs items={breadcrumbItems} />
			<header class="header">
				<figure
					class="thumbnail"
					style={`view-transition-name: ${$page.data.name}`}
				>
					<enhanced:img
						class="img"
						src={$page.data.cover?.src}
						alt={$page.data.cover?.alt}
					/>
				</figure>
				<div class="nc-stack">
					<div class="headings">
						<span class="subheading slide-up-from">{$page.data.subheading}</span>
						<h1 class="gradient-text slide-up-from">{$page.data.heading}</h1>
					</div>
				</div>
			</header>
		</div>
		<div class="nc-center main slide-up-from">
			<aside class="side">
				<div class="nc-stack overview">
					<p class="font-size-large">
						<strong>
							{$page.data.goal}
						</strong>
					</p>
					{#if $page.data.tags}
						<ul class="tags">
							{#each $page.data.tags as tag}
								<li class="nc-slub tag">{tag}</li>
							{/each}
						</ul>
					{/if}
					{#if $page.data.url}
						<div class="actions">
							<a href={$page.data.url} target="_blank">{$page.data.url}</a>
						</div>
					{/if}
				</div>
			</aside>
			<div class="body nc-flow styled-base-text">
				{@render children?.()}
				<section class="nc-region">
					<FinalCTA />
				</section>
			</div>
		</div>
	</div>
</article>

<style lang="postcss">
    @custom-media --md-n-above (width >= 768px);
    @custom-media --xl-n-above (width >= 1440px);

    .header {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-far);

        @media (--md-n-above) {
            flex-direction: row;
        }
    }
	.thumbnail {
		view-transition-name: work-figure;
        flex-basis: min(28ch, 40vw);
        aspect-ratio: 5/4;
		margin: 0;

        & > * {
            inline-size: 100%;
            block-size: 100%;
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
		max-inline-size: 100%;

		& h1 {
			animation: var(--animation-slide-up) 0.2s;
			font-size: calc(var(--font-size-display) * 0.8);
			text-wrap: pretty;
			max-inline-size: min(100%, 24ch);
			hyphens: auto;
			line-height: var(--line-height-small);

			@media (--md-n-above) {
				font-size: var(--font-size-display);
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
	}

	.main {
		--with-sidebar-target-width: 32ch;
		--with-sidebar-min-size: 60%;

        padding-inline: 0;
        margin-inline-start: 0;
		animation: var(--animation-slide-up) 0.4s;
        display: flex;
        gap: var(--spacing-farthest);

        @media (--xl-n-above) {
            margin-inline-start: auto;
        }
	}

	article {
		padding-block-start: 0;
		color: var(--color-text-muted);
	}

	.body {
		flex: 3;
	}

	.side {
		flex: 1;
	}

	.overview {
		position: sticky;
		top: calc(var(--spacing-adaptive) / 2);
	}

	.actions {
		padding-block: var(--spacing-base);
	}

	figure {
		--flow-gap: var(--spacing-far);

		margin-block: var(--flow-gap);
		min-block-size: 0;
		overflow: hidden;
	}

	.img {
		/* aspect-ratio: 16/9; */
		inline-size: 100%;
		block-size: 100%;
		object-fit: cover;
		border-radius: var(--border-radius-large);
		overflow: hidden;
	}

	.tags {
		padding-inline-start: 0;
	}

	.tag {
		padding-inline-start: 0;
		display: flex;
		line-height: var(--line-height-small);

		&::before {
			content: '—';
			margin-inline-end: 1ch;
		}
	}
</style>
