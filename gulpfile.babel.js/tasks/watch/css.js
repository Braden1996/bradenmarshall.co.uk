import gulp from 'gulp';

import config from '../../config/watch/css.js';

const { watchGlob } = config;
gulp.task('css:watch', ['css'], () => gulp.watch(watchGlob, ['css']));
