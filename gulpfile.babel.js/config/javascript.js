import { join } from 'path';

import config from './index.js';

const { entryPath, staticPath } = config;
export default {
  babelifyOptions: {
    extensions: ['.js'],
    ignore: 'node_modules',
    presets: ['es2015']
  },
  browserifyOptions: {
    debug: true
  },
  destination: join(staticPath, 'base/js/main.js'),
  source: join(entryPath, 'js/main.js')
};
