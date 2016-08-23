const fns = [];

function onScroll(scrollpos) {
  for (const fn of fns) {
    fn(scrollpos);
  }
}

let scrollPos = window.scrollY || 0;
let ticking = false;
window.addEventListener('scroll', () => {
  scrollPos = window.scrollY;

  // Possible performance boost?
  if (window.requestAnimationFrame) {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScroll(scrollPos);
        ticking = false;
      });
    }
    ticking = true;
  } else {
    onScroll(scrollPos);
  }
});

onScroll(scrollPos);

export default (fn) => { fns.push(fn); };
