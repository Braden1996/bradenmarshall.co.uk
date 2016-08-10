import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import eslint from 'gulp-eslint';
import gulp from 'gulp';
import gulpIf from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import sourcestream from 'vinyl-source-stream';
import { basename, dirname } from 'path';

import config from '../config/javascript';
import handleErrors from '../util/handleerrors.js';

const {
  babelifyOptions,
  browserifyOptions,
  destination,
  eslintOptions,
  lintGlob,
  source,
  sourcemapDest,
} = config;

const destBase = basename(destination);
const destDirs = dirname(destination);

// Has ESLint fixed the file contents?
function isFixed(file) {
  return file.eslint != null && file.eslint.fixed;
}

// We need to do some work before we call bundle.
export function prepareBundle(bundler) {
  return bundler
    .transform(babelify, babelifyOptions);
}

// Call bundle and then convert it into a stream, so that we can pipe it.
export function pipeBundle(bundler) {
  return bundler.bundle()
    .pipe(handleErrors())
    .pipe(sourcestream(destBase))  // Get streaming vinyl file object
    .pipe(buffer())  // Convert to Buffered vinyl file object
    .pipe(sourcemaps.init({ loadMaps: true }))  // Loads map from Browserify file
    .pipe(sourcemaps.write(sourcemapDest))
    .pipe(gulp.dest(destDirs));
}

gulp.task('js:lint', () => gulp.src(lintGlob, { base: './' })
  .pipe(handleErrors())
  .pipe(eslint(eslintOptions))
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
  .pipe(gulpIf(isFixed, gulp.dest('./')))
);

gulp.task('js', ['js:lint'], () => {
  let bundler = browserify(source, browserifyOptions);
  bundler = prepareBundle(bundler);
  return pipeBundle(bundler);
});
