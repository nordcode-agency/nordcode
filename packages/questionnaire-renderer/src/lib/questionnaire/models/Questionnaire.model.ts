export enum QuestionType {
    text = 'text',
    long_text = 'long_text',
    multiple_choice = 'multiple_choice',
    single_choice = 'single_choice',
    number = 'number',
    // date = 'date',
    // date_time = 'date_time',
    // time = 'time',
    // score = 'score',
}

export type QuestionBase = {
    id: string;
    title: string;
    description?: string;
    required?: boolean;
};

export type Option = {
    id: string;
    title: string;
    description?: string;
    value: string | number | boolean;
};

export type TextQuestion = QuestionBase & {
    type: QuestionType.text;
};

export type LongTextQuestion = QuestionBase & {
    type: QuestionType.long_text;
};

export type MultipleChoiceQuestion = QuestionBase & {
    type: QuestionType.multiple_choice;
    options: Option[];
};

export type SingleChoiceQuestion = QuestionBase & {
    type: QuestionType.single_choice;
    options: Option[];
};

export type NumberQuestion = QuestionBase & {
    type: QuestionType.number;
};

export type Question =
    | TextQuestion
    | LongTextQuestion
    | MultipleChoiceQuestion
    | SingleChoiceQuestion
    | NumberQuestion;

export type QuestionWithOption = MultipleChoiceQuestion | SingleChoiceQuestion;

export type Questionnaire = {
    id: string;
    title: string;
    description?: string;
    questions: Question[];
};
