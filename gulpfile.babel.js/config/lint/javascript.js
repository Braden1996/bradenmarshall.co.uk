import { join } from 'path';

import config from './index.js';


const { assetPath } = config;

export default {
  eslintOptions: {
    fix: true
  },
  source: [
    join(assetPath, '**/js/**/*.js'),
    './gulpfile.babel.js/**/*.js'
  ]
};
