export default (scrollPos) => {
  const eles = document.querySelectorAll('[data-parallax]');
  for (const ele of eles) {
    const config = ele.getAttribute('data-parallax').split(/(\s+)/);
    const speed = config[0];
    const isfixed = config[1] === 'fixed';

    const limit = ele.offsetTop + ele.offsetHeight;

    let newBGPosY = 0;
    if (scrollPos > ele.offsetTop && (!isfixed || scrollPos <= limit)) {
      newBGPosY = (scrollPos - ele.offsetTop) / speed;
    }

    ele.style.backgroundPositionY = `${newBGPosY}px`;
  }
};
