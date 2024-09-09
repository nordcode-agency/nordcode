import buttonBase from '../examples/button/buttonBase.html?raw';
import buttonIcon from '../examples/button/buttonIcon.html?raw';
import buttonAll from '../examples/button/buttonAll.html?raw';
import buttonWithIcon from '../examples/button/buttonWithIcon.html?raw';
import inputBase from '../examples/input/inputBase.html?raw';
import inputDate from '../examples/input/inputDate.html?raw';
import inputRange from '../examples/input/inputRange.html?raw';
import inputSelect from '../examples/input/inputSelect.html?raw';
import inputTextarea from '../examples/input/inputTextarea.html?raw';
import inputSegmentedControl from '../examples/input/inputSegmentedControl.html?raw';
import inputCheckbox from '../examples/input/inputCheckbox.html?raw';
import inputRadioField from '../examples/input/inputRadioField.html?raw';
import inputCheckboxField from '../examples/input/inputCheckboxField.html?raw';
import inputTagSelect from '../examples/input/inputTagSelect.html?raw';
import fieldsetBase from '../examples/fieldset/fieldsetBase.html?raw';
import fieldsetStandard from '../examples/fieldset/fieldsetStandard.html?raw';
import fieldsetWithH1 from '../examples/fieldset/fieldsetWithH1.html?raw';
import formSmall from '../examples/form/formSmall.html?raw';
import formFull from '../examples/form/formFull.html?raw';
import formPage from '../examples/form/formPage.html?raw';
import tableStandard from '../examples/table/tableStandard.html?raw';
import metaList from '../examples/lists/metalist.html?raw';
import descriptionList from '../examples/lists/descriptionlist.html?raw';
import tableHorizontal from '../examples/table/tableHorizontal.html?raw';
import breadcrumbs from '../examples/navigation/breadcrumbs.html?raw';
import { slugify } from '../../common/utils/slugify';
import { colorUtilModifiers } from '../modifiers/colorUtilModifiers';
import { buttonModifiers } from '../modifiers/buttonModifiers';
import { buttonVariables } from '../cssVariables/buttonVariables';

import buttonPreview from '../cardPreviews/Button.svg?raw';
import iconButtonPreview from '../cardPreviews/IconButton.svg?raw';
import formPreview from '../cardPreviews/Form.svg?raw';
import fieldsetPreview from '../cardPreviews/Fieldset.svg?raw';
import inputBasePreview from '../cardPreviews/Input.svg?raw';
import checkboxPreview from '../cardPreviews/Checkbox.svg?raw';
import dateInputPreview from '../cardPreviews/DateInput.svg?raw';
import rangeInputPreview from '../cardPreviews/RangeInput.svg?raw';
import selectPreview from '../cardPreviews/Select.svg?raw';
import textareaPreview from '../cardPreviews/TextArea.svg?raw';
import segmentedPreview from '../cardPreviews/SegmentedControl.svg?raw';
import radioGroupPreview from '../cardPreviews/RadioGroup.svg?raw';
import checkboxGroupPreview from '../cardPreviews/CheckboxGroup.svg?raw';
import tagSelectPreview from '../cardPreviews/TagSelect.svg?raw';
import metaListPreview from '../cardPreviews/MetaList.svg?raw';
import descriptionListPreview from '../cardPreviews/DescriptionList.svg?raw';
import tablePreview from '../cardPreviews/Table.svg?raw';
import breadcrumbsPreview from '../cardPreviews/Breadcrumbs.svg?raw';

interface Component {
    title: string;
    description: string;
    preview?: string;
    component: string;
    notes?: Array<string>;
    modifiers?: Array<Modifier>;
    cssVariables?: Array<Modifier>;
    examples?: Array<{
        title: string;
        description?: string;
        code: string;
        notes?: string[];
    }>;
}

interface Section {
    title: string;
    components: Array<Component>;
}

interface Modifier {
    name: string;
    description: string;
}

