<script lang="ts">
import About from '$lib/modules/common/components/About.svelte';
import FinalCTA from '$lib/modules/common/components/FinalCTA.svelte';
import Header from '$lib/modules/common/components/Header.svelte';
import Hero from '$lib/modules/common/components/Hero.svelte';
import IntroSection from '$lib/modules/common/components/IntroSection.svelte';
import Meta from '$lib/modules/common/components/Meta.svelte';
import ServicesSection from '$lib/modules/common/components/ServicesSection.svelte';
import ThreeScene from '$lib/modules/common/components/ThreeScene.svelte';
import WorkSection from '$lib/modules/common/components/WorkSection.svelte';
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


    <div class="wrapper hero-wrapper">
        <div class="section nc-stack fullscreen">
            <Header />
            <Hero projects={data.projects} />
        </div>
        <ThreeScene />
    </div>

<ServicesSection />
<WorkSection projects={data.projects} />
<IntroSection />
<About />
<section class="section">
	<div class="nc-box">
		<FinalCTA />
	</div>
</section>

<style>
	.hero-wrapper {
		display: grid;
		position: relative;
		overflow: clip;
		inline-size: 100%;
		block-size: 100svh;
		background: linear-gradient(transparent 60%, var(--color-surface-muted));
	}

	.fullscreen {
		position: relative;
		inline-size: 100%;
		block-size: 100%;
		grid-area: 1 / 1;
	}
</style>
