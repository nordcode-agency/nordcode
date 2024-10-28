<script lang="ts">
import Hero from '$lib/modules/common/components/Hero.svelte';
import Header from '$lib/modules/common/components/Header.svelte';
import type { PageData } from './$types';
import About from '$lib/modules/common/components/About.svelte';
import ProjectCard from '$lib/modules/common/components/ProjectCard.svelte';
import ThreeScene from '$lib/modules/common/components/ThreeScene.svelte';
import Services from '$lib/modules/common/components/Services.svelte';
import LogoClipPath from '$lib/modules/common/components/LogoClipPath.svelte';
import FinalCTA from '$lib/modules/common/components/FinalCTA.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="nc-stack fullscreen">
	<Header />
	<ThreeScene />
	<Hero projects={data.projects} />
</div>
<section class="nc-box intro">
	<p class="heading-bg">
		Wir haben eine Leidenschaft für <span class="gradient-text">schönes Design</span> und eine
		<span class="gradient-text">tolle User Experience</span>. Diese Leidenschaft nutzen wir, um
		ein Erlebnis für deine Nutzer zu schaffen, dass funktioniert.
		<span aria-hidden="true" role="presentation" class="intro-icon">
			<LogoClipPath />
		</span>
	</p>
</section>
<section id="work" class="nc-box nc-stack -inherit -stretched work">
	<div>
		<ProjectCard
			heading={data.projects[4].heading}
			subheading={data.projects[4].subheading}
			cover={data.projects[4].cover}
			slug={data.projects[4].slug}
			name={data.projects[4].name}
		/>
	</div>
	<div class="more-work nc-ram-grid -inherit">
		<ProjectCard
			heading={data.projects[2].heading}
			subheading={data.projects[2].subheading}
			cover={data.projects[2].cover}
			slug={data.projects[2].slug}
			name={data.projects[2].name}
		/>
		<ProjectCard
			heading={data.projects[3].heading}
			subheading={data.projects[3].subheading}
			cover={data.projects[3].cover}
			slug={data.projects[3].slug}
			name={data.projects[3].name}
		/>
	</div>
</section>
<Services />
<About />
<FinalCTA />

<style lang="postcss">
	.fullscreen {
		position: relative;
		min-block-size: 100dvh;
	}

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
		min-block-size: 50dvh;
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

	.work {
		--stack-gap: var(--spacing-adaptive);
	}

	.more-work {
		--nc-ram-grid-min-width: calc(25 * var(--spacing-base));
		--nc-ram-grid-gap: var(--stack-gap);

		inline-size: 100%;
	}
</style>
