<script lang="ts">
    import type { FormEventHandler, HTMLTextareaAttributes } from 'svelte/elements';
    import InputWrapper from './InputWrapper.svelte';
    import type { Snippet } from 'svelte';
    import type { InputLabelProps } from './types/InputLabelProps.ts';

    interface TextAreaProps
        extends InputLabelProps,
            Omit<HTMLTextareaAttributes, 'id' | 'name' | 'required'> {
        splitLines?: boolean;
        value?: string | string[];
        children?: Snippet;
    }

    let {
        label,
        name = label.split(' ').join('').toLowerCase(),
        id = `${name}-label`,
        errors = [],
        hint = '',
        required = true,
        autocomplete = 'off',
        splitLines = false,
        value = $bindable(),
        children,
        class: className,
        ...rest
    }: TextAreaProps = $props();

    const handleInput: FormEventHandler<HTMLTextAreaElement> = event => {
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

<InputWrapper {id} {label} {required} {errors} {hint}>
    <textarea
        class={`nc-input nc-textarea | ${className}`}
        {id}
        {name}
        value={splitLines && Array.isArray(value) ? value?.join('\n') : value}
        oninput={handleInput}
        {required}
        {...rest}
    ></textarea>
    {@render children?.()}
</InputWrapper>
