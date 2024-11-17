// taken from: https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores#implementing_our_custom_to-dos_store
import { writable, get, Writable } from 'svelte/store';
import { BROWSER } from 'esm-env';

export const localStore = <T>(key: string, initial: T): Writable<T> & {
    hasStoredValue: boolean;
    exportToString: () => string;
    exportToJson: () => T;
    import: (valueString: string) => void;
    reset: () => void;
} => {
    const serialize = (value: T) => JSON.stringify(value, null, 2);
    const deserialize = (stringValue: string): T => JSON.parse(stringValue);

    let initialValue = initial;
    let hasStoredValue = false;

    if (BROWSER) {
        const item = localStorage.getItem(key);
        if (item) {
            initialValue = deserialize(item);
            hasStoredValue = true;
        }
    }

    const store = writable(initialValue);
    const { subscribe, set, update } = store;

    subscribe((current) => {
        if (BROWSER) {
            localStorage.setItem(key, serialize(current));
        }
    });

    return {
        subscribe,
        set,
        update,
        hasStoredValue,
        exportToString: () => {
            return serialize(get(store));
        },
        exportToJson: () => {
            return get(store);
        },
        import: (valueString: string) => {
            return set(deserialize(valueString));
        },
        reset: () => {
            return set(initial);
        },
    };
};
