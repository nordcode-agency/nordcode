<script lang="ts" async>
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import type { MediaImage } from '$lib/types/index';
	import FeatureCard from './FeatureCard.svelte';

	interface Props {
		heading: string;
		subheading?: string | undefined;
		cover: MediaImage;
		slug: string;
		name: string;
	}

	let { heading, subheading = undefined, cover, slug, name }: Props = $props();

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
