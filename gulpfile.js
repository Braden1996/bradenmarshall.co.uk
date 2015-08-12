var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var bowerlib = require('bower-files')();
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var del = require('del');
var gzip = require('gulp-gzip');
var runSequence = require('run-sequence');
var sass = require('gulp-ruby-sass');
var minifycss = require('gulp-minify-css');
var watch = require('gulp-watch');
var shell = require('gulp-shell');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

var DIR_BOWER = 'bower_components';;

var DIR_SRC = 'src/**/static';
var DIR_DEST = 'static';;

var DIR_PROJECT = 'src/braden_marshall';
var DIR_SRC_PROJECT = DIR_PROJECT + '/assets';
var DIR_DEST_PROJECT = DIR_PROJECT + '/static';

var OPTIONS = {
  COLLECTSTATIC: {
    watch: 'src/**/static/**/*.*'
  },

  CSS: {
    src: DIR_DEST + '/**/css/**/*.css',
    dest: DIR_DEST,
    watch: DIR_DEST + '/**/css/**/*.css'
  },

  SCSS: {
    src: DIR_SRC_PROJECT + '/scss/main.scss',
    dest: DIR_DEST_PROJECT + '/css',
    filename: 'main.css',
    watch: DIR_SRC_PROJECT + 'assets/scss/main.scss',
    config: {
      compass: true,
      loadPath: [
        DIR_BOWER + '/foundation/scss',
        DIR_BOWER + '/mathsass'
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

  DEL: {
    build: DIR_DEST_PROJECT,
    production: DIR_DEST + '/*'
  }
};

// Delete task
gulp.task('deletebuild', function() {
  del(OPTIONS.DEL['build']);
});

gulp.task('deleteprod', function() {
  del(OPTIONS.DEL['production']);
});

gulp.task('delete', ['deletebuild', 'deleteprod']);

// Execute collectstatic
gulp.task('collectstatic', shell.task([
  'python src/manage.py collectstatic --noinput'
]));

// Compile our CSS
gulp.task('css', function() {
  return gulp.src(OPTIONS.CSS['src'])
    .pipe(autoprefixer())
    .pipe(minifycss())
    .pipe(gulp.dest(OPTIONS.CSS['dest']));
});

// Compile our SCSS
gulp.task('scss', function() {
  return sass(OPTIONS.SCSS['src'], OPTIONS.SCSS['config'])
    .on('error', gutil.log)
    .pipe(gulp.dest(OPTIONS.SCSS['dest']));
});

// Compile Bower JavaScript
gulp.task('bowerjs', function() {
  return gulp.src(bowerlib.ext('js').files)
    .pipe(concat(OPTIONS.BOWERJS['filename']))
    .pipe(gulp.dest(OPTIONS.BOWERJS['dest']));
});

// Compile our JavaScript
gulp.task('js', function() {
  return gulp.src(OPTIONS.JS['src'])
    .pipe(uglify())
    .pipe(gulp.dest(OPTIONS.JS['dest']));
});

// Compile our CoffeeScript
gulp.task('coffee', function() {
  return gulp.src(OPTIONS.COFFEE['src'])
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(concat(OPTIONS.COFFEE['filename']))
    .pipe(gulp.dest(OPTIONS.COFFEE['dest']));
});

// Execute all our development tasks
gulp.task('buildapp', ['deletebuild'], function(){
  runSequence(
    ['scss', 'coffee', 'bowerjs']
  );
});

// Execute all our production tasks
gulp.task('buildprod', ['deleteprod'], function(){
  runSequence(
    'collectstatic',
    ['css', 'js']
  );
});

// Default task
gulp.task('default', function() {
  runSequence(
    'buildapp',
    'buildprod'
  );
});

// Watch Files For Changes
gulp.task('watch', ['default'], function() {
  gulp.watch(OPTIONS.COLLECTSTATIC['watch'], ['collectstatic']);
  gulp.watch(OPTIONS.CSS['watch'], ['css']);
  gulp.watch(OPTIONS.SCSS['watch'], ['scss']);
  gulp.watch(OPTIONS.JS['watch'], ['js']);
  gulp.watch(OPTIONS.COFFEE['watch'], ['coffee']);
});
