import gulp from 'gulp';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';

import config from '../config/css.js';
import handleErrors from '../util/handleerrors.js';


const { destination, processors, source } = config;

gulp.task('css', ['css:lint'], () => gulp.src(source)
	.pipe(handleErrors())
	.pipe(sourcemaps.init())
	.pipe(postcss(processors))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(destination))
);
