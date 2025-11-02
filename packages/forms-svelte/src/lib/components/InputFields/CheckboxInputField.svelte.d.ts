import type { Option } from '../../shared/models/Option.ts';
import type { GenericInputProps } from './types/GenericInputProps.ts';
interface CheckboxInputFieldProps extends GenericInputProps {
    options: Option[];
    value?: (number | string | boolean)[];
}
declare const CheckboxInputField: import("svelte").Component<CheckboxInputFieldProps, {}, "value">;
type CheckboxInputField = ReturnType<typeof CheckboxInputField>;
export default CheckboxInputField;
