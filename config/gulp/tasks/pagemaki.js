var gulp = require("gulp");
var path = require("path");
var del = require("del");
var maki = require("gulp-pagemaki");

module.exports = function (config) {
  config = config || {};

  gulp.task("default:pagemaki", ["cleanPages"], function () {

    return gulp.src(config.pages)
      .pipe(maki({
        templatesDir: config.layouts
      }))
      .pipe(gulp.dest(config.build));
  });

  gulp.task("cleanPages", function (cb) {
    del(config.clean, cb);
  });

  return gulp.tasks;
};
