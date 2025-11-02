import type { HTMLSelectAttributes } from 'svelte/elements';
import type { Option } from '../../shared/models/Option.ts';
import type { InputLabelProps } from './types/InputLabelProps.ts';
interface SelectProps extends InputLabelProps, Omit<HTMLSelectAttributes, 'id' | 'name' | 'required'> {
    options: Option[];
}
declare const Select: import("svelte").Component<SelectProps, {}, "value">;
type Select = ReturnType<typeof Select>;
export default Select;
