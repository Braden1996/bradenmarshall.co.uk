import { join } from 'path';

import config from './index.js';

const { assetPath, staticPath } = config;
export default {
  babelifyOptions: {
    extensions: ['.js', '.jsx'],
    ignore: 'node_modules',
    presets: ['es2015', 'react'],
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
  source: join(assetPath, '/js/main.jsx'),
};
