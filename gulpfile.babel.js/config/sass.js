// How come when I attempt to destructure this default import, both variables
// are undefined? But, when I do perform the same destructure operation later
// it works as expected?
//import { assetPath, staticPath } from "./index.js";
import config from "./index.js";

import { join } from "path";

const { assetPath, staticPath } = config;
export default {
  destination: join(staticPath, "css"),
  lintOptions: {},
  prefixOptions: {},
  sassOptions: {
    indentedSyntax: true,
    imagePath: "images",
    includePaths: "bower_components"
  },
  source: join(assetPath, "scss/main.scss")
};
