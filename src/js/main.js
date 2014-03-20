var log = require("./lib/log"),
    $ = require("./vendor/jquery");

var catainer = $(".catainer");
var kitton = $(".kitton");

kitton.on("mouseover", function () {
    $(this).parents(".catainer").addClass("active");
});

kitton.on("mouseout", function () {
    $(this).parents(".catainer").removeClass("active");
});

// $(".kitton").on("mouseout", function () {
//     this.parent().parent().parent().removeClass("active");
// });