import type { FormEventHandler } from 'svelte/elements';
import type { InputLabelProps } from './InputLabelProps.ts';

export interface MarkdownInputProps extends InputLabelProps {
    label: string;
    value?: string;
    name: string;
    htmlOutput?: string;
    oninput?: FormEventHandler<HTMLTextAreaElement>;
}
