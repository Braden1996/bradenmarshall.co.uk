var config       = require("../../config/production/css");
var gulp         = require("gulp");
var autoprefixer = require('gulp-autoprefixer');
var minifyCss    = require("gulp-minify-css");

gulp.task("production-css", function() {
	return gulp.src(config.source)
		.pipe(autoprefixer())
		.pipe(minifyCss())
		.pipe(gulp.dest(config.destination));
});
