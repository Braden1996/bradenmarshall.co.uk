import { join } from 'path';
import atImport from 'postcss-import';
import cssnext from 'postcss-cssnext';
import reporter from 'postcss-reporter';
import stylelint from 'stylelint';

// When I try to destructure this import directly, I just get undefined?
// However, it seems to work if I perform the destructure post-import.
// import { assetPath, staticPath } from "./index.js";
import config from './index.js';

const { assetPath, staticPath } = config;

export default {
  destination: join(staticPath, 'css'),
  processors: [
    atImport({
      plugins: [
        stylelint({
          reporters: [
            { formatter: 'string', console: true },
          ],
        }),
      ],
    }),
    cssnext(),
    reporter({
      clearMessages: true,
    }),
  ],
  source: join(assetPath, 'css/main.css'),
};
