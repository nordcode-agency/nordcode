import type { HTMLInputAttributes } from 'svelte/elements';
import type { InputLabelProps } from './InputLabelProps.ts';

export interface GenericInputProps
    extends InputLabelProps,
    Omit<HTMLInputAttributes, 'id' | 'checked' | "required"> {
    id?: string;
    name?: string;
    type?: string;
    value?: unknown;
}
