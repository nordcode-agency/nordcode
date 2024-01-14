export type AdapterMapFn<T> = (color: [string, string]) => [string, T];

export const rawAdapter: AdapterMapFn<string> = ([variant, value]) => [variant, value];
