export default (scrollPos) => {
  const eles = document.getElementsByClassName('m-mainnav');
  for (const ele of eles) {
    const requiredScroll = ele.offsetTop + ele.offsetHeight;
    const oldRequiredScroll = ele.getAttribute('data-mMainnavRequiredscroll');

    let compareScroll = requiredScroll;
    if (oldRequiredScroll !== undefined) {
      compareScroll = Math.max(requiredScroll, oldRequiredScroll);
    }

    if (scrollPos > compareScroll) {
      if (!ele.classList.contains('m-mainnav--fixed')) {
        ele.classList.add('m-mainnav--fixed');
        ele.setAttribute('data-mMainnavRequiredscroll', requiredScroll);
      }
    } else if (ele.classList.contains('m-mainnav--fixed')) {
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
