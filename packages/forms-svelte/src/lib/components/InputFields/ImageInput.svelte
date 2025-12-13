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

const resizeOptions = {
    maxSizeInBytes: maxSizeInBytes || 1024 * 1024, // 1 MB default
    quality: 0.85,
};

async function resizeBase64Image(
    base64Image: string,
    options?: { maxSizeInBytes?: number; quality?: number },
): Promise<string> {
    const finalOptions = { ...resizeOptions, ...options };
    const format = base64Image.substring(5, base64Image.indexOf(';'));
    // data:image/jpeg;base64,
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = base64Image;
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const width = img.width;
            const height = img.height;
            const aspectRatio = width / height;
            const newWidth = Math.sqrt(finalOptions.maxSizeInBytes * aspectRatio);
            const newHeight = Math.sqrt(finalOptions.maxSizeInBytes / aspectRatio);
            canvas.width = newWidth;
            canvas.height = newHeight;
            ctx?.drawImage(img, 0, 0, newWidth, newHeight);
            const quality = finalOptions.quality;
            const dataURL = canvas.toDataURL(format, quality);
            resolve(dataURL);
        };
    });
}

const handleInput: FormEventHandler<HTMLInputElement> = async event => {
    // in here, you can switch on type and implement
    // whatever behaviour you need
    const target = event.target as HTMLInputElement;
    const file = target.files && target.files.length > 0 ? target.files[0] : undefined;

    if (!file) {
        value = undefined;
        return;
    }

    let base64Image = await toBase64(file);

    if (maxSizeInBytes && file.size > maxSizeInBytes) {
        base64Image = await resizeBase64Image(base64Image, {
            maxSizeInBytes,
        });
    }

    value = base64Image;
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
            aria-readonly={required}
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
