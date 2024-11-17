<script lang="ts">
	import About from '$lib/modules/common/components/About.svelte';
	import FinalCTA from '$lib/modules/common/components/FinalCTA.svelte';
	import Header from '$lib/modules/common/components/Header.svelte';
	import Hero from '$lib/modules/common/components/Hero.svelte';
	import LogoClipPath from '$lib/modules/common/components/LogoClipPath.svelte';
	import ProjectCard from '$lib/modules/common/components/ProjectCard.svelte';
	import Services from '$lib/modules/common/components/Services.svelte';
	import ThreeScene from '$lib/modules/common/components/ThreeScene.svelte';
	import Meta from '$lib/modules/common/components/Meta.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<Meta
	title="Willkommen bei nordcode | nordcode"
	description="Du bist auf der Suche nach einer kleinen, lokalen Agentur, die dir hilft, deine Onlinepräsenz zu verbessern? Dann bist du bei uns genau richtig."
></Meta>

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
<section id="work" class="nc-box nc-stack -stretched work">
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
<div class="nc-box">
	<FinalCTA />
</div>

<style lang="postcss">
	.fullscreen {
		position: relative;
		min-block-size: 100vh;
		background: linear-gradient(transparent 60%, var(--color-surface-muted));
		overflow: hidden;
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
		gap: var(--spacing-adaptive);
	}

	.more-work {
		--nc-ram-grid-min-width: calc(25 * var(--spacing-base));

		inline-size: 100%;
	}
</style>
