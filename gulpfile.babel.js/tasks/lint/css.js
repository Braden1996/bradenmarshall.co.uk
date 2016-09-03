import changedInPlace from 'gulp-changed-in-place';
import gulp from 'gulp';
import postcss from 'gulp-postcss';

import config from '../../config/lint/css.js';
import handleErrors from '../../util/handleerrors.js';


const { lintDestination, lintProcessors, lintSource } = config;

gulp.task('css:lint', () => gulp.src(lintSource)
	.pipe(handleErrors())
	.pipe(changedInPlace({ firstPass: true }))
	.pipe(postcss(lintProcessors))
	.pipe(gulp.dest(lintDestination))
);
