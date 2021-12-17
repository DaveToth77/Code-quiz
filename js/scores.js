// get ul element
var ulEl = document.querySelector("#scores");
// get return button
var returnEl = document.querySelector("#return-button");
// get clear scores button
var clearEl = document.querySelector("#clear-button");

// global variables
var highScores = [];

// function to get and display high scores from localStorage
var loadScores = function () {
  highScores = localStorage.getItem("scores");
  // check if scores is null/falsy
  if (!highScores) {
    highScores = [];
    return false;
  }
  // convert highScores from stringified format to an array of objects
  highScores = JSON.parse(highScores);
  console.log(highScores);
  // iterate through highScores array and add a list item to the page for each score
  for (var i = 0; i < highScores.length; i++) {
    var listItemEl = document.createElement("li");
    listItemEl.className = "listed-score";
    var nameEl = document.createElement("div");
    nameEl.className = "score-info";
    nameEl.textContent = `Initials: ${highScores[i].initials}`;
    listItemEl.appendChild(nameEl);
    var scoreEl = document.createElement("div");
    scoreEl.className = "score-info";
    scoreEl.textContent = ` Score: ${highScores[i].score}`;
    listItemEl.appendChild(scoreEl);
    ulEl.appendChild(listItemEl);
  }
};

// function to return to index.html
var goToIndex = function () {
  location.replace("https://sirubu.github.io/code-quiz/");
};

// function to clear the high scores stored in localStorage
var clearScores = function () {
  highScores = [];
  localStorage.setItem("scores", highScores);
  location.reload();
};

// event listener for return button
returnEl.addEventListener("click", goToIndex);
// event listener for clear scores button
clearEl.addEventListener("click", clearScores);

loadScores();
