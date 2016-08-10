import gulp from 'gulp';

import config from '../../config/watch/sass.js';

const { watchGlob } = config;
gulp.task('sass:watch', ['sass'], () => gulp.watch(watchGlob, ['sass']));
