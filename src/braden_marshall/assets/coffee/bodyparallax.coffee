$(document).ready ->
  $('[data-parallax]').each ->
    $bgobj = $(this)
    $(window).scroll ->
      yPos = -($(window).scrollTop() / $bgobj.data("parallaxspeed"))
      $bgobj.css backgroundPosition: "0% " + yPos + "px"
