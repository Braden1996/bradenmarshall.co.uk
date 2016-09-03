import { join } from 'path';

import config from './index.js';

const { assetPath, staticPath } = config;
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
  eslintOptions: {
    fix: true
  },
  lintGlob: [
    join(assetPath, '**/js/**/*.js'),
    './gulpfile.babel.js/**/*.js'
  ],
  source: join(assetPath, 'braden_marshall/js/main.js')
};
