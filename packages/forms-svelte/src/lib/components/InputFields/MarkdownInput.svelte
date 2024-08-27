<script lang="ts">
import Markdoc from '@markdoc/markdoc';
import InputWrapper from './InputWrapper.svelte';
import type { FormEventHandler } from 'svelte/elements';
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

export let label: string;
export let name: string;
export let id: string;
export let errors: string[] = [];
export let hint = '';
export let optional = false;

export let value = '';

export let htmlOutput = '';

const convertToHtml = (v: string): string => {
    const ast = Markdoc.parse(v);
    const content = Markdoc.transform(ast);
    return Markdoc.renderers.html(content);
};

$: htmlOutput = convertToHtml(value);

const handleInput: FormEventHandler<HTMLTextAreaElement> = (event) => {
    // in here, you can switch on type and implement
    // whatever behaviour you need
    const target = event.target as HTMLInputElement;
    value = target.value;
    dispatch('input', { value });
};
</script>

<style>
    .nc-markdown-input {
        min-block-size: var(--nc-markdown-min-block-size, 4lh);
    }
</style>

<InputWrapper {id} {label} {optional} {errors} {hint}>
    <textarea class="nc-input nc-markdown-input" id={id}
              name={name}
              aria-required={!optional}
              value={value}
              on:input={handleInput}
    ></textarea>
    <slot></slot>
</InputWrapper>
