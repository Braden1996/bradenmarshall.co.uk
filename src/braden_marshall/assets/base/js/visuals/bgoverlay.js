$(document).ready(function() {
  var ele = $(".m-bgoverlay__over");
  var bgPos = ele.css("backgroundPosition").split(" ");
  var initialYPos = bgPos[1];

  function update() {
    var speed = -0.25;
    var scrollPos = $(document).scrollTop();

    var bgPos = ele.css("backgroundPosition").split(" ");

    ele.css("backgroundPosition", bgPos[0] + " " + (parseInt(initialYPos, 10) + (speed * scrollPos)) + "px");
  }   

  $(window).bind("scroll", update).resize(update);
  update();
});