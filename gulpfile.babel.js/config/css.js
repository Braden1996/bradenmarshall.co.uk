import { join } from 'path';
import atImport from 'postcss-easy-import';
import cssnext from 'postcss-cssnext';
import reporter from 'postcss-reporter';
import sorting from 'postcss-sorting';
import stylefmt from 'stylefmt';
import stylelint from 'stylelint';

// When I try to destructure this import directly, I just get undefined?
// However, it seems to work if I perform the destructure post-import.
// import { assetPath, staticPath } from "./index.js";
import config from './index.js';

const { assetPath, staticPath } = config;

export default {
  destination: join(staticPath, 'css'),

  lintDestination: join(assetPath, 'css'),
  lintProcessors: [
    sorting({
      'empty-lines-before-comment': 1,
      'preserve-empty-lines-between-children-rules': true,
    }),
    stylefmt(),
    stylelint({
      reporters: [
        { formatter: 'string', console: true },
      ],
    }),
    reporter({ clearMessages: true }),
  ],
  lintSource: join(assetPath, 'css/**/*.css'),
  processors: [
    atImport(),
    cssnext(),
    reporter({ clearMessages: true }),
  ],
  source: join(assetPath, 'css/main.css'),
};
