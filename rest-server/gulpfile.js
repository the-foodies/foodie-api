const gulp = require('gulp');
const ts = require('gulp-typescript');

const JSON_FILES = ['src/*.json', 'src/**/*.json'];
const JS_FILES = ['src/*.js', 'src/**/*.js'];

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
    .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('assets', () => {
  gulp.src(JSON_FILES).pipe(gulp.dest('dist'));
  gulp.src(JS_FILES).pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch', 'assets']);
