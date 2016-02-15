 var gulp = require("gulp")
  , gutil = require("gulp-util")
  , browserify = require("gulp-browserify")
  , sass = require("gulp-ruby-sass")
  , jshint = require("gulp-jshint")
  , stylish = require('jshint-stylish')
  , notify = require("gulp-notify")
  , path = require("path")
  , rimraf = require("gulp-rimraf")
  , maki = require("gulp-pagemaki")

// globs and build directories
var paths = {
  scripts: {
    all: "./src/**/*.js",
    lint: ["./src/js/**/*.js", "!./src/js/vendor/**/*.js"],
    watch: ["./src/js/**/*.js", "./src/js/app/templates/**/*.html", "!./src/js/vendor/**/*.js"],
    build: ["./src/js/main.js"]
  },
  styles: {
    all: ["./src/css/**/*.sass", "./src/css/**/*.scss", "./src/css/**/*.css"],
    build: ["./src/css/*.sass", "./src/css/*.scss", "./src/css/*.css"]
  },
  pages: ["./src/pages/**/*"],
  statics: ["./src/static/**/*"],
  clean: {
    pages: ["./public/**/*", "!./public/assets", "!./public/assets/**/*"],
    statics: ["./public/assets/**/*", "!./public/assets/*.css", "!./public/assets/*.js"],
    scripts: ["./public/assets/*.js"],
    styles: ["./public/assets/*.css"]
  },
  build: {
    root: path.join(process.cwd(), "public"),
    assets: path.join(process.cwd(), "public", "assets")
  }
};


function cleanUp(glob) {
  return gulp.src(glob, { read: false })
    .pipe(rimraf());
}

/** ========================================================================
 *
 * TASK DEFINITIONS
 *
 */

gulp.task("default", ["scripts", "styles", "pages", "statics"]);



gulp.task("pages", ["cleanPages"], function () {

  var layoutDir = path.join(__dirname, "src", "layouts");

  return gulp.src(paths.pages)
    .pipe(maki({
      templatesDir: layoutDir
    }))
    .pipe(gulp.dest(paths.build.root));

});



gulp.task("cleanPages", function () {

  return cleanUp(paths.clean.pages);

});



gulp.task("statics", ["cleanStatic"], function () {

  return gulp.src(paths.statics)
    .pipe(gulp.dest(paths.build.root));

});



gulp.task("cleanStatic", function () {

  return cleanUp(paths.clean.statics);

});



gulp.task("scripts", ["jshint", "cleanScripts"], function () {

  return gulp.src(paths.scripts.build)
    .pipe(browserify({
      debug: !gutil.env.production,
      transform: ["node-underscorify"]
    }))
    .pipe(gulp.dest(paths.build.assets));

});



gulp.task("cleanScripts", function () {

  return cleanUp(paths.clean.scripts);

});



gulp.task("jshint", function () {

  return gulp.src(paths.scripts.lint)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
    // .pipe(jshint.reporter('fail'));

});



gulp.task("styles", ["cleanStyles"], function () {

  return gulp.src(paths.styles.build)
    .pipe(sass())
    .pipe(gulp.dest(paths.build.assets));

});



gulp.task("cleanStyles", function () {

  return cleanUp(paths.clean.styles);

});


gulp.task("watch", ["default"], function () {

  gulp.watch(paths.scripts.watch, ["scripts"]);
  gulp.watch(paths.styles.all, ["styles"]);
  gulp.watch(paths.pages, ["pages"]);
  gulp.watch(paths.statics, ["static"]);

});
