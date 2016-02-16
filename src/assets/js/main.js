var log = require("./lib/log"),
    $ = require("./vendor/jquery");


$(function () {

  log("The document is ready and we have some js running, way to go. Big accomplishment. We're all pulling for you.");

});

$(function() {
  var first = false;

  function toggleBp() {
    $("body").toggleClass("debug-breakpoints");
    first = false;
  }

  $("body").on("keypress", function (e) {

    // If key pressed is "b"
    if (e.which === 98) {

      // If already been pressed, do action
      if (first) {
        toggleBp();
      }

      else {

        // On first press, set first true
        first = true;

        // Reset first so that keypresses must
        // happen in quick succession
        setTimeout(function () {
          first = false;
        }, 250);

      }
    }

  });
});
