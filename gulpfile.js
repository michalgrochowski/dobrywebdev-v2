var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var del = require('del');
var cache = require('gulp-cache');
var sequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'IE 10-11',],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});

gulp.task('useref', function(){
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'))
});

gulp.task('uglify', function() {
    return gulp.src('dist/js/main.min.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})

gulp.task('cssmin', function() {
    return gulp.src('dist/css/main.min.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'))
})

gulp.task('img', function(){
    return gulp.src('app/img/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/img'))
});

gulp.task('font', function(){
    return gulp.src('app/font/**/*')
        .pipe(gulp.dest('dist/font'))
});

gulp.task('fonts', function(){
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('php', function(){
    return gulp.src('app/phpmailer/**/*')
        .pipe(gulp.dest('dist/phpmailer'))
});

gulp.task('form', function(){
    return gulp.src('app/formularz.php')
        .pipe(gulp.dest('dist'))
});

gulp.task('json', function(){
    return gulp.src('app/json/**/*.json')
        .pipe(gulp.dest('dist/json'))
});

gulp.task('clean:dist', function(){
    return del.sync('dist');
});

gulp.task('default', function(){
    sequence(['sass', 'browserSync', 'watch'])
});

gulp.task('build', function(){
    sequence('clean:dist', ['sass', 'useref', 'img', 'font', 'fonts', 'php', 'json', 'form'], 'uglify', 'cssmin')
});