import type { GenericInputProps } from './types/GenericInputProps.ts';
type $$ComponentProps = Omit<GenericInputProps, 'type' | 'value'> & {
    maxSizeInBytes?: number;
    value: string | undefined;
};
declare const ImageInput: import("svelte").Component<$$ComponentProps, {}, "value">;
type ImageInput = ReturnType<typeof ImageInput>;
export default ImageInput;
