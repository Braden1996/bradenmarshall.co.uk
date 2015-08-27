var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var coffee = require('gulp-coffee');
var coffeelint = require('gulp-coffeelint');
var concat = require('gulp-concat');
var del = require('del');
var gzip = require('gulp-gzip');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var mainBowerFiles = require('main-bower-files');
var notifier = require('node-notifier');


// General Directories
var DIR_BOWER = 'bower_components';
var DIR_SRC = 'src/**/static';
var DIR_DEST = 'static';
var DIR_PROJECT = 'src/braden_marshall';
var DIR_SRC_PROJECT = DIR_PROJECT + '/assets';
var DIR_DEST_PROJECT = DIR_PROJECT + '/static';


// Task-Specific Directories
var OPTIONS = {
  CSS: {
    src: DIR_DEST + '/**/css/**/*.css',
    dest: DIR_DEST,
    watch: DIR_DEST + '/**/css/**/*.css'
  },

  SCSS: {
    src: DIR_SRC_PROJECT + '/scss/main.scss',
    dest: DIR_DEST_PROJECT + '/css',
    filename: 'main.css',
    watch: DIR_SRC_PROJECT + '/scss/**/*.scss',
    config: {
      includePaths: [
        DIR_BOWER + "/normalize-css",
        DIR_BOWER + "/mathsass/dist",
        DIR_BOWER + "/bourbon/app/assets/stylesheets/",
        DIR_BOWER + "/bitters/app/assets/stylesheets/",
        DIR_BOWER + "/neat/app/assets/stylesheets/"
      ]
    }
  },

  BOWERJS: {
    dest: DIR_DEST_PROJECT + '/js',
    filename: 'lib.js',
  },

  JS: {
    src: DIR_DEST + '/**/js/**/*.js',
    dest: DIR_DEST,
    watch: DIR_DEST + '/**/js/**/*.js'
  },

  COFFEE: {
    src: DIR_SRC_PROJECT + '/coffee/**/*.coffee',
    dest: DIR_DEST_PROJECT + '/js',
    filename: 'main.js',
    watch: DIR_SRC_PROJECT + '/coffee/**/*.coffee'
  },

  GZIP: {
    threshold: '1kb',
    gzipOptions: {
      level: 9
    }
  },
};


// Safely Log Errors
function swallowError(error){
  notifier.notify({
    'title': 'Gulp: an error has occured!',
    'message': error.stack
  });
  gutil.log(gutil.colors.red('Error'), error);
  this.end();
}


// Stylesheets (CSS & SCSS)
gulp.task('scss', function() {
  return gulp.src(OPTIONS.SCSS['src'])
    .pipe(sass(OPTIONS.SCSS['config']).on('error', swallowError))
    .pipe(gulp.dest(OPTIONS.SCSS['dest']));
});

gulp.task('css', function() {
  return gulp.src(OPTIONS.CSS['src'])
    .pipe(autoprefixer())
    .pipe(minifycss())
    .pipe(gulp.dest(OPTIONS.CSS['dest']));
});


// CoffeeScript
gulp.task('coffeelint', function() {
  return gulp.src(OPTIONS.COFFEE['src'])
    .pipe(coffeelint())
    .pipe(coffeelint.reporter('coffeelint-stylish'))
});

gulp.task('coffee', ['coffeelint'], function() {
  return gulp.src(OPTIONS.COFFEE['src'])
    .pipe(coffee().on('error', swallowError))
    .pipe(concat(OPTIONS.COFFEE['filename']))
    .pipe(gulp.dest(OPTIONS.COFFEE['dest']));
});


// JavaScript
gulp.task('bowerjs', function() {
  return gulp.src(mainBowerFiles(["**/*.js"]))
    .pipe(concat(OPTIONS.BOWERJS['filename']))
    .pipe(gulp.dest(OPTIONS.BOWERJS['dest']));
});

gulp.task('js', function() {
  return gulp.src(OPTIONS.JS['src'])
    .pipe(uglify())
    .pipe(gulp.dest(OPTIONS.JS['dest']));
});


// Development Tasks
gulp.task('deletedev', function() {
  del(OPTIONS.COFFEE['dest'] + "/" + OPTIONS.COFFEE['filename']);
  del(OPTIONS.SCSS['dest']);
});

gulp.task('builddev', ['deletedev'], function(){
  runSequence(
    ['scss', 'coffee', 'bowerjs']
  );
});


// Production Tasks
gulp.task('deleteprod', function() {
  del(DIR_DEST + '/*');
});

gulp.task('buildprod', ['deleteprod'], function(){
  runSequence(
    ['css', 'js']
  );
});


// Default Tasks
gulp.task('default', function() {
  runSequence(
    'builddev',
    'buildprod'
  );
});


// Delete Everything!
gulp.task('delete', ['deletebuild', 'deleteprod']);


// Watch Files For Changes
gulp.task('watch', ['default'], function() {
  gulp.watch(OPTIONS.SCSS['watch'], ['scss']);
  gulp.watch(OPTIONS.COFFEE['watch'], ['coffee']);
  gulp.watch(OPTIONS.CSS['watch'], ['css']);
  gulp.watch(OPTIONS.JS['watch'], ['js']);
});
