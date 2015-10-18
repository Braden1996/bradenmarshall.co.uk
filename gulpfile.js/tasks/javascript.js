module.exports = {
  prepareBundle: prepareBundle,
  pipeBundle: pipeBundle
}
var config       = require("../config/javascript");
var handleErrors = require("../lib/handleErrors");
var browserify   = require("browserify");
var gulp         = require("gulp");
var source       = require("vinyl-source-stream");

// For the future...
function prepareBundle(bundler) {
  return bundler;
}

function pipeBundle(bundler) {
  var b = bundler.bundle()
    .on("error", handleErrors);
  return b.pipe(source(config.destinationFilename)) // convert to a stream gulp understands
  .pipe(gulp.dest(config.destination));
}

gulp.task("javascript", function() {
  var bundler = browserify(config.source, config.customOptions);
  bundler = prepareBundle(bundler);
  return pipeBundle(bundler);
});