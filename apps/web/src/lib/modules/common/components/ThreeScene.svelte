<script lang="ts">
	// import gsap from "gsap";
	import { onMount } from 'svelte';
    import { main } from '$lib/modules/common/components/threeScene';

	onMount(() => {
		main();
	});
</script>

<canvas id="c" />

<style lang="postcss">
	#c {
		display: block;
		inline-size: 100%;
		block-size: 80vh;
		outline: none;
	}
</style>
