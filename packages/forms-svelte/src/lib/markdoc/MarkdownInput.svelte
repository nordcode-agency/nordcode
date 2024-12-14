<script lang="ts">
    import { convertToHtml } from './markdoc/convertToHtml.ts';
    import type { FormEventHandler } from 'svelte/elements';
    import type { MarkdownInputProps } from './types/MarkdownInputProps.ts';
    import { InputWrapper } from '../components/InputFields/index.ts';

    let {
        label,
        value = $bindable(),
        name = label.split(' ').join('').toLowerCase(),
        id = `${name}-label`,
        errors = [],
        hint = '',
        required = true,
        htmlOutput = $bindable(),
        children,
        oninput,
        ...rest
    }: MarkdownInputProps = $props();

    $effect(() => {
        if (value) {
            htmlOutput = convertToHtml(value);
        }
    });

    const handleInput: FormEventHandler<HTMLTextAreaElement> = event => {
        // in here, you can switch on type and implement
        // whatever behaviour you need
        const target = event.target as HTMLInputElement;
        value = target.value;
        oninput?.(event);
    };
</script>

<InputWrapper {id} {label} {required} {errors} {hint}>
    <textarea
        class="nc-input nc-markdown-input"
        {id}
        {name}
        {required}
        {value}
        oninput={handleInput}
    ></textarea>
    {@render children?.()}
</InputWrapper>

<style>
    .nc-markdown-input {
        min-block-size: var(--nc-markdown-min-block-size, 8lh);
    }
</style>
