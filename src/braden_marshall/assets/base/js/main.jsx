// Load our react components.
import '../../blog/js/main.jsx';

// Load our utilities.
import ready from './util/ready.js';
import onScroll from './util/scroll.js';

// Load our CSS modules' functionality.
import mBgOverlay from './css/m-bgoverlay.js';
import mMainNav from './css/m-mainnav.js';


// Call these when the DOM is ready.
const whenReady = [
  () => onScroll(mBgOverlay),
  () => mMainNav(onScroll),
];

ready(() => {
  for (const readyCallback of whenReady) {
    readyCallback();
  }
});
