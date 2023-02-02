

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
    .type("I was", { delay: 1000 })
    .delete(3)
    .type("am")
    .pause(1000)
    .delete(2)
    .type("will be")
    .pause(700)
    .type(".")
    .go();
    });
