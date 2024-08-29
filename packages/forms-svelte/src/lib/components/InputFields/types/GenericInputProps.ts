import type { InputLabelProps } from './InputLabelProps.ts';

export interface GenericInputProps extends InputLabelProps {
    name?: string;
    autocomplete?: string;
    type: string;
    value: string | number | boolean | string[];
}
