// Load our utilities.
import ready from './util/ready.js';
import onScroll from './util/scroll.js';

// Load our CSS modules' functionality.
import parallax from './css/parallax.js';
import mMainNav from './css/m-mainnav.js';

// Call these when the DOM is ready.
const whenReady = [
  () => onScroll(parallax),
  () => onScroll(mMainNav)
];

ready(() => {
  for (const readyCallback of whenReady) {
    readyCallback();
  }
});
