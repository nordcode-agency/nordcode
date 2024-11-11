import buttonAll from '../examples/button/buttonAll.html?raw';
import buttonBase from '../examples/button/buttonBase.html?raw';
import buttonIcon from '../examples/button/buttonIcon.html?raw';
import buttonWithIcon from '../examples/button/buttonWithIcon.html?raw';
import fieldsetBase from '../examples/fieldset/fieldsetBase.html?raw';
import fieldsetStandard from '../examples/fieldset/fieldsetStandard.html?raw';
import fieldsetWithH1 from '../examples/fieldset/fieldsetWithH1.html?raw';
import formFull from '../examples/form/formFull.html?raw';
import formPage from '../examples/form/formPage.html?raw';
import formSmall from '../examples/form/formSmall.html?raw';
import inputBase from '../examples/input/inputBase.html?raw';
import inputCheckbox from '../examples/input/inputCheckbox.html?raw';
import inputCheckboxField from '../examples/input/inputCheckboxField.html?raw';
import inputDate from '../examples/input/inputDate.html?raw';
import inputRadioField from '../examples/input/inputRadioField.html?raw';
import inputRange from '../examples/input/inputRange.html?raw';
import inputSegmentedControl from '../examples/input/inputSegmentedControl.html?raw';
import inputSelect from '../examples/input/inputSelect.html?raw';
import inputSwitch from '../examples/input/inputSwitch.html?raw';
import inputTagSelect from '../examples/input/inputTagSelect.html?raw';
import inputTextarea from '../examples/input/inputTextarea.html?raw';
import box from '../examples/layouts/box.html?raw';
import center from '../examples/layouts/center.html?raw';
import cluster from '../examples/layouts/cluster.html?raw';
import flow from '../examples/layouts/flow.html?raw';
import gallery from '../examples/layouts/gallery.html?raw';
import grid from '../examples/layouts/grid.html?raw';
import pile from '../examples/layouts/pile.html?raw';
import region from '../examples/layouts/region.html?raw';
import stack from '../examples/layouts/stack.html?raw';
import switcher from '../examples/layouts/switcher.html?raw';
import withSidebar from '../examples/layouts/withSidebar.html?raw';
import descriptionList from '../examples/lists/descriptionlist.html?raw';
import metaList from '../examples/lists/metalist.html?raw';
import breadcrumbs from '../examples/navigation/breadcrumbs.html?raw';
import tableHorizontal from '../examples/table/tableHorizontal.html?raw';
import tableStandard from '../examples/table/tableStandard.html?raw';

import { slugify } from '../../common/utils/slugify';
import { buttonVariables } from '../cssVariables/buttonVariables';
import { buttonModifiers } from '../modifiers/buttonModifiers';
import { colorUtilModifiers } from '../modifiers/colorUtilModifiers';
import { spacingModifiers } from '../modifiers/spacingModifiers';

import boxPreview from '../cardPreviews/Box.svg?raw';
import breadcrumbsPreview from '../cardPreviews/Breadcrumbs.svg?raw';
import buttonPreview from '../cardPreviews/Button.svg?raw';
import centerPreview from '../cardPreviews/Center.svg?raw';
import checkboxPreview from '../cardPreviews/Checkbox.svg?raw';
import checkboxGroupPreview from '../cardPreviews/CheckboxGroup.svg?raw';
import clusterPreview from '../cardPreviews/Cluster.svg?raw';
import dateInputPreview from '../cardPreviews/DateInput.svg?raw';
import descriptionListPreview from '../cardPreviews/DescriptionList.svg?raw';
import fieldsetPreview from '../cardPreviews/Fieldset.svg?raw';
import flowPreview from '../cardPreviews/Flow.svg?raw';
import formPreview from '../cardPreviews/Form.svg?raw';
import galleryPreview from '../cardPreviews/Gallery.svg?raw';
import gridPreview from '../cardPreviews/Grid.svg?raw';
import iconButtonPreview from '../cardPreviews/IconButton.svg?raw';
import inputBasePreview from '../cardPreviews/Input.svg?raw';
import metaListPreview from '../cardPreviews/MetaList.svg?raw';
import pilePreview from '../cardPreviews/Pile.svg?raw';
import radioGroupPreview from '../cardPreviews/RadioGroup.svg?raw';
import rangeInputPreview from '../cardPreviews/RangeInput.svg?raw';
import regionPreview from '../cardPreviews/Region.svg?raw';
import segmentedPreview from '../cardPreviews/SegmentedControl.svg?raw';
import selectPreview from '../cardPreviews/Select.svg?raw';
import stackPreview from '../cardPreviews/Stack.svg?raw';
import switchPreview from '../cardPreviews/Switch.svg?raw';
import switcherPreview from '../cardPreviews/Switcher.svg?raw';
import tablePreview from '../cardPreviews/Table.svg?raw';
import tagSelectPreview from '../cardPreviews/TagSelect.svg?raw';
import textareaPreview from '../cardPreviews/TextArea.svg?raw';
import withSidebarPreview from '../cardPreviews/WithSidebar.svg?raw';

