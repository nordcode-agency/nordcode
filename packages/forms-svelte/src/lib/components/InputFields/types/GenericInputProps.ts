import type { HTMLAttributes } from 'svelte/elements';
import type { InputLabelProps } from './InputLabelProps.ts';

export interface GenericInputProps
    extends InputLabelProps,
        Omit<HTMLAttributes<HTMLInputElement>, 'id'> {
    name?: string;
    autocomplete?: string;
    type?: string;
    value?: unknown;
}
