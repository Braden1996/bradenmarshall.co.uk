import { join } from 'path';
import fs from 'fs';
import sorting from 'postcss-sorting';
import reporter from 'postcss-reporter';
// import stylefmt from 'stylefmt';
import stylelint from 'stylelint';

import config from './index.js';


const { assetPath } = config;

const sortedConfigFile = join(process.cwd(), '.postcss-sorting');
const sortingConfigJSON = fs.readFileSync(sortedConfigFile);
const sortingConfigObj = JSON.parse(sortingConfigJSON);

export default {
  lintDestination: assetPath,
  lintProcessors: [
    sorting(Object.assign({
      'empty-lines-before-comment': 1,
      'empty-lines-between-media-rules': 1,
      'preserve-empty-lines-between-children-rules': true
    }, sortingConfigObj)),
    stylelint({
      reporters: [
        { formatter: 'string', console: true }
      ]
    }),
    reporter({ clearMessages: true })
  ],
  lintSource: join(assetPath, '**/css/**/*.css')
};
