$(document).ready(function() {
  var mainNav = $(".m-mainnav");
  var requiredScroll = mainNav.offset().top + mainNav.height();

  function update() {
    var scrollPos = $(document).scrollTop();

    console.log(scrollPos, requiredScroll);
    
    if(scrollPos > requiredScroll) {
      mainNav.addClass("m-mainnav--fixed");
    } else {
      mainNav.removeClass("m-mainnav--fixed");
    }
  };

  var activeButton = mainNav.children(".m-burgermenu");
  activeButton.click(function() {
    mainNav.toggleClass("m-mainnav--active");
  });

  $(window).scroll(function() {
    update();
  });

  update();
});