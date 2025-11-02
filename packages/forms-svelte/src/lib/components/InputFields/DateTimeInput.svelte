<script lang="ts">
import type { FormEventHandler, HTMLInputAttributes } from 'svelte/elements';
import InputWrapper from './InputWrapper.svelte';
import type { GenericInputProps } from './types/GenericInputProps.ts';

interface DateTimeInputProps extends Omit<GenericInputProps, 'type'> {
    value: Date | undefined;
}

let {
    name,
    id,
    autocomplete,
    required = true,
    value = $bindable<Date | undefined>(),
    class: className,
    label,
    errors = [],
    hint = '',
    ...rest
}: DateTimeInputProps = $props();

const handleDateInput: FormEventHandler<HTMLInputElement> = event => {
    const target = event.target as HTMLInputElement;

    console.log(target.value);
    value = new Date(target.value);
};

const formatDate = (date: Date) => {
    try {
        return new Date(date).toISOString();
    } catch {
        return '';
    }
};

let internalDate = $derived(value ? formatDate(value) : '');
</script>

<InputWrapper {id} {label} {name} {required} {errors} {hint}>
    <div class="nc-cluster full-width nc-input-date">
        <input
            class={`nc-input | ${className}`}
            {id}
            {name}
            type="datetime-local"
            value={value}
            {required}
            {...rest}
        />
    </div>
</InputWrapper>
