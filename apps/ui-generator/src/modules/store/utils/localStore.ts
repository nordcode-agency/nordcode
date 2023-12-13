// taken from: https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores#implementing_our_custom_to-dos_store
import { writable } from 'svelte/store';

const Noop = () => {};
export const localStore = <T>(key: string, initial: T) => {
    // receives the key of the local storage and an initial value

    const stringify = (value: T) => JSON.stringify(value, null, 2); // helper function
    const toObj = JSON.parse; // helper function

    if (localStorage.getItem(key) === null) {
        // item not present in local storage
        localStorage.setItem(key, stringify(initial)); // initialize local storage with initial value
    }

    const saved = toObj(localStorage.getItem(key) ?? ''); // convert to object

    const { subscribe, set, update } = writable(saved); // create the underlying writable store

    return {
        subscribe,
        set: (value: T) => {
            localStorage.setItem(key, stringify(value)); // save also to local storage as a string
            return set(value);
        },
        // update,
        update: (updateFn: (state: T) => T) => {
            const updated = updateFn(saved);
            localStorage.setItem(key, stringify(updated));
            return update(updateFn);
        },
        exportToString: () => stringify(saved),
        exportToJson: () => saved,
        import: (valueString: string) => {
            const value = toObj(valueString);
            return set(value);
        },
        reset: () => {
            localStorage.setItem(key, stringify(initial));
            return set(initial);
        },
    };
};
