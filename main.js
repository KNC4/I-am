

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

    //Begin scroll effect

    const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

    //End scroll effect
