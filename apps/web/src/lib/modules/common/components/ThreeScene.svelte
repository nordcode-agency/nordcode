<script lang="ts">
	import { main } from '$lib/modules/common/components/threeScene2';

	const init: import('svelte/action').Action = () => {
		main();
	};
</script>

<canvas class="webgl" use:init></canvas>

<style lang="postcss">
	.webgl {
		position: absolute;
		z-index: -1;
		content: '';
		top: 0;
		right: 0;
		display: block;
		inline-size: 60%;
		block-size: 100%;
		outline: none;
		background-color: var(--surface-color-default);
		filter: blur(3px);
	}
</style>
