import { join } from 'path';
import atImport from 'postcss-easy-import';
import cssnext from 'postcss-cssnext';
import lost from 'lost';
import reporter from 'postcss-reporter';

import config from './index.js';


// When I try to destructure from the import directly, I just get undefined?
// However, it seems to work if I perform the destructure post-import.
// import { assetPath, staticPath } from "./index.js";
const { entryPath, staticPath } = config;

export default {
  destination: join(staticPath, 'base/css'),
  processors: [
    atImport(),
    cssnext(),
    lost(),
    reporter({ clearMessages: true })
  ],
  source: join(entryPath, 'css/main.css')
};
