import buttonBase from '../examples/button/buttonBase.html?raw';
import buttonIcon from '../examples/button/buttonIcon.html?raw';
import buttonAll from '../examples/button/buttonAll.html?raw';
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

interface Component {
    title: string;
    description: string;
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
                description:
                    'The one and only button. Triggers actions. Should rarely be used for navigation.',
                component: buttonBase as string,
                modifiers: [...buttonModifiers, ...colorUtilModifiers],
                cssVariables: [...buttonVariables],
                examples: [
                    {
                        title: 'All Button Variants',
                        description: 'An overview over all button variants and their modifiers',
                        code: buttonAll as string,
                    },
                ],
            } as Component,
            {
                title: 'Icon Button',
                description: 'An icon-only button for when you want a more minimal interface.',
                component: buttonIcon as string,
                modifiers: [...buttonModifiers, ...colorUtilModifiers],
                cssVariables: [...buttonVariables],
                notes: [
                    "Make sure to set the icon to aria-hidden, so the content isn't read to screen reader users",
                    'Also add a screen-reader only label',
                ],
            } as Component,
        ],
    },
    {
        title: 'Form Elements',
        components: [
            {
                title: 'Fieldset',
                component: fieldsetBase as string,
                description:
                    'Used to group inputs that belong together. Mandatory for radio-inputs. Can have a hint to describe what it is about.',
                examples: [
                    {
                        title: 'Standard Fieldset',
                        description:
                            'A more practical example with inputs and a box around it for design purposes.',
                        code: fieldsetStandard as string,
                    },
                    {
                        title: 'Fieldset for single question pages',
                        description: 'You can nest an h1 in the legend like this.',
                        code: fieldsetWithH1 as string,
                    },
                ],
            } as Component,
            {
                title: 'Form',
                component: formSmall as string,
                description:
                    'A straightforward form should be used for all cases. Get data from your users in the most efficient way. You can get fancy or not, up to you.',
                notes: [
                    "It's preferred to have a 1-column layout for the best experience. Otherwise it's hard to scan",
                    "It's preferred to have as few questions as possible per form. Best is a single question to not overwhelm the users.",
                ],
                examples: [
                    {
                        title: 'Longer Form',
                        description:
                            'You can also have long forms. Feel free to add fieldsets to group inputs together.',
                        code: formFull as string,
                    },
                    {
                        title: 'Page Form',
                        description:
                            'One question per page provides the best UX. It is super scannable and does not overwhelm the user. No card required.',
                        code: formPage as string,
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
                component: inputBase as string,
                description: 'The classic input with a label and optional hint(s) and error(s).',
                notes: [
                    'Ideally, mark labels and inputs as optional and set aria-required="false"',
                    'You can set min and max-widths globally using <var>--input-field-min-inline-size</var> and <var>--input-field-max-inline-size</var>',
                ],
            },
            {
                title: 'Checkbox Input',
                description: 'A standard checkbox input.',
                component: inputCheckbox as string,
            },
            {
                title: 'Date Input',
                description:
                    'Date Inputs can have a little button next to them to make it easier to set the date. You do have to hook up the logic, though.',
                component: inputDate as string,
            },
            {
                title: 'Range Input',
                description:
                    'It is nice to display the range value below, we think. You need to keep it in sync yourself though.',
                component: inputRange as string,
            },
            {
                title: 'Select',
                description:
                    'Selects are useful for when you have more than 5 items, but still a managable amount.',
                component: inputSelect as string,
            },
            {
                title: 'Textarea',
                description: 'Need more space? Use a textarea.',
                component: inputTextarea as string,
            },
            {
                title: 'Segmented control',
                description: 'A more stylish radio control',
                component: inputSegmentedControl as string,
            },
            {
                title: 'Radio Input Field',
                description: 'A standard radio input field.',
                component: inputRadioField as string,
                notes: [
                    "You can register a 'change' event on the fieldset to listen for changes in the radio inputs.",
                ],
            },
            {
                title: 'Checkbox Input Field',
                description: 'A standard checkbox input field.',
                component: inputCheckboxField as string,
            },
            {
                title: 'Tag Select Field',
                description:
                    'If you have a longer list of options, you might want to display them like tags.',
                component: inputTagSelect as string,
                notes: [
                    'Feel free to change the contents and class of the label to whatever suits your needs',
                    'You can easily style the selected state with <var>label:has(input:checked)</var>',
                ],
            },
        ],
    },
    {
        title: 'Data Display',
        components: [
            {
                title: 'Meta List',
                component: metaList as string,
                description: 'Display tags and meta data for posts and alike.',
            },
            {
                title: 'Descriptions List',
                component: descriptionList as string,
                description:
                    'Description lists are a way to organize and explain related information. They’re particularly useful when you need to list and define terms such as in a glossary. (from shopify)',
            },
            {
                title: 'Tables',
                component: tableStandard,
                description: "It's a table. It's good for displaying lots of data in columns.",
                notes: [
                    'Make sure all data is visible in all responsive setups. We do that using a scroll.',
                ],
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
                component: breadcrumbs as string,
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
