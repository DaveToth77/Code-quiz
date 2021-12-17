// get elements for DOM manipulation
// timer
var timerEl = document.querySelector("#timer");
// main
var mainEl = document.querySelector("#main");
// main, h1 for question display
var questionEl = document.querySelector("#quiz-heading");
// main, div for button/message display
var messageEl = document.querySelector("#quiz-body");
// get start button for click event
var startBtn = document.querySelector("#start-quiz");
// result
var resultEl = document.querySelector("#result");

// set global variables
var questionsArr = [
  {
    question: "An array can contain:",
    options: ["Objects", "Strings", "Numbers", "All of the Above"],
    answer: "4",
  },
  {
    question: "What is used to contain the OPERATION of a function?",
    options: [
      "Square Brackets [ ]",
      "Curly Brackets { }",
      "Parentheses ( )",
      'Quotation Marks " "',
    ],
    answer: "2",
  },
  {
    question: "A function will run automatically unless set as a variable.",
    options: ["True", "False"],
    answer: "2",
  },
  {
    question: "This will require the user to select 'OK' or 'Cancel'.",
    options: ["Confirm", "Alert", "Prompt", "Inform"],
    answer: "1",
  },
  {
    question: "What is used after a function name?",
    options: [
      "Semi Colon ;",
      "Square Brackets [ ]",
      "Parentheses ( )",
      "Curly Brackets { }",
    ],
    answer: "3",
  },
  {
    question: "This will require the user to input an answer:",
    options: ["Prompt", "Alert", "Confirm", "Window"],
    answer: "1",
  },
  {
    question: "A PROMPT from the user always returns as a:",
    options: ["Boolean", "Number", "String", "Variable"],
    answer: "3",
  },
  {
    question:
      "What is the index number of 'this' in this array: ['what', 'index', 'is, 'this']",
    options: ["This", "3", "i", "4"],
    answer: "2",
  },
  {
    question: "An object is contained in:",
    options: [
      "Parentheses ( )",
      "Colons : :",
      "Square Brackets [ ]",
      "Curly Brackets { }",
    ],
    answer: "4",
  },
  {
    question: "A function must be called in order to run.",
    options: ["True", "False"],
    answer: "1",
  },
  {
    question: "API stands for:",
    options: [
      "Automatic Place Integer",
      "Application Pyramid Itemizer",
      "Automated Programmer Interface",
      "Application Programming Interface",
    ],
    answer: "4",
  },
  {
    question: "DOM stans for:",
    options: [
      "Document Override Method",
      "Document Object Model",
      "Decrement Object Material",
      "Do Observe More",
    ],
    answer: "2",
  },
  {
    question: "This will increment by one each time:",
    options: ["+-", "+=", "++", "=+"],
    answer: "3",
  },
];

var indexNum = 0;
var timer = 59;
var correct = 0;
var wrong = 0;
var play = true;
var highScores = [];

// function to shuffle the array
var shuffleArr = function (array) {
  var ctr = array.length,
    temp,
    index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = array[ctr];
    array[ctr] = array[index];
    array[index] = temp;
  }
  return array;
};

// function for the timer
var countdown = function () {
  var timeInterval = setInterval(function () {
    if (timer > 0 && play === true) {
      timerEl.innerText = timer;
      timer--;
    } else {
      timerEl.innerText = timer;
      timerEl.setAttribute("style", "color: red;");
      clearInterval(timeInterval);
      endQuiz();
    }
  }, 1000);
};

// function to start timer and start quiz
var startQuiz = function () {
  // shuffle array
  shuffleArr(questionsArr);
  //start timer
  countdown();
  // style quiz display section elements
  questionEl.setAttribute("style", "text-align: left;");
  messageEl.setAttribute("style", "margin-left: 25px; width: fit-content;");
  // remove start button
  startBtn.remove();

  runQuiz();
};

