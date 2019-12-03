var fs = require("fs");
var browserify = require("browserify");
browserify("./public/js/app.js")
  .transform("vueify")
  .transform("babelify", { 
    presets: ["es2015"], 
    plugins: ["transform-runtime", "transform-object-rest-spread"],
    ignore: /\/node_modules\//,
    sourceType: "module"
  })
  .bundle().on('error', function (err) {
    console.log(err);
  })
  .pipe(fs.createWriteStream("./public/js/app.min.js"));