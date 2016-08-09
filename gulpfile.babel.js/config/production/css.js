import config from "./index.js";
import sassConfig from "../sass.js";

import { join } from "path";

const { destination, source  } = config;
const { prefixOptions } = sassConfig;
export default {
  destination,
  prefixOptions: prefixOptions,
  source: join(source, "/**/css/**/*.css")
};
