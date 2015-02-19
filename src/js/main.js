var log = require("./lib/log"),
    $ = require("./vendor/jquery");

var catainer = $(".catainer");
var kitton = $(".kitton");
var clip = $(".svg-hex-clip");
var mask = $(".svg-hex-mask");
var svgcat = $(".svg-cat");

kitton.on("mouseover", function () {
    $(this).parents(".catainer").addClass("active");
});

kitton.on("mouseout", function () {
    $(this).parents(".catainer").removeClass("active");
});

svgcat.on("mouseover", function () {
    $(this).parents(".svg-hex-clip").addClass("active");
});

svgcat.on("mouseout", function () {
    $(this).parents(".svg-hex-clip").removeClass("active");
});

svgcat.on("mouseover", function () {
    $(this).parents(".svg-hex-mask").addClass("active");
});

svgcat.on("mouseout", function () {
    $(this).parents(".svg-hex-mask").removeClass("active");
});

// $(".kitton").on("mouseout", function () {
//     this.parent().parent().parent().removeClass("active");
// });