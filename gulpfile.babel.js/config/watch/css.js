import { join } from 'path';

import config from './index.js';

const { assetPath } = config;
export default {
  watchGlob: join(assetPath, '/css/**/*.css'),
};
