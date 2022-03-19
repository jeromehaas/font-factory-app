const gulp = require('gulp');
const clean = require('gulp-dest-clean');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const ttf2eot = require('gulp-ttf2eot');
const ora = require('ora-classic');
const spinner = new ora();

const eotTask = (done) => {
	gulp.src('./src/*.ttf')
		.pipe(ttf2eot())
		.pipe(gulp.dest('./dist'));
	spinner.succeed('.eot files generated!');
	done();
};

const woffTask = (done) => {
	gulp.src('./src/*.ttf')
		.pipe(ttf2woff())
		.pipe(gulp.dest('./dist'));
	spinner.succeed('.woff files generated!');
	done();
};

const woff2Task = (done) => {
	gulp.src('./src/*.ttf')
		.pipe(ttf2woff2())
		.pipe(gulp.dest('./dist'));
	spinner.succeed('.woff2 files generated!');
	done();
};

const cleanTask = (done) => {
	gulp.src('./dist')
		.pipe(clean('./dist'));
	spinner.succeed('dist directory cleaned');
	done();
};

const buildTask = (done) => {
	try {

		cleanTask(done);	
		eotTask(done);
		woffTask(done);
		woff2Task(done);
	} catch (error) {
		spinner.fail('error occured while generating fonts!');
	}
};

module.exports = {
	default: buildTask,
	eot: eotTask,
	woff: woffTask,
	woff2: woff2Task,
	clean: cleanTask
};

