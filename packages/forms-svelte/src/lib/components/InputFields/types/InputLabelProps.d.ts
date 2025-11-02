import type { Snippet } from 'svelte';
export interface InputLabelProps {
    label: string;
    id?: string;
    name?: string;
    errors?: string[];
    hint?: string;
    required?: boolean;
    children?: Snippet;
}
