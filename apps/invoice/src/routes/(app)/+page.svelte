<script lang="ts">
import { Navigation } from '$lib/common/config/Navigation.js';
</script>

<svelte:head>
    <title>Nordcode Rechnungen</title>
</svelte:head>

<div class="nc-stack">
    <h1>Rechnungen Rechnungen</h1>
    <ul>
        <li><a href={Navigation.new.url}>{Navigation.new.name}</a></li>
        <li><a href={Navigation.list.url}>{Navigation.list.name}</a></li>
        <li><a href={Navigation.admin.url}>{Navigation.admin.name}</a></li>
    </ul>
</div>
