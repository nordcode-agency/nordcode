import Markdoc from '@markdoc/markdoc';

export const documentNodeWithClass: Markdoc.Schema = {
    ...Markdoc.nodes.document,
    transform(node, config) {
        return new Markdoc.Tag(
            'article',
            { class: 'nc-markdown nc-flow' },
            node.transformChildren(config),
        );
    },
};

export const markdocTransformConfig: Markdoc.Config = {
    nodes: {
        document: documentNodeWithClass,
    },
};
