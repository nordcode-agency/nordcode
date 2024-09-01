<script lang="ts">
import RendererLayout from './RendererLayout.svelte';
import { rendererStore, finishQuestionnaire } from '../store/rendererStore.ts';
import AnswerDisplay from './AnswerDisplay.svelte';
</script>

<RendererLayout>
        {#snippet content()}
        <h1>{$rendererStore.questionnaire.title}</h1>
        <p>Danke, dass du mit gemacht hast</p>
        <p>Hier sind nochmal deine Antworten. Wenn du nicht zufrieden bist, kannst du sie nochmal überarbeiten</p>
        <AnswerDisplay></AnswerDisplay>
        {/snippet}
        {#snippet controls()}
        <button class="nc-button" type="button" onclick={finishQuestionnaire}>
            <span>Ich bin fertig</span>
        </button>
        {/snippet}
</RendererLayout>
