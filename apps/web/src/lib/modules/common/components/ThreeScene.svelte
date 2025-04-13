<script lang="ts">
	import { main } from '$lib/modules/common/components/threeScene2';

	const init: import('svelte/action').Action = () => {
		main();
	};
</script>

<canvas class="webgl" aria-hidden="true" use:init></canvas>

<style>
	.webgl {
        grid-area: 1 / 1;
		z-index: -1;
		content: '';
		top: 0;
		right: 0;
		display: block;
		inline-size: 60%;
        max-block-size: 100svh;
		outline: none;
		background-color: var(--surface-color-default);
		filter: blur(2px);
	}
</style>
