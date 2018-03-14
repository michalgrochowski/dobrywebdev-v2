const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const minify = require("gulp-babel-minify");
const gulpIf = require('gulp-if');
const imagemin = require('gulp-imagemin');
const del = require('del');
const cache = require('gulp-cache');
const sequence = require('run-sequence');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const babel = require('gulp-babel');
const babelCore = require('gulp-core');
const cachebust = require('gulp-cache-bust');
const replace = require('gulp-replace');

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
    })
  )
});

gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', () =>
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
);

gulp.task('useref', () =>
  gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
);

gulp.task('cachebust', function(){
  return gulp.src('dist/*.html')
    .pipe(cachebust({
      type: 'timestamp'
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('babel', () =>
  gulp.src('dist/js/main.min.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/js'))
);

gulp.task("minify", () =>
  gulp.src("dist/js/main.min.js")
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(gulp.dest("dist/js"))
);

gulp.task('cssmin', () =>
  gulp.src('dist/css/main.min.css')
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css'))
);

gulp.task('img', () =>
  gulp.src('app/img/**/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/img'))
);

gulp.task('font', () =>
  gulp.src('app/font/**/*')
    .pipe(gulp.dest('dist/font'))
);

gulp.task('fonts', () =>
  gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
);

gulp.task('php', () =>
  gulp.src('app/phpmailer/**/*')
    .pipe(gulp.dest('dist/phpmailer'))
);

gulp.task('form', () =>
  gulp.src('app/formularz.php')
    .pipe(gulp.dest('dist'))
);

gulp.task('json', () =>
  gulp.src('app/json/**/*.json')
    .pipe(gulp.dest('dist/json'))
);

gulp.task('favicons', () =>
  gulp.src('app/*.png')
    .pipe(gulp.dest('dist'))
);

gulp.task('ico', () =>
  gulp.src('app/*.ico')
    .pipe(gulp.dest('dist'))
);

gulp.task('xml', () =>
  gulp.src('app/*.xml')
    .pipe(gulp.dest('dist'))
);

gulp.task('favicon-svg', () =>
  gulp.src('app/*.svg')
    .pipe(gulp.dest('dist'))
);

gulp.task('manifest', () =>
  gulp.src('app/manifest.json')
    .pipe(gulp.dest('dist'))
);

gulp.task('serviceWorker', () =>
  gulp.src('app/serviceworker.js')
    .pipe(gulp.dest('dist'))
);

gulp.task('clean:dist', () =>
  del.sync('dist')
);

gulp.task('serviceWorkerCache', () => {
  gulp.src(['dist/serviceworker.js'])
    .pipe(replace(/(dobrywebdev-\d{0,13})/g, (match, p1, offset, string) => {
      let currentDate = Date.now();
      return 'dobrywebdev-' + currentDate;
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', () =>
  sequence(['sass', 'browserSync', 'watch'])
);

gulp.task('build', () =>
  sequence('clean:dist', ['sass', 'useref', 'img', 'font', 'fonts', 'php', 'json', 'form', 'favicons', 'xml', 'favicon-svg', 'manifest', 'ico', 'serviceWorker'], 'babel', 'minify', 'cssmin', 'cachebust', 'serviceWorkerCache')
);