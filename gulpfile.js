const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
    return src('src/sass/**/*.scss').pipe(sass())
    .pipe(purgecss({
        content: ['*.html', './public/Projects/**/*/*.html', './src/*.html']
    })).pipe(dest('public/css'))
}

function watchTask() {
    watch(['src/sass/**/*.scss', '*.html', './**/**/*/*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)