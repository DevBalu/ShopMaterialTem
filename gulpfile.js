var gulp 			= require('gulp'),
    autoprefixer	= require('gulp-autoprefixer'),
    browserSync 	= require('browser-sync'),
    concat 			= require('gulp-concat'),
    uglify			= require('gulp-uglifyjs'),
    jade 			= require('gulp-jade'),
    stylus 			= require('gulp-stylus');

gulp.task('jade', function(){
	return gulp.src(['prepros/jade/**/*.jade', '!prepros/jade/index.jade', '!prepros/jade/components/*.jade'])
	.pipe(jade({
        pretty: true
	}).on('error', function (error) {
            console.error('' + error);
        }))
	.pipe(gulp.dest('assets/html'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('jadeIndex', function(){
	return gulp.src('prepros/jade/index.jade')
	.pipe(jade({
        pretty: true
		}).on('error', function (error) {
            console.error('' + error);
        }))
	.pipe(gulp.dest('assets'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('stylus', function(){
	return gulp.src(['prepros/stylus/**/*.styl', '!prepros/stylus/components/*.styl'])
	.pipe(stylus().on('error', function (error) {
            console.error('' + error);
        }))
	.pipe(autoprefixer({
		browsers:['last 2 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1'],
		cascade: false
	}))
	.pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir: 'assets'
		},
		notify: false
	})
});

gulp.task('scripts', function(){
	return gulp.src([
			'assets/libs/jquery/dist/jquery.min.js',
			'assets/libs/magnific-popup/dist/jquery.magnific-popup.min.js',

		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets/js'));
});

gulp.task('watch', ['scripts', 'browser-sync', 'jadeIndex', 'jade', 'stylus'], function() {
  gulp.watch(['prepros/jade/**/*.jade', '!prepros/jade/index.jade', '!prepros/jade/components/*.jade'], ['jade']);
  gulp.watch(['prepros/jade/*.jade', 'prepros/jade/**/*.jade'], ["jadeIndex"]);
  gulp.watch('prepros/stylus/**/*.styl', ['stylus']);
  gulp.watch('assets/**', browserSync.reload());
});

gulp.task('default', ['watch']);