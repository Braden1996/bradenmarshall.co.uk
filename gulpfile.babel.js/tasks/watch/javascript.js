import config from "../../config/javascript";
import { pipeBundle, prepareBundle} from "../javascript";

import assign from "lodash.assign";
import browserify from "browserify";
import gulp from "gulp";
import watchify from "watchify";
import { log, colors } from "gulp-util";

const { babelifyOptions, browserifyOptions, destination, source } = config;

gulp.task("javascript:watch", () => {
  let bundler = browserify(source, assign({
    cache: {},
    packageCache: {},
  }, browserifyOptions));

  bundler = prepareBundle(bundler);

  bundler = watchify(bundler);

  bundler.on("update", () => {
    const updateStart = Date.now();
    log(`Starting '${colors.cyan("Rebundling")}'...`);
    pipeBundle(bundler);
    log(`Finished '${colors.cyan("Rebundling")}' after` +
      `${colors.magenta(`${Date.now() - updateStart}ms`)}`);
  });

  return pipeBundle(bundler);
});