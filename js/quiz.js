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
