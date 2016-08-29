import { join } from 'path';
import atImport from 'postcss-easy-import';
import cssnext from 'postcss-cssnext';
import lost from 'lost';
import reporter from 'postcss-reporter';
import sorting from 'postcss-sorting';
import stylefmt from 'stylefmt';
import stylelint from 'stylelint';

import fs from 'fs';

// When I try to destructure this import directly, I just get undefined?
// However, it seems to work if I perform the destructure post-import.
// import { assetPath, staticPath } from "./index.js";
import config from './index.js';

const { assetPath, staticPath } = config;

const sortedConfigFile = join(process.cwd(), '.postcss-sorting');
const sortingConfigJSON = fs.readFileSync(sortedConfigFile);
const sortingConfigObj = JSON.parse(sortingConfigJSON);

export default {
  destination: join(staticPath, 'base/css'),
  lintDestination: assetPath,
  lintProcessors: [
    sorting(Object.assign({
      'empty-lines-before-comment': 1,
      'preserve-empty-lines-between-children-rules': true,
    }, sortingConfigObj)),
    stylefmt(),
    stylelint({
      reporters: [
        { formatter: 'string', console: true },
      ],
    }),
    reporter({ clearMessages: true }),
  ],
  lintSource: join(assetPath, '**/css/**/*.css'),
  processors: [
    atImport(),
    cssnext(),
    lost(),
    reporter({ clearMessages: true }),
  ],
  source: join(assetPath, 'base/css/main.css'),
};
