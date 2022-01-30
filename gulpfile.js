const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
    return src('sass/**/*.scss').pipe(sass())
    .pipe(purgecss({
        content: ['*.html', './Projects/**/*/*.html']
    })).pipe(dest('css'))
}

function watchTask() {
    watch(['sass/**/*.scss', '*.html', './**/**/*/*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)