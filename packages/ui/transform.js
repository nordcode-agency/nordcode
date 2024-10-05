import { browserslistToTargets, bundle } from 'lightningcss';
import browserslist from 'browserslist';
import fs from 'node:fs';

const targets = browserslistToTargets(browserslist('defaults'));

const { code: colors } = bundle({
    // ...
    targets,
    drafts: {
        customMedia: true,
    },
    filename: 'src/styles/theme/colors_raw.css',
});

fs.writeFileSync('src/styles/theme/colors_processed.css', colors);

const { code } = bundle({
    // ...
    targets,
    drafts: {
        customMedia: true,
    },
    filename: 'src/styles/bundle.css',
});

fs.writeFileSync('out/bundle.css', code);

const { code: codeComplete } = bundle({
    // ...
    targets,
    drafts: {
        customMedia: true,
    },
    filename: 'src/styles/complete.css',
});

fs.writeFileSync('out/complete.css', codeComplete);

const { code: codeCompleteConfigless } = bundle({
    // ...
    targets,
    drafts: {
        customMedia: true,
    },
    filename: 'src/styles/complete_configless.css',
});

fs.writeFileSync('out/complete_configless.css', codeCompleteConfigless);
