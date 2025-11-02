import type { GenericInputProps } from './types/GenericInputProps.ts';
interface CheckboxInputProps extends GenericInputProps {
    label: string;
    checked: boolean;
}
declare const CheckboxInput: import("svelte").Component<CheckboxInputProps, {}, "checked">;
type CheckboxInput = ReturnType<typeof CheckboxInput>;
export default CheckboxInput;
