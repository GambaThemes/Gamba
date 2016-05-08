/**
 * Module Dependencies
 */

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync'),
    inject = require('gulp-inject'),
    gutil = require('gulp-util'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    concat = require('gulp-concat'),
    bower = require('main-bower-files');
// var connect = require('gulp-connect');
// var uglify = require('gulp-uglify');
// var clean = require('gulp-clean');
// var notify       = require('gulp-notify');
// var runSequence = require('run-sequence');


/**
 * Config
 */

var paths = {
  styles: 
    'src/client/public/scss/'
  ,
  scripts: [
    'src/client/core/*.js',
    'src/client/views/**/*.js'
  ],
  html: [
    'src/client/views/**/*.html'
  ],
  libsCss: [
    './src/client/public/libs/bootstrap/dist/css/bootstrap.min.css',
    './src/client/public/libs/Ionicons/css/ionicons.css',
    './src/client/public/libs/font-awesome/css/font-awesome.css',
    './src/client/public/libs/animate.css/animate.css',
    './src/client/public/libs/angular-gridster/dist/angular-gridster.min.css'
  ],
  server: [
    './src/server/bin/www'
  ]
};

var nodemonConfig = {
  script: paths.server,
  ext: 'html js',
  ignore: ['node_modules']
};

var AUTOPREFIXER_BROWSERS = [  
'ie >= 10', 'ie_mob >= 10', 'ff >= 30', 'chrome >= 34', 'Safari >= 7', 'Opera >= 23', 'iOS >= 7', 'ChromeAndroid >= 4.4', 'bb >= 10'
]; 


/**
 * Gulp Tasks
 */

gulp.task('nodemon', function (cb) {
  var called = false;
  nodemon(nodemonConfig)
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
      browserSync.reload();
    }, 1000);
  });
});

gulp.task('sassDev', function() {
  var opts = {comments:true, spare:true};
  return gulp.src([paths.styles + '*.scss', '!' + paths.styles + 'all.scss'])
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./src/client/public/css-dev/'));
});

gulp.task('includeDev', ['sassDev'], function () {
  var target = gulp.src('src/client/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['src/client/public/css-dev/**/*.css'], {read: false});
 
  return target.pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest('src/client'));
});

gulp.task('lint', function() {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('serveDev', ['nodemon', 'lint', 'includeDev'], function() {
	browserSync.init({
    proxy: "localhost:3000",  // local node app address
    port: 5000,  // use *different* port than above
    notify: false,
    open: false
  	});
	gulp.watch(paths.styles + '**/*.scss', function(file) {
		return gulp.src(file.path)
			.pipe(sass())
			.on('error', sass.logError)
			.pipe(gulp.dest('./src/client/public/css-dev'))
			.pipe(browserSync.reload({stream:true}));
	});
});

gulp.task('sass', function() {
  return gulp.src(paths.styles + 'all.scss')
    .pipe(sass())
    .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
    .on('error', sass.logError)
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest('./src/client/public/css/'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('minify-libs-css', function() {
  gulp.src(paths.libsCss)
    .pipe(concat('libs.css'))
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest('./src/client/public/css/'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('includeDist', ['sass'], function () {
  var target = gulp.src('src/client/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['src/client/public/css/**/*.css'], {read: false});
 
  return target.pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest('src/client'));
});

gulp.task('serveDist', ['nodemon', 'lint', 'minify-libs-css', 'includeDist'], function() {
  browserSync.init({
    proxy: "localhost:3000",  // local node app address
    port: 5000,  // use *different* port than above
    notify: true,
    open: false
   });
  gulp.watch(paths.styles + '**/*.scss', ['sass']);
});

// *** build task *** //
gulp.task('build', function() {
  runSequence(
    ['lint', 'minify-libs-css', 'includeDist']
  );
});

gulp.task('default', ['default']);




// TASK IN DEVELOPMENT

gulp.task("bower-files", function(){
  return gulp.src(bower())
        .pipe(gulp.dest("./lib"));
});
