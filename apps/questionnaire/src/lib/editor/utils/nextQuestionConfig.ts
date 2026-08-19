import type { NextQuestionConfig } from '@nordcode/questionnaire-renderer';

const isJumpForOption = (config: NextQuestionConfig, optionValue: string | number | boolean) =>
    config.when.length > 0 && config.when[0].compareValue === optionValue;

export const setOptionJump = (
    configs: NextQuestionConfig[],
    optionValue: string | number | boolean,
    selectedQuestionId: string,
): NextQuestionConfig[] => {
    const otherConfigs = configs.filter(config => !isJumpForOption(config, optionValue));

    if (selectedQuestionId === '') {
        return otherConfigs;
    }

    return [
        ...otherConfigs,
        {
            questionId: selectedQuestionId,
            when: [{ key: 'value', operator: 'EQ', compareValue: optionValue }],
        },
    ];
};

export const setUnconditionalJump = (selectedQuestionId: string): NextQuestionConfig[] => {
    if (selectedQuestionId === '') {
        return [];
    }

    return [{ questionId: selectedQuestionId, when: [] }];
};
