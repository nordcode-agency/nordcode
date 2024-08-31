<script lang="ts">
import { Navigation } from '../../common/config/Navigation';
import type { Question } from '@nordcode/questionnaire-renderer';
import { removeQuestion } from '../editorStore';

interface QuestionLinkProps {
    question: Question;
}

let { question }: QuestionLinkProps = $props();

const questionLink = Navigation.question.url.replace(':id', question.id);
</script>

<tr class="questionLink">
    <td>DragHandle</td>
    <td><a href={questionLink}>{question.title}</a></td>
    <td>{question.type}</td>
    <td>
    <button class="nc-button -small -destructive"
            type="button"
            onclick={() => removeQuestion(question.id)}>Frage
        löschen
    </button>
    </td>
</tr>
