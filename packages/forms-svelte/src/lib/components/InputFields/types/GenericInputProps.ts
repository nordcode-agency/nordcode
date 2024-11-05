import type { HTMLAttributes } from 'svelte/elements';
import type { InputLabelProps } from './InputLabelProps.ts';

export interface GenericInputProps
    extends Omit<InputLabelProps, 'id'>,
        Omit<HTMLAttributes<HTMLInputElement>, 'id'> {
    id?: string;
    name?: string;
    autocomplete?: string;
    type?: string;
    value?: unknown;
}
