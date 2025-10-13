import browserslist from 'browserslist';
import { browserslistToTargets, bundle } from 'lightningcss';
import fs from 'node:fs';

const browserlistTargtsWidelyAvailable = [
    'Chrome > 0 and last 2.5 years',
    'ChromeAndroid > 0 and last 2.5 years',
    'Edge > 0 and last 2.5 years',
    'Firefox > 0 and last 2.5 years',
    'FirefoxAndroid > 0 and last 2.5 years',
    'Safari > 0 and last 2.5 years',
    'iOS > 0 and last 2.5 years',
    'not dead',
];

const targets = browserslistToTargets(browserslist(browserlistTargtsWidelyAvailable));

const { code: colors } = bundle({
    // ...
    targets,
    drafts: {
        customMedia: true,
    },
    filename: 'src/styles/theme/colors.css',
});

fs.writeFileSync('out/colors.css', colors);

const { code } = bundle({
    // ...
    targets,
    drafts: {
        customMedia: true,
    },
    filename: 'src/styles/bundle.css',
});

fs.writeFileSync('out/bundle.css', code);

const { code: bundleConfigless } = bundle({
    // ...
    targets,
    drafts: {
        customMedia: true,
    },
    filename: 'src/styles/bundle_configless.css',
});

fs.writeFileSync('out/bundle_configless.css', bundleConfigless);

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
