import config from "./index.js";

import { join } from "path";

const { assetPath } = config;
export default {
	watchGlob: join(assetPath, "/{sass,scss}/**/*.{sass,scss}")
};
