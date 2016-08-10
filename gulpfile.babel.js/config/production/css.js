import { join } from 'path';

import config from './index.js';
import sassConfig from '../sass.js';

const { destination, source } = config;
const { prefixOptions } = sassConfig;
export default {
  destination,
  prefixOptions,
  source: join(source, '/**/css/**/*.css'),
};
