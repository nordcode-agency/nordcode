import type { GenericInputProps } from './types/GenericInputProps.ts';
interface DateTimeInputProps extends Omit<GenericInputProps, 'type'> {
    value: Date | undefined;
}
declare const DateTimeInput: import("svelte").Component<DateTimeInputProps, {}, "value">;
type DateTimeInput = ReturnType<typeof DateTimeInput>;
export default DateTimeInput;
