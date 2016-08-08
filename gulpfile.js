//declarations
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


//task definitions
gulp.task('sass', function () {
    return gulp.src('app/styles/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 1 version'))
        .pipe(gulp.dest('dist/styles/gulp'));
});

gulp.task('js', function(){
    return gulp.src('app/js/**/*.js')
        .pipe(concat('calculator.js'))
        .pipe(gulp.dest('dist/js/gulp/'))
        .pipe(rename('calculator.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/gulp'));
});

gulp.task('default', function () {
    gulp.run('sass', 'js');
});