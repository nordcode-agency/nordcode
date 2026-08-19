import type { NextQuestionConfig } from '@nordcode/questionnaire-renderer';
import { describe, expect, it } from 'vitest';
import { setOptionJump, setUnconditionalJump } from './nextQuestionConfig';

const optionJump = (compareValue: string, questionId: string): NextQuestionConfig => ({
    questionId,
    when: [{ key: 'value', operator: 'EQ', compareValue }],
});

describe('setOptionJump', () => {
    it('adds a jump for an option', () => {
        expect(setOptionJump([], 'a', 'q2')).toEqual([optionJump('a', 'q2')]);
    });

    it('keeps jumps of other options intact', () => {
        const configs = setOptionJump([optionJump('a', 'q2')], 'b', 'q3');

        expect(configs).toEqual([optionJump('a', 'q2'), optionJump('b', 'q3')]);
    });

    it('replaces an existing jump of the same option', () => {
        const configs = setOptionJump([optionJump('a', 'q2'), optionJump('b', 'q3')], 'a', 'q4');

        expect(configs).toEqual([optionJump('b', 'q3'), optionJump('a', 'q4')]);
    });

    it('removes the jump of an option when no question is selected', () => {
        const configs = setOptionJump([optionJump('a', 'q2'), optionJump('b', 'q3')], 'a', '');

        expect(configs).toEqual([optionJump('b', 'q3')]);
    });

    it('leaves unconditional jumps alone', () => {
        const unconditional: NextQuestionConfig = { questionId: 'q5', when: [] };
        const configs = setOptionJump([unconditional], 'a', '');

        expect(configs).toEqual([unconditional]);
    });
});

describe('setUnconditionalJump', () => {
    it('sets a single entry without conditions', () => {
        expect(setUnconditionalJump('q3')).toEqual([{ questionId: 'q3', when: [] }]);
    });

    it('clears the configuration when no question is selected', () => {
        expect(setUnconditionalJump('')).toEqual([]);
    });
});
