import plumber from 'gulp-plumber';
import { log, colors } from 'gulp-util';

export default (inherit = undefined) => plumber({ inherit,
  errorHandler(error) {
    log(colors.red(`Error (${error.plugin}): (${error.message})`));
    this.emit('end');
  },
});
