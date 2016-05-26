$(document).ready(function() {
  let mainNav = $(".m-mainnav");

  // 'mainNav.outerHeight()' may not work correctly immediately
  // after the DOM becomes ready. To combat this, we initialise
  // with an estimate and update ASAP.
  // Maybe we could be better off using '$(window).load'?
  let requiredScroll = mainNav.offset().top + mainNav.height();

  function update() {
    let scrollPos = $(document).scrollTop();
    
    if(scrollPos > requiredScroll) {
      mainNav.addClass("m-mainnav--fixed");
    } else {
      mainNav.removeClass("m-mainnav--fixed");
      requiredScroll = mainNav.offset().top + mainNav.outerHeight();
    }
  };

  let activeButton = mainNav.children(".m-burgermenu");
  activeButton.click(function() {
    mainNav.toggleClass("m-mainnav--active");
  });

  $(window).scroll(function() {
    update();
  });

  update();
});