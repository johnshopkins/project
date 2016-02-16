// node modules
var gulp = require("gulp");
var Tasker = require("gulp-tasks");

// configuration
var config = require("./config/gulp/config");

// custom tasks
var pagemaki = require("./config/gulp/tasks/pagemaki");

// setup gulp tasker
var gulpTasker = new Tasker(gulp);
gulpTasker
  .setConfig(config)
  .addCustom("pagemaki", pagemaki);

// add tasks
gulp.tasks = gulpTasker
  .add("js")
  .add("move")
  .add("scss")
  .get();

// compile all files when running `gulp`
gulp.task("default", ["default:js", "default:move", "default:scss", "default:pagemaki"]);

// after running `gulp watch`, compile all files and watch for changes
gulp.task("watch", ["default"], function () {
  gulp.watch(["./src/assets/js/**/*.js", "./src/assets/js/templates/**/*.html"], ["default:js"]);
  gulp.watch(["./src/assets/images/**/*", "./src/assets/fonts/**/*"], ["default:move"]);
  gulp.watch(["./src/assets/css/**/*.scss"], ["default:scss"]);
  gulp.watch(["./src/pages/**/*", "./src/layouts/**/*"], ["default:pagemaki"]);
});
