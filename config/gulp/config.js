var underscorify = require("node-underscorify");

module.exports = {

  js: {

    concat: {
      base: [
        "./src/assets/js/vendor/to-bundle/jquery.js"
      ]
    },

    compile: {
      src: ["./src/assets/js/*.js"],
      transform: [
        [ underscorify.transform({ extensions: ['html'] }), { global: true } ]
      ]
    },

    minify: {
      src: ["./src/assets/js/vendor/*.js"]
    },

    hint: {
      src: ["./src/assets/js/*.js"],
      jshintrc: "./config/jshintrc.json"
    },

    build: "./build/js",
    dist: "./dist/js"

  },

  scss: {

    lint: "./config/csslintrc.json",
    src: ["./src/assets/css/*.scss"],
    build: "./build/css",
    dist: "./dist/css",
    ieBreakpoint: { type: "screen", width: "36em", height: "24em" }

  },

  move: [
    {
      src: "./src/assets/images/**/*",
      build: "./build/images",
      dist: "./dist/images"
    },
    {
      src: "./src/assets/fonts/**/*",
      build: "./build/fonts",
      dist: "./dist/fonts"
    }
  ],

  pagemaki: {
    layouts: "./src/layouts",
    pages: ["./src/pages/**/*"],
    clean: ["./public/**/*", "!./public/assets", "!./public/assets/**/*"],
    build: "./public"
  }
};
