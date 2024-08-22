<script lang="ts">
import { currentQuestionnaire } from '../../editor/editorStore';
</script>

{#if $currentQuestionnaire}
<footer class="nc-center page-center-layout">
    {JSON.stringify($currentQuestionnaire.questionnaire)}
</footer>
{/if}
