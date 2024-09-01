<script lang="ts">
import type { FormEventHandler } from 'svelte/elements';

interface DateInputProps {
    name: string;
    id: string;
    autocomplete?: string;
    optional?: boolean;
    value: Date;
}

let { name, id, autocomplete, optional = false, value = $bindable() }: DateInputProps = $props();

const handleInput: FormEventHandler<HTMLInputElement> = (event) => {
    // in here, you can switch on type and implement
    // whatever behaviour you need
    const target = event.target as HTMLInputElement;

    value = new Date(target.value);
};

const formatDate = (date: Date) => {
    return date.toISOString().substring(0, 10);
};

const formatForDate = (value: string | Date) => {
    const parsedDate = new Date(value);
    // Means it's invalid. Return a new one.
    if (parsedDate.toString() === 'Invalid Date') {
        return formatDate(new Date());
    }
    return formatDate(parsedDate);
};

const setToday = () => {
    value = new Date();
};

let internalValue = $derived(formatDate(value));
</script>

<div class="nc-cluster full-width nc-input-date">
<input class="nc-input"
       id={id}
       name={name}
       autocomplete={autocomplete}
       type={'date'}
       value={internalValue}
       oninput={handleInput}
       required={optional ? false : true}
>
<button type="button" class="nc-button" onclick={setToday}>
    Heute
</button>
</div>
