var handleErrors = require("../util/handleErrors");
var config       = require("../config/sass");
var browserSync  = require("browser-sync");
var gulp         = require("gulp");
var sass         = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function() {
  return gulp.src(config.source)
    .pipe(sass(config.settings))
    .on("error", handleErrors.swallowError)
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.destination))
    .pipe(browserSync.reload({stream:true}));
});
