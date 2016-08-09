import config from "../config/javascript";
import handleErrors from "../util/handleerrors.js";

import babelify from "babelify";
import browserify from "browserify";
import buffer from "vinyl-buffer";
import gulp from "gulp";
import sourcestream from "vinyl-source-stream";
import { basename, dirname } from "path";

const { babelifyOptions, browserifyOptions, destination, source } = config;

const destBase = basename(destination);
const destDirs = dirname(destination);

// We need to do some work before we call bundle.
export function prepareBundle(bundler) {
  return bundler
    .transform(babelify, babelifyOptions);
};

// Call bundle and then convert it into a stream, so that we can pipe it.
export function pipeBundle(bundler) {
  return bundler.bundle()
    .pipe(handleErrors())
    .pipe(sourcestream(destBase))  // Get streaming vinyl file object
    .pipe(buffer())  // Convert to Buffered vinyl file object
    .pipe(gulp.dest(destDirs));
};

gulp.task("javascript", () => {
  let bundler = browserify(source, browserifyOptions);
  bundler = prepareBundle(bundler);
  return pipeBundle(bundler);
});