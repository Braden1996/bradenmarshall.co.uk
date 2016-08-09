import config from "./index.js";

import { join } from "path";

const { assetPath, staticPath } = config;
export default {
	babelifyOptions: {
      presets: ["es2015"],
      ignore: "bower_components",
      extensions: [".js"]
    },
	browserifyOptions: {
	  debug: true
	},
	destination: join(staticPath, "/js/main.js"),
	source: join(assetPath, "/js/main.js")
};
