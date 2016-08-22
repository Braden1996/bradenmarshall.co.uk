import { join } from 'path';

import config from './index.js';

const { assetPath, staticPath } = config;
export default {
  babelifyOptions: {
    extensions: [
      '.js',
      '.jsx',
    ],
    ignore: 'node_modules',
    plugins: [
      'transform-class-properties',
    ],
    presets: [
      'react',
      'es2015',
    ],
  },
  browserifyOptions: {
    debug: true,
  },
  destination: join(staticPath, '/js/main.js'),
  eslintOptions: {
    fix: true,
    plugins: ['react'],
  },
  lintGlob: [
    join(assetPath, '/js/**/*.{js,jsx}'),
    './gulpfile.babel.js/**/*.js',
  ],
  source: join(assetPath, '/js/main.jsx'),
};
