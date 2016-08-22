export default (scrollPos, speed = -0.135) => {
  const eles = document.getElementsByClassName('m-bgoverlay__over');
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
};
