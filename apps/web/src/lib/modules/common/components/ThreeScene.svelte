<script lang="ts">
	// import gsap from "gsap";
	import { onMount } from 'svelte';
    import { main } from '$lib/modules/common/components/threeScene2';

	onMount(() => {
		main();
	});
</script>

<canvas class="webgl"></canvas>

<style lang="postcss">
	.webgl {
        position: absolute;
        z-index: -1;
        content: "";
        top: 0;
        right: 0;
		display: block;
		inline-size: 60%;
		block-size: 100%;
		outline: none;
        background-color: var(--surface-color-default);
        filter: blur(10px);
	}
</style>
