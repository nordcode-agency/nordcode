<script lang="ts">
import { QuestionType } from '@nordcode/questionnaire-renderer';
import { NotAnswered } from '../../questionnaire/models/QuestionnaireAnswers.model.ts';
import { formatDate } from '../../questionnaire/utils/formatter.js';
import { goToQuestion, rendererStore } from '../store/rendererStore.ts';
</script>

<dl>
    {#each $rendererStore.answers as answer, idx}
        {#if answer.answer}
            <dt>{answer.question.title}</dt>
            <dd class="nc-cluster -between">
                <span style="max-inline-size: var(--measure-base)">
                    {#if answer.question.type === QuestionType.image && answer.answer !== NotAnswered}
                        <img src={answer.answer as string} alt="Vorschaubild" style="max-width: 12rem; height: auto" />
                    {:else if answer.question.type === QuestionType.date_time ||
                    answer.question.type === QuestionType.date}
                        {formatDate(answer.answer as string)}
                    {:else}
                        {answer.answer}
                    {/if}
                </span>
                <button
                    class="nc-button -primary -stealth -aligned"
                    onclick={() => {
                        goToQuestion(idx);
                        window.scrollTo(0, 0);
                    }}
                >
                    Bearbeiten
                </button>
            </dd>
        {/if}
    {/each}
</dl>
