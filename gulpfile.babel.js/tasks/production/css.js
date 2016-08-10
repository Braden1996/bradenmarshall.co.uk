import autoprefixer from 'gulp-autoprefixer';
import cssnano from 'gulp-cssnano';
import gulp from 'gulp';

import config from '../../config/production/css';

const { destination, prefixOptions, source } = config;

gulp.task('css:production', () => gulp.src(source)
	.pipe(autoprefixer(prefixOptions))
	.pipe(cssnano())
	.pipe(gulp.dest(destination))
);
