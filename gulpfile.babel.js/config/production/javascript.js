import { join } from 'path';

import config from './index.js';

const { destination, source } = config;
export default {
  destination,
  source: join(source, '/**/js/**/*.js'),
};
