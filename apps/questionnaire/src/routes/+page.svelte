<script lang="ts">
import { Navigation } from '$lib/common/config/Navigation.js';
</script>

<svelte:head>
    <title>Nordcode Questionnaire</title>
</svelte:head>

<div class="nc-center page-center-layout">
    <h1>Questionnaires</h1>
    <ul>
        <li><a href={Navigation.editor.url}>{Navigation.editor.name}</a></li>
        <li><a href={Navigation.management.url}>{Navigation.management.name}</a></li>
    </ul>
</div>
