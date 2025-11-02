<script lang="ts">
import { Input, TextArea } from '@nordcode/forms-svelte';
import type { Option } from '@nordcode/questionnaire-renderer';

import Trash from '../../common/components/icons/Trash.svelte';
import { createNewOption } from '../editorStore';

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

<fieldset class="nc-fieldset" style="inline-size: 100%">
    <legend class="nc-legend">
        <h2>Optionen</h2>
    </legend>
    <p class="nc-hint">Füge Optionen für die Frage hinzu.</p>
    <div class="nc-stack -stretched -contained">
        {#each options as option (option.id)}
            <div class="nc-cluster -between nc-box -bordered | options-row">
                <div class="nc-stack">
                    <Input
                        name={`option-${option.id}-title`}
                        label="Titel"
                        id={`option-${option.id}-title`}
                        bind:value={option.title}
                    />

                    <Input
                        name={`option-${option.id}-value`}
                        label="Wert"
                        id={`option-${option.id}-value`}
                        bind:value={option.value}
                    />
                    <div class="options-desc">
                        <TextArea
                            name={`option-${option.id}-description`}
                            label="Beschreibung"
                            id={`option-${option.id}-description`}
                            required={false}
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
        <button class="nc-button -outline -primary -small" type="button" onclick={addOption}>
            Option hinzufügen
        </button>
    </div>
</fieldset>

<style>
.options-row {
    inline-size: 100%;
    border-style: dashed;
}

.options-desc {
    grid-column: 1 / 3;
    --input-field-max-inline-size: calc(40ch * 2 + var(--spacing-base));
}
</style>
