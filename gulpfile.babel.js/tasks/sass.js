import autoprefixer from 'gulp-autoprefixer';
import gulp from 'gulp';
import sass from 'gulp-sass';
import sassLint from 'gulp-sass-lint';
import sourcemaps from 'gulp-sourcemaps';

import config from '../config/sass.js';
import handleErrors from '../util/handleerrors.js';

const { destination, lintOptions, prefixOptions, sassOptions, source } = config;

gulp.task('sass:lint', () => gulp.src(source)
	.pipe(handleErrors())
	.pipe(sassLint(lintOptions))
	.pipe(sassLint.format())
    .pipe(sassLint.failOnError())
);

gulp.task('sass', ['sass:lint'], () => gulp.src(source)
	.pipe(handleErrors())
	.pipe(sourcemaps.init())
		.pipe(sass(sassOptions))
		.pipe(autoprefixer(prefixOptions))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(destination))
);
