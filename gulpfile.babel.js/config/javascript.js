import { join } from 'path';

import config from './index.js';

const { assetPath, staticPath } = config;
export default {
  babelifyOptions: {
    presets: ['es2015'],
    ignore: 'bower_components',
    extensions: ['.js'],
  },
  browserifyOptions: {
    debug: true,
  },
  destination: join(staticPath, '/js/main.js'),
  eslintOptions: {
    fix: true,
  },
  lintGlob: [
    join(assetPath, '/js/**/*.{js,jsx}'),
    './gulpfile.babel.js/**/*.js',
  ],
  source: join(assetPath, '/js/main.js'),
};
