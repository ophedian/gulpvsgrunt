//declarations
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//task
gulp.task('default', _default);
gulp.task('sass', _sass);
gulp.task('js', _js);


//definitions
function _sass() {
    gulp.src('app/styles/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 1 version'))
        .pipe(gulp.dest('dist/styles/gulp'));
}

function _js() {
    gulp.src('app/js/**/*.js')
        .pipe(concat('calculator.js'))
        .pipe(gulp.dest('dist/js/gulp/'))
        .pipe(rename('calculator.min.js'))
        .pipe(uglify())
        .pipe(duration('rebuilding files'));
}

function _default() {
    gulp.run(['sass', 'js']);
}