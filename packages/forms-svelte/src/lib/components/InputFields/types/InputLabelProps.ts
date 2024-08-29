import type { Snippet } from 'svelte';

export interface InputLabelProps {
    id: string;
    label: string;
    errors?: string[];
    hint?: string;
    optional?: boolean;
    children?: Snippet;
}
