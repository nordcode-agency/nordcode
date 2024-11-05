import type { Questionnaire } from '@nordcode/questionnaire-renderer';

export const createDataUrl = (questionnaire: Questionnaire) => {
    return `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(questionnaire, null, 2))}`;
};
