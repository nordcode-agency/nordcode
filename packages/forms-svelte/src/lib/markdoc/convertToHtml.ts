import Markdoc from '@markdoc/markdoc';
import { markdocTransformConfig } from './config.ts';

export const convertToHtml = (v: string): string => {
    const ast = Markdoc.parse(v);
    const content = Markdoc.transform(ast, markdocTransformConfig);
    return Markdoc.renderers.html(content);
};
