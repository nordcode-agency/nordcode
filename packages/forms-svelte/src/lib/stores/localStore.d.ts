import { type Writable } from 'svelte/store';
export declare const localStore: <T>(key: string, initial: T) => Writable<T> & {
    hasStoredValue: boolean;
    exportToString: () => string;
    exportToJson: () => T;
    import: (valueString: string) => void;
    reset: () => void;
};
