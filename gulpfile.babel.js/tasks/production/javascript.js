import gulp from 'gulp';
import uglify from 'gulp-uglify';

import config from '../../config/production/javascript';

const { destination, source } = config;

gulp.task('js:production', () => gulp.src(source)
	.pipe(uglify())
	.pipe(gulp.dest(destination))
);
