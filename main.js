

(function() {
    'use strict';
    var btnScrollDown = document.querySelector('#scroll_down');
  
    function scrollDown() {
      var windowCoords = document.documentElement.clientHeight * .90 ;
      (function scroll() {
        if (window.pageYOffset < windowCoords) {
          window.scrollBy(0, 7);
          setTimeout(scroll, 0);
        }
        if (window.pageYOffset > windowCoords) {
          window.scrollTo(0, windowCoords);
        }
      })();
    }
  
    btnScrollDown.addEventListener('click', scrollDown);
  })();

  document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#text", {
  //strings: ["This is my string!"],
})
    .type('I<span style="color:rgb(81, 22, 91);" > was</span>', { delay: 1000 })
    .delete(3)
    .type('<span style="color:rgb(90, 10, 125);" >am</span>')
    .pause(1000)
    .delete(2)
    .type('<span style="color:rgb(217, 0, 255);" >will be</span>')
    .pause(700)
    .type(".")
    .go();
    });
