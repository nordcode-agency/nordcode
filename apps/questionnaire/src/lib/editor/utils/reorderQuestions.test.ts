import { describe, expect, it } from 'vitest';
import { reorderQuestions } from './reorderQuestions';

describe('reorderQuestions', () => {
    it('moves a question to the very beginning', () => {
        expect(reorderQuestions(['a', 'b', 'c', 'd'], 'd', 0)).toEqual(['d', 'a', 'b', 'c']);
    });

    it('moves a question to the very end', () => {
        expect(reorderQuestions(['a', 'b', 'c', 'd'], 'b', 4)).toEqual(['a', 'c', 'd', 'b']);
    });

    it('moves a question forward before the given index', () => {
        expect(reorderQuestions(['a', 'b', 'c', 'd'], 'a', 3)).toEqual(['b', 'c', 'a', 'd']);
    });

    it('moves a question backward before the given index', () => {
        expect(reorderQuestions(['a', 'b', 'c', 'd'], 'c', 1)).toEqual(['a', 'c', 'b', 'd']);
    });

    it('keeps the order when dropping a question onto its own position', () => {
        expect(reorderQuestions(['a', 'b', 'c'], 'b', 1)).toEqual(['a', 'b', 'c']);
        expect(reorderQuestions(['a', 'b', 'c'], 'b', 2)).toEqual(['a', 'b', 'c']);
    });

    it('keeps the order for an unknown question id', () => {
        expect(reorderQuestions(['a', 'b'], 'missing', 0)).toEqual(['a', 'b']);
    });
});
