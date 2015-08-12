/*!
 * gulp
 * $ npm install gulp-bower merge2 gulp-coffee gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-rename gulp-cache del --save-dev
 */

var gulp = require('gulp'),
    bower = require('gulp-bower')
    merge2 = require('merge2'),
    coffee = require('gulp-coffee'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    cache = require('gulp-cache'),
    del = require('del');

var STATIC_URL = 'static';

var CONFIG = {
  PATHS: {
    STYLES: {
      FILENAME: 'main.css',
      DEST: 'static/css',

      CSS: {
        SRC: ['collectedstatic/**/css/**/*.css'],
        WATCH: 'collectedstatic/**/css/**/*.css'
      },

      SCSS: {
        SRC: ['collectedstatic/scss/main.scss'],
        INCLUDE: ['./bower_components/foundation/scss'],
        WATCH: 'collectedstatic/**/scss/**/*.scss'
      }
    },

    SCRIPTSHEAD: {
      FILENAME: 'mainhead.js',
      DEST: 'static/js',

      COFFEE: {
        SRC: ['collectedstatic/**/coffeehead/**/*.coffee'],
      },

      JS: {
        SRC: ['./bower_components/modernizr/modernizr.js'],
      }
    },

    SCRIPTSBODY: {
      FILENAME: 'main.js',
      DEST: 'static/js',

      COFFEE: {
        SRC: ['collectedstatic/**/coffee/**/*.coffee'],
      },

      JS: {
        SRC: ['./bower_components/fastclick/lib/fastclick.js',
              './bower_components/jquery/dist/jquery.js',
              './bower_components/jquery.cookie/jquery.cookie.js',
              './bower_components/jquery-placeholder/jquery-placeholder.js',
              './bower_components/foundation/js/foundation.js',
              'collectedstatic/**/js/**/*.js']
      }
    },

    IMG: {
      SRC: ['collectedstatic/**/img/**/*'],
      DEST: 'static/img'
    }
  }
};

gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest(config.bowerDir)) 
});

gulp.task('styles', function() {
  return merge2(gulp.src(CONFIG.PATHS.STYLES.CSS.SRC),
      sass(CONFIG.PATHS.STYLES.SCSS.SRC, {
        loadPath: CONFIG.PATHS.STYLES.SCSS.INCLUDE,
        // gem install compass --pre
        compass: true
      })
      .on('error', function (err) {
            console.error('SASS Compile Error:', err.message);
      })
    )
    .pipe(autoprefixer('last 2 version'))
    .pipe(concat(CONFIG.PATHS.STYLES.FILENAME))
    .pipe(gulp.dest(CONFIG.PATHS.STYLES.DEST))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(CONFIG.PATHS.STYLES.DEST))
});

function pipeJS(fileName, destinationPath, obj){
  return obj
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat(fileName))
    .pipe(gulp.dest(destinationPath))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(destinationPath));
}

gulp.task('scriptshead', function() {
  return pipeJS(CONFIG.PATHS.SCRIPTSHEAD.FILENAME, CONFIG.PATHS.SCRIPTSHEAD.DEST,
    merge2(gulp.src(CONFIG.PATHS.SCRIPTSHEAD.JS.SRC),
      gulp.src(CONFIG.PATHS.SCRIPTSHEAD.COFFEE.SRC)
        .pipe(coffee())
        .on('error', function (err) {
              console.error('Coffee Compile Error:', err.message);
        })
    ));
});

gulp.task('scriptsbody', function() {
  return pipeJS(CONFIG.PATHS.SCRIPTSBODY.FILENAME, CONFIG.PATHS.SCRIPTSBODY.DEST,
    merge2(gulp.src(CONFIG.PATHS.SCRIPTSBODY.JS.SRC),
      gulp.src(CONFIG.PATHS.SCRIPTSBODY.COFFEE.SRC)
        .pipe(coffee())
        .on('error', function (err) {
              console.error('Coffee Compile Error:', err.message);
        })
    ));
});

gulp.task('scripts', function() {
  return gulp.start('scriptshead', 'scriptsbody')
});

gulp.task('images', function() {
  return gulp.src(CONFIG.PATHS.IMG.SRC)
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(CONFIG.PATHS.IMG.DEST))
});

gulp.task('clean', function(cb) {
    return del([CONFIG.PATHS.STYLES.DEST,
      CONFIG.PATHS.SCRIPTSHEAD.DEST,
      CONFIG.PATHS.SCRIPTSBODY.DEST,
      CONFIG.PATHS.IMG.DEST], cb);
});

gulp.task('default', ['clean'], function() {
    return gulp.start('styles', 'scripts', 'images');
});

gulp.task('watch', function() {
  gulp.watch(CONFIG.PATHS.STYLES.CSS.WATCH, ['styles']);
  gulp.watch(CONFIG.PATHS.STYLES.SCSS.WATCH, ['styles']);

  gulp.watch(CONFIG.PATHS.SCRIPTSHEAD.JS.SRC, ['scriptshead']);
  gulp.watch(CONFIG.PATHS.SCRIPTSHEAD.COFFEE.SRC, ['scriptshead']);

  gulp.watch(CONFIG.PATHS.SCRIPTSBODY.JS.SRC, ['scriptsbody']);
  gulp.watch(CONFIG.PATHS.SCRIPTSBODY.COFFEE.SRC, ['scriptsbody']);

  gulp.watch(CONFIG.PATHS.IMG.SRC, ['images']);
});
