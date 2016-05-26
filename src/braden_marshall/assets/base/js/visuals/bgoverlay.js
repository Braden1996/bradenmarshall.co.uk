$(document).ready(function() {
  let ele = $(".m-bgoverlay__over");
  let bgPos = ele.css("backgroundPosition").split(" ");
  let initialYPos = bgPos[1];

  function update() {
    let speed = -0.25;
    let scrollPos = $(document).scrollTop();

    let bgPos = ele.css("backgroundPosition").split(" ");

    ele.css("backgroundPosition", bgPos[0] + " " + (parseInt(initialYPos, 10) + (speed * scrollPos)) + "px");
  }   

  $(window).bind("scroll", update).resize(update);
  update();
});