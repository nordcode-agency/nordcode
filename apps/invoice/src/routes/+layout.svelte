<script lang="ts">
    import "../global.css";

    import { page } from "$app/stores";
</script>

<svelte:head>
    <title>{$page.data.title}</title>
    <meta name="description" content={$page.data.description} />
</svelte:head>

<slot />
