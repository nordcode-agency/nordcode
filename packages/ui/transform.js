import { browserslistToTargets, bundle } from "lightningcss";
import browserslist from "browserslist";
import fs from "fs";

let targets = browserslistToTargets(browserslist(">= 0.25%"));

let { code } = bundle({
  // ...
  targets,
  drafts: {
    nesting: true,
    customMedia: true,
  },
  filename: "src/styles/bundle.css",
  // minify: true,
});

fs.writeFileSync("out/bundle.css", code);

let { code: codeComplete } = bundle({
  // ...
  targets,
  drafts: {
    nesting: true,
    customMedia: true,
  },
  filename: "src/styles/complete.css",
  // minify: true,
});

fs.writeFileSync("out/complete.css", codeComplete);

let { code: codeCompleteConfigless } = bundle({
  // ...
  targets,
  drafts: {
    nesting: true,
    customMedia: true,
  },
  filename: "src/styles/complete_configless.css",
  // minify: true,
});

fs.writeFileSync("out/complete_configless.css", codeCompleteConfigless);
