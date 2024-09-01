<script lang="ts">
import type { FormEventHandler } from 'svelte/elements';
import InputWrapper from './InputWrapper.svelte';
import type { Snippet } from 'svelte';

import type { GenericInputProps } from './types/GenericInputProps.ts';

interface TextAreaProps extends Omit<GenericInputProps, 'type'> {
    splitLines?: boolean;
    value?: string | string[];
}

let {
    label,
    name = label.split(' ').join('').toLowerCase(),
    id = `${name}-label`,
    errors = [],
    hint = '',
    optional = false,
    autocomplete = 'off',
    splitLines = false,
    value = $bindable(),
    children,
    ...rest
}: TextAreaProps = $props();

const handleInput: FormEventHandler<HTMLTextAreaElement> = (event) => {
    // in here, you can switch on type and implement
    // whatever behaviour you need
    const target = event.target as HTMLInputElement;
    if (splitLines) {
        value = target.value.split('\n');
        return;
    }

    value = target.value;
};
</script>

<InputWrapper {id} {label} {optional} {errors} {hint}>
    <textarea class="nc-input nc-textarea" id={id}
              name={name}
              value={splitLines && Array.isArray(value) ? value?.join("\n") : value}
              oninput={handleInput}
              required={optional ? false : true}
    ></textarea>
    {@render children?.()}
</InputWrapper>
