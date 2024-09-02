<script lang="ts">
import Markdoc from '@markdoc/markdoc';
import InputWrapper from './InputWrapper.svelte';
import { convertToHtml } from '../../markdoc/convertToHtml.ts';
import type { FormEventHandler } from 'svelte/elements';
import type { MarkdownInputProps } from './types/MarkdownInputProps.ts';

let {
    label,
    value = $bindable(),
    name = label.split(' ').join('').toLowerCase(),
    id = `${name}-label`,
    errors = [],
    hint = '',
    optional = false,
    htmlOutput = $bindable(),
    children,
    oninput,
}: MarkdownInputProps = $props();

$effect(() => {
    if (value) {
        htmlOutput = convertToHtml(value);
    }
});

const handleInput: FormEventHandler<HTMLTextAreaElement> = (event) => {
    // in here, you can switch on type and implement
    // whatever behaviour you need
    const target = event.target as HTMLInputElement;
    value = target.value;
    oninput?.(event);
};
</script>

<style>
    .nc-markdown-input {
        min-block-size: var(--nc-markdown-min-block-size, 8lh);
    }
</style>

<InputWrapper {id} {label} {optional} {errors} {hint}>
    <textarea
            class="nc-input nc-markdown-input"
            id={id}
            name={name}
            required={optional ? false : true}
            value={value}
            oninput={handleInput}
    ></textarea>
    {@render children?.()}
</InputWrapper>
