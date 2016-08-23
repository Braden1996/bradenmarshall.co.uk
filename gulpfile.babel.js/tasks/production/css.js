import gulp from 'gulp';
import postcss from 'gulp-postcss';

import config from '../../config/production/css';

const { destination, processors, source } = config;

gulp.task('css:production', () => gulp.src(source)
	.pipe(postcss(processors))
	.pipe(gulp.dest(destination))
);
