import browserslist from 'browserslist';
import { browserslistToTargets, bundle } from 'lightningcss';
import fs from 'node:fs';

const browserlistTargtsWidelyAvailable = [
    'extends browserslist-config-baseline',
];

const targets = browserslistToTargets(browserslist(browserlistTargtsWidelyAvailable));

const entries = {
    'src/styles/theme/colors.css': 'out/colors.css',
    'src/styles/bundle.css': 'out/bundle.css',
    'src/styles/bundle_configless.css': 'out/bundle_configless.css',
    'src/styles/complete.css': 'out/complete.css',
    'src/styles/complete_configless.css': 'out/complete_configless.css',
};

for (const [filename, outFile] of Object.entries(entries)) {
    const { code } = bundle({
        targets,
        drafts: {
            customMedia: true,
        },
        filename,
    });

    fs.writeFileSync(outFile, code);
}
