import type { HTMLInputAttributes } from 'svelte/elements';
interface DateInputProps extends Omit<HTMLInputAttributes, 'name' | 'id'> {
    name: string;
    id: string;
    value: Date | undefined;
}
declare const DateInput: import("svelte").Component<DateInputProps, {}, "value">;
type DateInput = ReturnType<typeof DateInput>;
export default DateInput;