const sections: Array<Section> = [
    {
        title: 'Buttons',
        components: [
            {
                title: 'Button Base',
                preview: buttonPreview,
                description:
                    'Primarily used for interface interactions. Has a lot of variations and semantic power.',
                component: buttonBase,
                modifiers: [...buttonModifiers, ...colorUtilModifiers],
                cssVariables: [...buttonVariables],
                notes: [
                    'Primary buttons should be used only once per form / view, while the others can be used multiple times.',
                    'When labeling, prefer strong verbs describing the action.',
                    "<strong>Don't</strong> use buttons for navigation. Prefer standard links for that.",
                    "<strong>Don't</strong> use undescriptive button texts, like OK, or 'Read more'.",
                ],
                examples: [
                    {
                        title: 'All Button Variants',
                        description: 'An overview over all button variants and their modifiers',
                        code: buttonAll,
                    },
                    {
                        title: 'Button with Icon',
                        description: 'Buttons can also have inline icons indicating their action',
                        code: buttonWithIcon,
                    },
                ],
            } as Component,
            {
                title: 'Icon Button',
                preview: iconButtonPreview,
                description:
                    'Icon only button for minimalistic interfaces or when you have little room with lots of actions.',
                component: buttonIcon,
                modifiers: [...buttonModifiers, ...colorUtilModifiers],
                cssVariables: [...buttonVariables],
                notes: [
                    "Make sure to set the icon to aria-hidden, so the content isn't read to screen reader users.",
                    'Make sure to have a fitting and descriptive aria-label for screen reader users.',
                ],
            } as Component,
        ],
    },
    {
        title: 'Form Elements',
        components: [
            {
                title: 'Fieldset',
                component: fieldsetBase,
                preview: fieldsetPreview,
                description:
                    'Used to group inputs that belong together. Mandatory for radio-inputs. Can have a hint to describe what it is about.',
                examples: [
                    {
                        title: 'Standard Fieldset',
                        description:
                            'A more practical example with inputs and a box around it for design purposes.',
                        code: fieldsetStandard,
                    },
                    {
                        title: 'Fieldset for single question pages',
                        description: 'You can nest an h1 in the legend like this.',
                        code: fieldsetWithH1,
                    },
                ],
            } as Component,
            {
                title: 'Form',
                preview: formPreview,
                component: formSmall,
                description:
                    'Use a form to collect user input. Can have multiple inputs or only one. Should have a single primary button.',
                notes: [
                    "It's preferred to have a 1-column layout for the best experience. Otherwise it's hard to scan",
                    "It's preferred to have as few questions as possible per form. Best is a single question to not overwhelm the users.",
                ],
                examples: [
                    {
                        title: 'Longer Form',
                        description:
                            'You can also have long forms. Feel free to add fieldsets to group inputs together.',
                        code: formFull,
                    },
                    {
                        title: 'Page Form',
                        description:
                            'One question per page provides the best UX. It is super scannable and does not overwhelm the user. No card required.',
                        code: formPage,
                    },
                ],
            } as Component,
        ],
    },
    {
        title: 'Input Fields',
        components: [
            {
                title: 'Base Input',
                preview: inputBasePreview,
                component: inputBase,
                description:
                    'Basic text input with a label and optional hint(s) and error(s). Use it for short text inputs like names and emails.',
                notes: [
                    'Ideally, mark labels and inputs as optional and set aria-required="false"',
                    'You can set min and max-widths globally using <var>--input-field-min-inline-size</var> and <var>--input-field-max-inline-size</var>',
                ],
            },
            {
                title: 'Checkbox Input',
                description: 'Checkbox inputs are used for agreeing or enabling features.',
                component: inputCheckbox,
                preview: checkboxPreview,
            },
            {
                title: 'Date Input',
                description:
                    'Use date inputs to collect single dates. Can be hooked up to a button to set the date for today. Builts on browser built-in date picker.',
                component: inputDate,
                preview: dateInputPreview,
            },
            {
                title: 'Range Input',
                description:
                    'Prefer the range input over a standard number input for easier adjustments. Usually not as precise. Display the currently selected value below or group with a number input for the best of both worlds.',
                component: inputRange,
                preview: rangeInputPreview,
            },
            {
                title: 'Select',
                description:
                    'Selects are useful for when you have more than 5 items, but still a managable amount.',
                component: inputSelect,
                preview: selectPreview,
            },
            {
                title: 'Textarea',
                description:
                    'Use a textarea for longer text inputs, like descriptions or bios. Allows for multiple lines.',
                component: inputTextarea,
                preview: textareaPreview,
            },
            {
                title: 'Segmented control',
                description:
                    'A styled radio control. Use when you have a small amount of options (2-5). Can be used for on/off switches. Has intrinsic sizing and switches between column and row.',
                component: inputSegmentedControl,
                preview: segmentedPreview,
            },
            {
                title: 'Radio Input Field',
                description:
                    'Oftentimes the best choice for selecting one option out of a few. Prefer over selects for 2-5 options.',
                component: inputRadioField,
                notes: [
                    "You can register a 'change' event on the fieldset to listen for changes in the radio inputs.",
                ],
                preview: radioGroupPreview,
            },
            {
                title: 'Checkbox Input Field',
                description:
                    'Oftentimes the best choice for selecting multiple options out of a few. Prefer over selects for 2-5 options.',
                component: inputCheckboxField,
                preview: checkboxGroupPreview,
            },
            {
                title: 'Tag Select Field',
                description:
                    'Shows multiple options as tags or chips. Styles can be adjusted. Use it to show lots of short options.',
                component: inputTagSelect,
                notes: [
                    'Feel free to change the contents and class of the label to whatever suits your needs',
                    'You can easily style the selected state with <var>label:has(input:checked)</var>',
                ],
                preview: tagSelectPreview,
            },
        ],
    },
    {
        title: 'Data Display',
        components: [
            {
                title: 'Meta List',
                component: metaList,
                description:
                    'Display tags and meta data for posts and alike, like date, author, and tags. Has intrinsic sizing.',
                preview: metaListPreview,
            },
            {
                title: 'Descriptions List',
                component: descriptionList,
                description:
                    'Description lists are a way to organize and explain related information. Use it when you need to list and define terms such as in a glossary.',
                preview: descriptionListPreview,
            },
            {
                title: 'Tables',
                component: tableStandard,
                description:
                    'Tables should be used for tabular data. They can easily hold a lot of data and group it together clearly and semantically correct.',
                notes: [
                    'Make sure all data is visible in all responsive setups. Either change the layout or allow scrolling..',
                ],
                preview: tablePreview,
                examples: [
                    {
                        title: 'Horizontal Table',
                        description:
                            'Sometimes tables make more sense to be horizontal. This is how you do it.',
                        code: tableHorizontal,
                    },
                ],
            },
        ],
    },
    {
        title: 'Navigation',
        components: [
            {
                title: 'Breadcrumbs',
                component: breadcrumbs,
                preview: breadcrumbsPreview,
                description:
                    'Breadcrumbs display the current page or context within the site, allowing them to navigate different levels of the hierarchy.',
                notes: [
                    'Pay attention to detail here to get the styling just right and the list accessible.',
                ],
            },
        ],
    },
];

export interface SmarterComponent extends Component {
    sectionId: string;
}

export interface SmarterSection extends Omit<Section, 'components'> {
    sectionId: string;
    components: Array<SmarterComponent>;
}

export const smarterSections = sections.map((sect, idx) => {
    return {
        ...sect,
        sectionId: slugify(sect.title),
        components: sect.components.map((comp, compIdx) => {
            return {
                ...comp,
                sectionId: slugify(comp.title),
            };
        }),
    };
});
