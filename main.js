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
      function type(i, t, ie, oe) {
        input = document.getElementById(ie).innerHTML;
        document.getElementById(oe).innerHTML += input.charAt(i);
        setTimeout(function(){
            ((i < input.length - 1) ? type(i+1, t, ie, oe) : false);
        }, t);
    }

  type(0, 100, "text", "screen");

  async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  typeSentence("Hey, over here!", "#sentence");

  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }

  $( document ).ready(async function() {
    await typeSentence("Mr. Stark, I don't feel so good..", "#sentence");
    await waitForMs(2000);
    deleteSentence("#sentence");
  });