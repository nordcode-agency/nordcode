import type { FormEventHandler, HTMLTextareaAttributes } from 'svelte/elements';
import type { InputLabelProps } from './InputLabelProps.ts';

export interface MarkdownInputProps
    extends InputLabelProps, Omit<HTMLTextareaAttributes, "id" | "name" | "required"> {
    value?: string;
    htmlOutput?: string;
    oninput?: FormEventHandler<HTMLTextAreaElement>;
}
