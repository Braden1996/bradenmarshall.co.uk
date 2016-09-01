import assign from 'lodash.assign';
import browserify from 'browserify';
import gulp from 'gulp';
import runSequence from 'run-sequence';
import watchify from 'watchify';
import { log, colors } from 'gulp-util';

import config from '../../config/javascript';
import { pipeBundle, prepareBundle } from '../javascript';

const { browserifyOptions, source } = config;

gulp.task('js:watch', ['js:lint'], () => {
  let bundler = browserify(source, assign({
    cache: {},
    packageCache: {}
  }, browserifyOptions));

  bundler = prepareBundle(bundler);

  bundler = watchify(bundler);

  const updateCallback = () => {
    const updateStart = Date.now();
    log(`Starting '${colors.cyan('Rebundling')}'...`);
    pipeBundle(bundler);
    log(`Finished '${colors.cyan('Rebundling')}' after` +
      `${colors.magenta(`${Date.now() - updateStart}ms`)}`);
  };

  bundler.on('update', () => runSequence('js:lint', updateCallback));

  return pipeBundle(bundler);
});