// function to start time and begin quiz
var runQuiz = function () {
  // if the indexNum is greater than length of the questionsArr, end quiz
  if (indexNum === questionsArr.length) {
    play = false;
  } else {
    // set variables from object in questionsArr index
    var question = questionsArr[indexNum].question;
    var options = questionsArr[indexNum].options;
    answer = questionsArr[indexNum].answer;
    // change h1 to the question
    questionEl.textContent = question;
    // remove div contents
    messageEl.textContent = "";
    // for each of the 4 options, create a button and append it to the now empty div
    for (var i = 0; i < options.length; i++) {
      var btnEl = document.createElement("button");
      btnEl.className = "btn guess-list";
      btnEl.setAttribute("btn-id", [i + 1]);
      btnEl.textContent = `${[i + 1]}. ${options[i]}`;
      messageEl.appendChild(btnEl);
    }
    // increment indexNum to use in next run through
    indexNum++;
    // at this point the application will wait for the user to click on the page before continuing
  }
};

// function for when the user clicks on the screen
var guessHandler = function (event) {
  // on click, ensure a guess button was clicked
  var targetEl = event.target;
  if (targetEl.matches(".guess-list")) {
    // get button id of guess, pass to guess compare function
    var guessId = targetEl.getAttribute("btn-id");
    guessCompare(guessId);
  }
};

// function to compare the guess to the actual answer
var guessCompare = function (guessId) {
  // if guessed correct
  if (guessId === answer) {
    // add to timer, increase correct var, display correct, run next question
    timer += 3;
    correct++;
    resultEl.innerText = "Correct!";
    runQuiz();
    // if guessed incorrect
  } else {
    // subtract from timer, increase wrong var, display wrong, run next question
    timer -= 10;
    wrong++;
    resultEl.innerText = "Wrong!";
    runQuiz();
  }
};

// function to endQuiz when all questions answered or timer runs out
var endQuiz = function () {
  // ensure score can't be negative
  if (timer < 0) {
    timer = 0;
    timerEl.innerText = timer;
  }
  // update DOM
  questionEl.removeAttribute("style");
  questionEl.textContent = "Let's see how you did!";
  messageEl.innerHTML = `<div>You got ${correct} questions correct and ${wrong} questions wrong.</div><div>Your time score is: ${timer}.</div>`;
  // create and append a form elements for submitting initials
  var formEl = document.createElement("form");
  formEl.setAttribute("id", "initials-form");
  var inputEl = document.createElement("input");
  inputEl.setAttribute("type", "text");
  inputEl.setAttribute("name", "user-initials");
  inputEl.className = "user-initials";
  inputEl.setAttribute("placeholder", "Enter Your Initials");
  formEl.appendChild(inputEl);
  var submitEl = document.createElement("button");
  submitEl.className = "btn";
  submitEl.setAttribute("id", "save-initials");
  submitEl.setAttribute("type", "submit");
  submitEl.textContent = "Submit";
  formEl.appendChild(submitEl);
  // append the entire form to the messageEl
  messageEl.appendChild(formEl);
};

// function for submit button
var saveHighScore = function(event) {
    // prevent default
    event.preventDefault();
    // only run if the submit button is being clicked
    var targetEl = event.target;
    if(targetEl.matches("#save-initials")) {
        // get the initial entry form element
        var formEl = document.querySelector(".user-initials");
        var userInitials = formEl.value
        // ensure initials have been entered
        if(!userInitials) {
            alert("Please enter your initials to submit your score... this does not seem to be optional.");
            return false;
        // save user input and score to localStorage
        } else {
            var highScoreObj = {
                initials: userInitials,
                score: timer
            };
            // send obj to highScores array
            highScores.push(highScoreObj);
            // save highScores array to local storage
            localStorage.setItem("scores", JSON.stringify(highScores));
            // redirect user to the high score page
            location.replace("https://davetoth77.github.io/code-quiz/scores.html");
        }
    }
};

// function to get and update high scores
var loadScores = function() {
    highScores = localStorage.getItem("scores");
    // check if scores is null/falsy
    if(!highScores) {
        highScores = [];
        return false;
    }
    // convert highScores from stringified format to an array of objects
    highScores = JSON.parse(highScores);
};

// event listener for click of start button
startBtn.addEventListener("click", startQuiz);
// event listener for click of a guess button during quiz
messageEl.addEventListener("click", guessHandler);
// event listener for submit button
mainEl.addEventListener("click", saveHighScore);

// load any high scores from the localStorage
loadScores();
