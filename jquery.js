$(document).ready(function () {
  let words = ["It Happens.", "People change.", "Hard work pays off.", "Nothing bad lasts forever.", "You're doing great."];

  let randomQuote = Math.floor(Math.random()*words.length);

  $(".container").hide().fadeIn(1000);
  $(".acontainer").hide().fadeIn(1000);

  $('.result').append("<h2>" + words[randomQuote] + "</h2>");

});
