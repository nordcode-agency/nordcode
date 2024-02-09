<script lang="ts" async>
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import type { MediaImage } from '$lib/types/index';
	import FeatureCard from './FeatureCard.svelte';

	export let heading: string;
	export let subheading: string | undefined = undefined;
	export let cover: MediaImage;
	export let slug: string;
	export let name: string;

	let vtName = '';
	beforeNavigate((navigation) => {
		const projectName = navigation?.to?.params?.project;
		if (projectName === name) {
			vtName = name;
		}
	});
	afterNavigate(() => {
		vtName = '';
	});
</script>

<FeatureCard {heading} {subheading} {cover} {slug} id={name} />