interface Component {
    title: string;
    description: string;
    preview?: string;
    codepenUrl?: string;
    requirements?: Array<string>;
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
                codepenUrl: "https://codepen.io/JSHSJ/pen/yLmGvbJ",
                requirements: ["@nordcode/ui/colors", "@nordcode/ui/utils/theme", "@nordcode/ui/components/button"],
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
                codepenUrl: "https://codepen.io/JSHSJ/pen/poMqaMP",
                requirements: ["@nordcode/ui/colors", "@nordcode/ui/utils/theme", "@nordcode/ui/components/button", "@nordcode/ui/components/icons"],
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
                title: 'Switch Input',
                description: 'Basically a checkbox, but designed in a typical on/off way',
                component: inputSwitch,
                preview: switchPreview,
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
    {
        title: 'Layouts',
        components: [
            {
                title: 'Box',
                component: box,
                preview: boxPreview,
                description:
                    "It's a padded box, and an optional border. Can be wrapped around most content and serves as a standardised way to display content.",
                modifiers: [
                    {
                        name: '-bordered',
                        description: 'Adds a border to the box',
                    },
                    {
                        name: '-tiny',
                        description: 'Sets padding to --spacing-tiny',
                    },
                    {
                        name: '-nearest',
                        description: 'Sets padding to --spacing-nearest',
                    },
                    {
                        name: '-near',
                        description: 'Sets padding to --spacing-near',
                    },
                    {
                        name: '-base',
                        description: 'Sets padding to --spacing-base',
                    },
                    {
                        name: '-far',
                        description: 'Sets padding to --spacing-far',
                    },
                    {
                        name: '-farthest',
                        description: 'Sets padding to --spacing-farthest',
                    },
                ],
            },
            {
                title: 'Stack',
                component: stack,
                preview: stackPreview,
                description:
                    "Stack content vertically in a column and space it equally. Since most websites are built this way, it's basic building block.",
                modifiers: [
                    {
                        name: '-inherit',
                        description: 'Inherits the gap spacing of the parent container',
                    },
                    {
                        name: '-stretched',
                        description: 'Makes it and all children 100% of the parents width',
                    },
                    {
                        name: '-contained',
                        description:
                            'Contains the stack to the width of the parent. Prevents overflow.',
                    },

                    ...spacingModifiers,
                ],
                cssVariables: [
                    {
                        name: '--stack-gap',
                        description: 'Set a custom gap between the children',
                    },
                ],
            },
            {
                title: 'Cluster',
                component: cluster,
                preview: clusterPreview,
                description:
                    "Flow it's children horizontally and spaces it equally. Usually allows wrapping. The horizontal content sibling of the stack.",
                modifiers: [
                    {
                        name: '-inherit',
                        description: 'Inherits the gap spacing of the parent container',
                    },
                    {
                        name: '-centered',
                        description: 'Aligns content to the center',
                    },
                    {
                        name: '-nowrap',
                        description:
                            'Prevents wrapping of the children. Will cause overflow if not enough space is available.',
                    },
                    {
                        name: '-between',
                        description:
                            'Spaces the children equally and pushes them to the edges. Useful for navbars, for example.',
                    },
                    ...spacingModifiers,
                ],
                cssVariables: [
                    {
                        name: '--cluster-gap',
                        description: 'Set a custom gap between the children',
                    },
                ],
            },
            {
                title: 'Center',
                component: center,
                preview: centerPreview,
                description:
                    'Center content horizontally. Use it as a layout wrapper or to center content inside a parent. Will take exact size given.',
                cssVariables: [
                    {
                        name: '--center-measure',
                        description:
                            'Set the max width of the container. Defaults to <code>max-content</code>.',
                    },
                    {
                        name: '--center-padding',
                        description:
                            'Set the padding of the container. Defaults to <code>0</code>.',
                    },
                ],
                notes: [
                    'To use it as a layout wrapper, pair it with a simple class, that sets the CSS Variables to your desired layout specifics.',
                ],
            },
            {
                title: 'With Sidebar',
                component: withSidebar,
                preview: withSidebarPreview,
                description:
                    'Place two containers side by side. The main content (data-grow) has a min size and will grow, the aside content (data-aside) a target size. If there is no more space for the min size, it will wrap.',
                modifiers: [
                    { name: 'data-direction=rtl', description: 'Flip the main and aside content.' },
                    { name: '-centered', description: 'Align the content horizontally centered.' },
                    ...spacingModifiers,
                ],
                cssVariables: [
                    {
                        name: '--with-sidebar-gap',
                        description:
                            'Set the gap between the main and aside content. Defaults to <var>--spacing-far</var>',
                    },
                    {
                        name: '--with-sidebar-target-width',
                        description:
                            'Control the target size of the aside. Defaults to <code>20rem</code>',
                    },
                    {
                        name: '--with-sidebar-min-size',
                        description:
                            'Control the min size of the main. Defaults to <code>50%</code>',
                    },
                ],
                notes: ['Use it for standard image text sections or sidebar navigations.'],
            },
            {
                title: 'Grid',
                component: grid,
                preview: gridPreview,
                description:
                    'Align content in a grid. Default is a responsive autofil-grid, aka RAM grid, but can be used with modifers create 2- or 3-column layouts.',
                modifiers: [
                    {
                        name: 'data-layout=50-50',
                        description: 'Create a responsive 2 column grid.',
                    },
                    {
                        name: 'data-layout=thirds',
                        description: 'Create a responsive 3 column grid.',
                    },
                    ...spacingModifiers,
                ],
                cssVariables: [
                    {
                        name: '--grid-placement',
                        description:
                            'Set the repeat placement property of the grid. Defaults to <code>auto-fill</code>.',
                    },
                    {
                        name: '--grid-min-item-size',
                        description:
                            'Set the minimum size for the grid items. Defaults to <code>16rem</code>.',
                    },
                    {
                        name: '--grid-gap',
                        description: 'Set a custom gap between the children',
                    },
                ],
            },
            {
                title: 'Switcher',
                component: switcher,
                preview: switcherPreview,
                description:
                    'Allows to to layout three items next to each other, until there is not enough horizontal space. Will then switch to a column layout.',
                modifiers: [...spacingModifiers],
                cssVariables: [
                    {
                        name: '--switcher-vertical-alignment',
                        description:
                            'Sets the vertical alignment of th items. Defaults to <code>flex-start</code>.',
                    },
                    {
                        name: '--switcher-target-container-width',
                        description:
                            'Sets the minimum size of the children before switching to a column layout. Defaults to <code>40rem</code>.',
                    },
                    {
                        name: '--switcher-gap',
                        description: 'Set a custom gap between the children',
                    },
                ],
            },
            {
                title: 'Pile',
                component: pile,
                preview: pilePreview,
                description:
                    'Pile items on top of each other. Prefer this over position: absolute.',
            },
            {
                title: 'Region',
                component: region,
                preview: regionPreview,
                description:
                    'A consistently spaced section to bring some white space to your blocks. Used in most website layouts.',
                cssVariables: [
                    {
                        name: '--region-space',
                        description:
                            'Set the vertical padding of the region. Defaults to <var>--spacing-farthest</var>.',
                    },
                ],
            },
            {
                title: 'Flow',
                component: flow,
                preview: flowPreview,
                description:
                    'Create a vertical rhythm section for text layouts. Nicely spaces headlines, paragraphs and imaages. Think of it as a standard blog layout.',
                cssVariables: [
                    {
                        name: '--flow-base-measure',
                        description:
                            'Set the max size of any non-headline content. Defaults to <code>72ch</code>.',
                    },
                    {
                        name: '--flow-headline-measure',
                        description: 'Set the max size of headline. Defaults to <code>32ch</code>.',
                    },
                ],
            },
            {
                title: 'Gallery',
                component: gallery,
                preview: galleryPreview,
                description:
                    'A horizontal, scrollable gallery. Uses mandatory scroll snap stops by default. Use it for image galleries, content carousels or slides.',
                modifiers: [
                    {
                        name: '-custom-scrollbar',
                        description:
                            'Enable a styled custom scrollbar. See CSS Variables for customization.',
                    },
                    ...spacingModifiers,
                ],
                cssVariables: [
                    {
                        name: '--gallery-size',
                        description:
                            'Set the max block size of the gallery. Defaults to <code>auto</code>, so it will take on the size of the largest child.',
                    },
                    {
                        name: '--gallery-scrollbar-padding',
                        description:
                            'Set the padding at the block end, between the children and the scrollbar. Defaults to <var>--spacing-base</var>.',
                    },
                    {
                        name: '--gallery-scroll-padding-inline',
                        description:
                            'Set the inline padding, controls the scroll snap position. Defaults to <var>--spacing-base</var>.',
                    },
                    {
                        name: '--gallery-item-size',
                        description:
                            'Set the target size of the children. Defaults to <code>auto</code>, so each child will have its own size based on its contents.',
                    },
                    {
                        name: '--gallery-scrollbar-fg',
                        description:
                            'Set the scrollbar foreground color. Defaults to <var>--color-text-on-emphasis</var>.',
                    },
                    {
                        name: '--gallery-scrollbar-bg',
                        description:
                            'Set the scrollbar background color. Defaults to <var>--color-surface-emphasis</var>.',
                    },
                    {
                        name: '--gallery-scrollbar-height',
                        description:
                            'Set the scrollbar height. Defaults to <var>--spacing-base</var>.',
                    },
                    {
                        name: '--gallery-gap',
                        description:
                            'Set the gap bwteen th children. Defaults to <var>--spacing-base</var>.',
                    },
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
        components: sect.components
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((comp, compIdx) => {
                return {
                    ...comp,
                    sectionId: slugify(comp.title),
                };
            }),
    };
});
