import type { Snippet } from 'svelte';
import type { HTMLTextareaAttributes } from 'svelte/elements';
import type { InputLabelProps } from './types/InputLabelProps.ts';
interface TextAreaProps extends InputLabelProps, Omit<HTMLTextareaAttributes, 'id' | 'name' | 'required'> {
    splitLines?: boolean;
    value?: string | string[];
    children?: Snippet;
}
declare const TextArea: import("svelte").Component<TextAreaProps, {}, "value">;
type TextArea = ReturnType<typeof TextArea>;
export default TextArea;
