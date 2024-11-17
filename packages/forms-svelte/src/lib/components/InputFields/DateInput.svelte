<script lang="ts">
    import type { FormEventHandler, HTMLInputAttributes } from 'svelte/elements';

    interface DateInputProps extends Omit<HTMLInputAttributes, 'name' | 'id'> {
        name: string;
        id: string;
        value: Date | undefined;
    }

    let {
        name,
        id,
        autocomplete,
        required = true,
        value = $bindable(),
        ...restProps
    }: DateInputProps = $props();

    const handleInput: FormEventHandler<HTMLInputElement> = event => {
        // in here, you can switch on type and implement
        // whatever behaviour you need
        const target = event.target as HTMLInputElement;

        value = new Date(target.value);
    };

    const formatDate = (date: Date) => {
        return date.toISOString().substring(0, 10);
    };

    const setToday = () => {
        value = new Date();
    };

    let internalValue = $derived(value ? formatDate(value) : '');
</script>

<div class="nc-cluster full-width nc-input-date">
    <input
        class="nc-input"
        {id}
        {name}
        type={'date'}
        value={internalValue}
        oninput={handleInput}
        {required}
        {...restProps}
    />
    <button type="button" class="nc-button" onclick={setToday}>Heute</button>
</div>
