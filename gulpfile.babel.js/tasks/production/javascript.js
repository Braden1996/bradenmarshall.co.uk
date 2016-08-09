import config from "../../config/production/javascript";

import gulp from "gulp";
import uglify from 'gulp-uglify';

const { destination, source } = config;

gulp.task("javascript:production", () => gulp.src(source)
	.pipe(uglify())
	.pipe(gulp.dest(destination))
);
