export enum QuestionType {
    text = 'text',
    long_text = 'long_text',
    multiple_choice = 'multiple_choice',
    single_choice = 'single_choice',
    number = 'number',
    date = 'date',
    date_time = 'date_time',
    image = 'image',
    // time = 'time',
    // score = 'score',
}

export type Condition = {
    key: 'value';
    operator: 'EQ' | 'NE' | 'GT' | 'LT' | 'GTE' | 'LTE' | 'CONTAINS' | 'STARTS_WITH' | 'ENDS_WITH';
    compareValue: string | number | boolean;
    chain?: 'AND' | 'OR';
};

export type NextQuestionConfig = {
    questionId: string;
    when: Condition[];
};

export type QuestionBase = {
    id: string;
    title: string;
    description?: string;
    hint?: string;
    required?: boolean;
    next?: NextQuestionConfig[];
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

export type DateQuestion = QuestionBase & {
    type: QuestionType.date;
};

export type DateTimeQuestion = QuestionBase & {
    type: QuestionType.date_time;
};

export type ImageQuestion = QuestionBase & {
    type: QuestionType.image;
    maxSizeInBytes?: number;
};

export type Question =
    | TextQuestion
    | LongTextQuestion
    | MultipleChoiceQuestion
    | SingleChoiceQuestion
    | NumberQuestion
    | DateTimeQuestion
    | DateQuestion
    | ImageQuestion;

export type QuestionWithOption = MultipleChoiceQuestion | SingleChoiceQuestion;

export type Questionnaire = {
    id: string;
    title: string;
    description?: string;
    questions: Record<string, Question>;
    questionsOrder: string[];
};
