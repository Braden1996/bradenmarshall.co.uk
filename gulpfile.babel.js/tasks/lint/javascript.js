import eslint from 'gulp-eslint';
import gulp from 'gulp';
import gulpIf from 'gulp-if';

import config from '../../config/lint/javascript.js';
import handleErrors from '../../util/handleerrors.js';


const { source, eslintOptions } = config;

// Has ESLint fixed the file contents?
function isFixed(file) {
  return file.eslint != null && file.eslint.fixed;
}

gulp.task('js:lint', () => gulp.src(source, { base: './' })
  .pipe(handleErrors())
  .pipe(eslint(eslintOptions))
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
  .pipe(gulpIf(isFixed, gulp.dest('./')))
);
