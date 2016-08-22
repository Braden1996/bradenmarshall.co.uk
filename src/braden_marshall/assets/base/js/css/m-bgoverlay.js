export default (speed = -0.125) => {
  const eles = document.getElementsByClassName('m-bgoverlay__over');

  function updateBG(scrollPos) {
    for (const ele of eles) {
      const bgPos = window.getComputedStyle(ele)
        .getPropertyValue('background-position').split(' ');

      const bgPosX = parseInt(bgPos[0], 10);
      const bgPosY = parseInt(bgPos[1], 10);

      let initY = ele.getAttribute('data-mBgoverlayLastscroll');
      if (initY === undefined) {
        initY = bgPosY;
        ele.setAttribute('data-mBgoverlayLastscroll', bgPosY);
      }

      const newBGPosY = initY + (speed * scrollPos);
      ele.style.backgroundPosition = `${bgPosX}% ${newBGPosY}%`;
    }
  }

  let scrollPos = window.scrollY || 0;
  let ticking = false;
  window.addEventListener('scroll', () => {
    scrollPos = window.scrollY;

    if (window.requestAnimationFrame) {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateBG(scrollPos);
          ticking = false;
        });
      }
      ticking = true;
    } else {
      updateBG(scrollPos);
    }
  });

  updateBG(scrollPos);
};
