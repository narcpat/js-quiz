// When I click start button, the rules and start button disappear, the quiz starts with the first question and the timer starts

var start = document.getElementById("start");
var timer = document.getElementById("timer");

// When I click start button, the rules and start button disappear
var startQuiz = function (event) {
  event.preventDefault();
  var div = document.getElementById("start");
  div.remove();
  countDown();
};

// The Timer function: Start on START BUTTON click... take 10 seconds off for every wrong answer
(function () {
  var seconds = 60;
  var startTimer = function () {
    console.log("Timer to start");
    var timer = setInterval(function () {
      seconds--;
      document.getElementById("counter").innerHTML = "00:" + seconds;
      if (seconds < 0) {
        clearInterval(timer);
        alert("Time is up!");
      }
    }, 1000);
  };
  document.getElementById("incorrect").addEventListener("click", function () {
    seconds -= 10;
    document.getElementById("counter").innerHTML = "00:" + seconds;
  });
  startTimer();
})();

// TODO question function

// When I click to answer, I am given feedback as to whether I answered correctly or wrongly, and another question is presented (or do I create a next question button?)

// TODO Question loop

// When a question is answered incorrectly, 10 seconds are taken off the timer

// TODO create timer function EX: https://stackoverflow.com/questions/58964755/subtract-time-from-timer-if-answer-is-wrong-creating-a-quiz-javascript

// When all questions are answered or the timer reaches 0 the game is over

// TODO End of Game function scenario

// When the game is over, I can save my initials and score

// TODO create storage function for scores and initials

// start quiz and remove start quiz div and button
start.addEventListener("click", startQuiz);
