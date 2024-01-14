import type { ConfigStore } from '../configStore';
import { getColorTheme, getMappedColors } from './getColorTheme';
import type { AdapterMapFn } from './ThemeAdapters';

export const getFigmaTheme = (store: ConfigStore): Record<string, string> => {
    return getMappedColors(store, figmaAdapterFn);
};

const figmaAdapterFn: AdapterMapFn<string> = ([name, value]) => {
    const rgba = cssColorToRgba(`oklch(${value})`);

    return [name, rgba];
};

let canvas: HTMLCanvasElement | undefined = undefined;
let context: CanvasRenderingContext2D | null;

const getCanvasContext = () => {
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.width = canvas.height = 1;
    }

    if (!context) {
        context = canvas.getContext('2d', { willReadFrequently: true });
    }

    return context;
};

const cssColorToRgba = (colorString: string): string => {
    const ctx = getCanvasContext();

    if (!ctx) {
        return '';
    }

    ctx.fillStyle = colorString;
    ctx.fillRect(0, 0, 1, 1);
    const rgba = ctx.getImageData(0, 0, 1, 1).data;

    return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
};
