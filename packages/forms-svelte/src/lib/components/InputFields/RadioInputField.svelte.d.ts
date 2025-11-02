import type { Option } from '../../shared/models/Option.ts';
import type { GenericInputProps } from './types/GenericInputProps.ts';
interface RadioInputFieldProps extends GenericInputProps {
    options: Option[];
    value?: number | string | boolean;
}
declare const RadioInputField: import("svelte").Component<RadioInputFieldProps, {}, "value">;
type RadioInputField = ReturnType<typeof RadioInputField>;
export default RadioInputField;
