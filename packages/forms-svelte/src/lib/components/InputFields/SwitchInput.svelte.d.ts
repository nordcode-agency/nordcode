import type { GenericInputProps } from './types/GenericInputProps.ts';
interface CheckboxInputProps extends GenericInputProps {
    label: string;
    checked: boolean;
}
declare const SwitchInput: import("svelte").Component<CheckboxInputProps, {}, "checked">;
type SwitchInput = ReturnType<typeof SwitchInput>;
export default SwitchInput;
