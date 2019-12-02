var fs = require("fs");
var browserify = require("browserify");
browserify("./public/js/app.js")
  .transform("vueify")
  .transform("babelify", {presets: ["@babel/preset-env"], plugins: ["@babel/plugin-transform-runtime"]})
  .bundle()
  .pipe(fs.createWriteStream("./public/js/app.min.js"));