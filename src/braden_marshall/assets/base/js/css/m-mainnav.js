export default (scrollPos) => {
  const eles = document.getElementsByClassName('m-mainnav');
  for (const ele of eles) {
    const requiredScroll = 200;

    if (scrollPos > requiredScroll) {
      ele.classList.add('m-mainnav--fixed');
    } else {
      ele.classList.remove('m-mainnav--fixed');
    }

    const activeButtons = ele.getElementsByClassName('m-burgermenu');
    for (const btn of activeButtons) {
      btn.addEventListener('click', () => {
        ele.classList.toggle('m-mainnav--active');
      });
    }
  }
};
