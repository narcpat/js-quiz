var start = document.getElementById("start");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var counter = document.getElementById("counter");
var progress = document.getElementById("progress");
var score = document.getElementById("score");

// When I click start button, the rules and start button disappear, the quiz starts with the first question and the timer starts

// When I click start button, the rules and start button disappear
var startQuiz = function (event) {
  // event.preventDefault();
  start.style.display = "none";
  countDown();
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
};

// The Timer function: Start on START BUTTON click
function countDown() {
  var seconds = 60;
  var startTimer = function () {
    console.log("Timer to start");
    var timer = setInterval(function () {
      seconds--;
      console.log(seconds);
      document.getElementById("counter").innerHTML = "00:" + seconds;
      if (seconds < 0) {
        clearInterval(timer);
        alert("Time is up!");
      }
    }, 1000);
  };
  // When a question is answered incorrectly, 10 seconds are taken off the timer
  document.getElementById("incorrect").addEventListener("click", function () {
    seconds -= 10;
    document.getElementById("counter").innerHTML = "00:" + seconds;
  });
  startTimer();
}

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

// Questions Array
var questions = [
  {
    question: "The condition in an if/else statement is enclosed with _______.",
    choiceA: "quotes",
    choiceB: "curly brackets",
    choiceC: "parenthesis",
    choiceD: "square brackets",
    corect: "C",
  },
  {
    question: "Commonly used data types DO NOT include:",
    choiceA: "strings",
    choiceB: "alerts",
    choiceC: "booleans",
    choiceD: "numbers",
    corect: "B",
  },
  {
    question: "Arrays in JavaScript can be used to store _________.",
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "all of the above",
    corect: "D",
  },
  {
    question:
      "String values must be enclosed within _______ when being assigned to variables.",
    choiceA: "commas",
    choiceB: "curly brackets",
    choiceC: "quotes",
    choiceD: "parenthesis",
    corect: "C",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choiceA: "console.log",
    choiceB: "JavaScript",
    choiceC: "terminal/bash",
    choiceD: "for loops",
    corect: "A",
  },
];

// Display questions and answeres in QUIZ area
var lastQuestionIndex = questions.length - 1;
var runningQuestionIndex = 0;

var renderQuestion = function () {
  var q = questions[runningQuestionIndex];
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
};

// When I click to answer, I am given feedback as to whether I answered correctly or wrongly, and another question is presented

// Check if Answer is correct or incorrect and provide feedback
var answerIsCorrect = function () {
  document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
};
var answerIsWrong = function () {
  document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
};

var score = 0;
var checkAnswer = function (answer) {
  if (answer == questions[runningQuestionIndex].corect) {
    score++;
    answerIsCorrect();
  } else {
    answerIsWrong();
  }
  if (runningQuestionIndex < lastQuestionIndex) {
    runningQuestionIndex++;
    renderQuestion();
  } else {
    clearInterval(timer);
    scoreRender();
  }
};

// Render progress
var renderProgress = function () {
  for (var qIndex = 0; qIndex <= lastQuestionIndex; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
};

// Render score
var scoreRender = function () {
  scoreContainer.style.display = "block";
  var scorePercent = Math.round((100 * score) / questions.length);
  scoreContainer.innerHTML = "<p>" + scorePercent + "%</p>";
};

// TODO End of Game function scenario
// When all questions are answered or the timer reaches 0 the game is over

// When the game is over, I can save my initials and score

// TODO create storage function for scores and initials

// start quiz and remove start quiz div and button
start.addEventListener("click", startQuiz);
