import config from "./index.js";

import { join } from "path";

const { destination, source } = config;
export default {
  destination,
  source: join(source, "/**/js/**/*.js")
};
