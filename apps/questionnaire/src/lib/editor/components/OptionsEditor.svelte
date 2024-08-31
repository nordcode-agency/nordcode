<script lang="ts">
import { Input } from '@nordcode/forms-svelte';
import type { Option } from '@nordcode/questionnaire-renderer';
import TextArea from '../../../../../../packages/forms-svelte/src/lib/components/InputFields/TextArea.svelte';
import { createNewOption } from '../editorStore';
import Trash from '../../common/components/icons/Trash.svelte';

interface OptionEditorProps {
    options: Option[];
}

let { options = $bindable() }: OptionEditorProps = $props();

const addOption = () => {
    const newOption = createNewOption();
    options = [...options, newOption];
};

const removeOption = (optionId: string) => {
    options = options.filter((option) => option.id !== optionId);
};
</script>

<fieldset class="nc-fieldset nc-stack -stretched -containted">
<legend>
    <h2>Optionen</h2>
</legend>
<fieldset class="nc-fieldset options-grid">
    {#each options as option (option.id)}
    <div class="nc-cluster -between nc-box -bordered | options-row">
    <div class="options-inputs">
    <Input
        name={`option-${option.id}-title`}
        label="Titel"
        id={`option-${option.id}-title`}
        bind:value={option.title} />

    <Input
        name={`option-${option.id}-value`}
        label="Wert"
        id={`option-${option.id}-value`}
        bind:value={option.value} />
    <div class="options-desc">
    <TextArea
        name={`option-${option.id}-description`}
        label="Beschreibung"
        id={`option-${option.id}-description`}
        bind:value={option.description}
        />
    </div>
        </div>
    <button class="nc-button -danger -outline" type="button" onclick={() => removeOption(option.id)}>
        <Trash></Trash>
        <span class="text-assistive">Option löschen</span>
    </button>
    </div>
    {/each}
</fieldset>


<button class="nc-button" type="button" onclick={addOption}>
    Option hinzufügen
</button>
</fieldset>

<style>
    .options-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--spacing-far);
        inline-size: 100%;

    }

    .options-row {
        inline-size: 100%;
        border-style: dashed;
    }

    .options-inputs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-base);
    }

    .options-desc {
        grid-column: 1 / 3;
        --input-field-max-inline-size: calc(40ch * 2 + var(--spacing-base));
    }
</style>
