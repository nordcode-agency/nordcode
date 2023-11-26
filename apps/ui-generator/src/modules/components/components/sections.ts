import buttonIcon from '../examples/button/buttonIcon.html?raw';
import inputBase from '../examples/input/inputBase.html?raw';
import inputDate from '../examples/input/inputDate.html?raw';
import inputRange from '../examples/input/inputRange.html?raw';
import inputSelect from '../examples/input/inputSelect.html?raw';
import inputTextarea from '../examples/input/inputTextarea.html?raw';
import inputCheckbox from '../examples/input/inputCheckbox.html?raw';
import fieldsetBase from '../examples/fieldset/fieldsetBase.html?raw';
import fieldsetStandard from '../examples/fieldset/fieldsetStandard.html?raw';
import fieldsetWithH1 from '../examples/fieldset/fieldsetWithH1.html?raw';
import tableStandard from '../examples/table/tableStandard.html?raw';
import metaList from '../examples/lists/metalist.html?raw';
import descriptionList from '../examples/lists/descriptionlist.html?raw';
import tableHorizontal from '../examples/table/tableHorizontal.html?raw';
import breadcrumbs from '../examples/navigation/breadcrumbs.html?raw';
import { slugify } from '../../common/utils/slugify';

const idxToDisplayNumber = (num: number, nestedNum?: number): string => {
    const firstPart = (num + 1).toString().padStart(2, '0');
    const secondPart =
        nestedNum !== undefined ? `.${(nestedNum + 1).toString().padStart(2, '0')}` : '';

    return firstPart + secondPart;
};

interface Component {
    title: string;
    description?: string;
    component: string;
    notes?: Array<string>;
    examples?: Array<{
        title: string;
        description?: string;
        code: string;
    }>;
}

interface Section {
    title: string;
    components: Array<Component>;
}

const sections: Array<Section> = [
    {
        title: 'Buttons',
        components: [
            {
                title: 'Icon Button',
                description: 'An icon-only button for when you want a more minimal interface.',
                component: buttonIcon as string,
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
                title: 'Input Fields',
                component: inputBase as string,
                description: 'The classic input with a label and optional hint(s) and error(s).',
                notes: [
                    'Ideally, mark labels and inputs as optional and set aria-required="false"',
                    'You can set min and max-widths globally using --input-field-min-inline-size and --input-field-max-inline-size',
                ],
                examples: [
                    {
                        title: 'Checkbox Input',
                        description: 'A standard checkbox input.',
                        code: inputCheckbox as string,
                    },
                    {
                        title: 'Date Input',
                        description:
                            'Date Inputs can have a little button next to them to make it easier to set the date. You do have to hook up the logic, though.',
                        code: inputDate as string,
                    },
                    {
                        title: 'Range Input',
                        description:
                            'It is nice to display the range value below, we think. You need to keep it in sync yourself though.',
                        code: inputRange as string,
                    },
                    {
                        title: 'Select',
                        description:
                            'Selects are useful for when you have more than 5 items, but still a managable amount.',
                        code: inputSelect as string,
                    },
                    {
                        title: 'Textarea',
                        description: 'Need more space? Use a textarea.',
                        code: inputTextarea as string,
                    },
                ],
            } as Component,
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
                    'You can change the background-color using --nc-table-background-lch',
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

interface SmarterComponent extends Component {
    titleWithNumber: string;
    sectionId: string;
}

export interface SmarterSection extends Omit<Section, 'components'> {
    titleWithNumber: string;
    sectionId: string;
    components: Array<SmarterComponent>;
}

export const smarterSections = sections.map((sect, idx) => {
    return {
        ...sect,
        titleWithNumber: `${idxToDisplayNumber(idx)}: ${sect.title}`,
        sectionId: slugify(`${idxToDisplayNumber(idx)}: ${sect.title}`),
        components: sect.components.map((comp, compIdx) => {
            return {
                ...comp,
                titleWithNumber: `${idxToDisplayNumber(idx, compIdx)}: ${comp.title}`,
                sectionId: slugify(`${idxToDisplayNumber(idx, compIdx)}: ${comp.title}`),
            };
        }),
    };
});
