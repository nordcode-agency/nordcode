<script lang="ts">
	import '../app.css';
	import Footer from '$lib/modules/common/components/Footer.svelte';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;

				const projectName = navigation.from?.params?.project;
				if (projectName) {
					const thumbEl = document.querySelector(
						`[href="/work/${projectName}"] figure`
					) as HTMLElement | null;
					if (thumbEl) {
						thumbEl.style.viewTransitionName = projectName;
					}
				}
			});
		});
	});
	
    interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<main>
	{@render children?.()}
</main>
<Footer />

<style>
	main {
		/* padding-block-start: 90px; equals <Navigation> block-size */
		min-block-size: 100dvh;
		block-size: 100%;
		position: relative;
		overflow: visible;
	}
</style>
