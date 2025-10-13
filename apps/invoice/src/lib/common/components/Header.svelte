<script>
import Logo from '$lib/common/components/Logo.svelte';
import ThemePicker from '$lib/common/components/ThemePicker.svelte';
</script>

<header class="nc-center page-center-layout">
    <Logo />
    <ThemePicker />
</header>

<style>
header {
    display: grid;
    place-items: center;
    padding-block: var(--spacing-far);
}
</style>
