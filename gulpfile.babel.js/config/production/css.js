import { join } from 'path';
import cssnano from 'cssnano';

import config from './index.js';

const { destination, source } = config;
export default {
  destination,
  processors: [
    cssnano(),
  ],
  source: join(source, '/**/css/**/*.css'),
};
