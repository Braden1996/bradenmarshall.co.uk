import config from "../../config/watch/sass.js";

import gulp from "gulp";

const { watchGlob } = config;
gulp.task("sass:watch", ["sass"], () => gulp.watch(watchGlob, ["sass"]));
