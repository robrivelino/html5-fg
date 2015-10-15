'use strict';

let gulp = require('gulp');
let gutil = require('gulp-util');
let spawn = require('child_process').spawn;
let jshint = require('gulp-jshint');
let stylish = require('jshint-stylish');
let argv = require('yargs').argv;
let plumber = require('gulp-plumber');
let browserSync = require('browser-sync').create();
let jade = require('gulp-jade');
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');
let autoprefixer = require('gulp-autoprefixer');
let spritesmith = require('gulp.spritesmith');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let inject = require('gulp-inject');

let lintScripts = [
	'./gulpfile.js',
	'./assets/scripts/**/*.js'
];

let files = {
	views: {
		src: './assets/views/*.jade',
		dest: './public/'
	},
	styles: {
		src: './assets/styles/*.scss',
		dest: './public/styles/'
	},
	scripts: {
		src: './assets/scripts/**/*.js',
		dest: './public/scripts/'
	},
	sprites: {
		src: './assets/sprites/*.png',
		dest: './public/imgs/sprites/'
	}
};

let onError = function (err) {
	var message;
	switch (err.plugin) {
		case 'gulp-sass':
			let messageFormatted = err.messageFormatted;
			message = new gutil.PluginError('gulp-sass', messageFormatted).toString();
			process.stderr.write(message + '\n');
			break;
		case 'gulp-jade':
			message = new gutil.PluginError('gulp-jade', err.message).toString();
			process.stderr.write(message + '\n');
			break;
		default:
			message = new gutil.PluginError(err.plugin, err.message).toString();
			process.stderr.write(message + '\n');

	}
	gutil.beep();
};
gulp.task('browser-sync', function() {
	
	browserSync.init({
		server: {
			baseDir: './public'
		},
		notify: false,
		reloadDelay: 100,
		open: argv.open
	});
});

gulp.task('sprites', function() {
	let options = {
		imgName: 'sprites.png',
		cssName: 'sprite-vars.scss',
		imgPath: '../imgs/sprites/sprites.png',
		algorithm: 'binary-tree',
		engine: 'pngsmith',
		cssVarMap: function (sprite) {
			sprite.name = 'sprite-'+sprite.name;
		}
	};
	let sprite = gulp.src(files.sprites.src)
		.pipe(plumber())
		.pipe(spritesmith(options));

	sprite.img.pipe(gulp.dest(files.sprites.dest));
	sprite.css.pipe(gulp.dest('./assets/styles/components/'));
});

gulp.task('styles', function() {
	let bower = require('bower-files')();
	let dependencies = bower.relative(__dirname).ext('scss').files;
	let util = require('util');
	let injectTransform = {
		starttag: '/* inject:imports */',
		endtag: '/* endinject */',
		transform: function (filepath) {
			return util.format('@import \'../..%s\';', filepath);
		}
	};

	let injectConfig = {
		read: false,
		relative: false
	};
	
	let configPreprocessor = {
		outputStyle: 'compressed'
	};

	gulp
		.src(files.styles.src)
		.pipe(inject(gulp.src(dependencies, injectConfig), injectTransform))
		.pipe(sourcemaps.init())
		.pipe(sass(configPreprocessor).on('error', onError))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(files.styles.dest))
		.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	gulp
		.src(files.scripts.src)
		.pipe(plumber({ errorHandler: onError }))
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(uglify({mangle: false}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(files.scripts.dest));
});

gulp.task('views', function() {
	gulp
		.src(files.views.src)
		.pipe(plumber({ errorHandler: onError }))
		.pipe(jade())
		.pipe(gulp.dest(files.views.dest));
});

gulp.task('dependencies', function() {
	let bower = require('bower-files')();

	gulp
		.src(bower.ext('css').files)
		.pipe(concat('vendor.css'))
		.pipe(uglify())
		.pipe(gulp.dest('./public/styles'));

	gulp
		.src(bower.ext('js').files)
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./public/scripts'));
});

gulp.task('watch-gulpfile', function() {
	var process;
	gulp
		.watch('gulpfile.js', function() {
			if (process) {
				process.kill();
			}
			// let task = argv.task ? argv.task : 'default';
			process = spawn('gulp', [], {stdio: 'inherit'});
		});
});

gulp.task('lint', function() {
	let beep = function() {
		gutil.beep();
	};

	gulp
		.src(lintScripts)
		.pipe(jshint())
		.pipe(jshint.reporter(beep))
		.pipe(jshint.reporter(stylish));
});



gulp.task('watch', function() {
	gulp.watch(files.views.src, [
		'views',
		browserSync.reload
	]);

	gulp.watch('./assets/styles/**/*.scss', ['styles']);

	gulp.watch(files.scripts.src, ['scripts', browserSync.reload]);
	gulp.watch(lintScripts, ['lint']);

	gulp.watch('./bower.json', [
		'dependencies',
		'styles'
	]);
});

gulp.task('default', [
	'dependencies',
	'views',
	'browser-sync',
	'sprites',
	'styles',
	'scripts',
	'lint',
	'watch'
]);
