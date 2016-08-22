// Load our react components.
import '../../blog/js/main.jsx';

// Load our utilities.
import ready from './util/ready.js';

// Load our CSS modules' functionality.
import mBgOverlay from './css/m-bgoverlay.js';


// Call these when the DOM is ready.
const whenReady = [
  mBgOverlay,
];

ready(() => {
  for (const readyCallback of whenReady) {
    readyCallback();
  }
});
