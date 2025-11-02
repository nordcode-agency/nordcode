<script lang="ts">
import type { FormEventHandler } from 'svelte/elements';
import InputWrapper from './InputWrapper.svelte';
import type { GenericInputProps } from './types/GenericInputProps.ts';

let {
    label,
    name = label.split(' ').join('').toLowerCase(),
    id = `${name}-label`,
    errors = [],
    hint = '',
    required = true,
    value = $bindable(),
    class: className,
    maxSizeInBytes,
    ...rest
}: Omit<GenericInputProps, 'type' | 'value'> & {
    maxSizeInBytes?: number;
    value: string | undefined;
} = $props();

async function toBase64(file: File) {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
    });
}

const handleInput: FormEventHandler<HTMLInputElement> = event => {
    // in here, you can switch on type and implement
    // whatever behaviour you need
    const target = event.target as HTMLInputElement;
    const file = target.files && target.files.length > 0 ? target.files[0] : undefined;

    if (!file) {
        value = undefined;
        return;
    }

    if (maxSizeInBytes && file.size > maxSizeInBytes) {
        // @todo handle error properly
        console.error(`File size exceeds the maximum limit of ${maxSizeInBytes} bytes.`);
        value = undefined;
        return;
    }

    toBase64(file).then(base64 => {
        value = base64;
    });
};
</script>

<InputWrapper {id} {label} {name} {required} {errors} {hint}>
    <div class="nc-stack">
        <input
            class="nc-input nc-input-file | {className}"
            type="file"
            accept="image/*"
            multiple={false}
            {id}
            {name}
            {required}
            oninput={handleInput}
            {...rest}
        />
        {#if value && typeof value === 'string'}
            <div class="nc-stack -near">
                <span class="nc-input-label">Vorschau:</span>
                <img src={value} alt="Vorschaubild" style="max-width: 12rem; height: auto" />
            </div>
        {/if}
        <input type="hidden" id="{id}-base64" name="{name}-base64" value={value} />
    </div>
</InputWrapper>
