const quizData = [
  {
    id: 1,
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["int", "var", "string", "define"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Google", "Netscape", "Apple"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["<!-- -->", "/* */", "//", "#"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Which method is used to print something in the browser console?",
    options: ["console.log()", "print()", "echo()", "write()"],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Which data type represents true or false values?",
    options: ["Number", "Boolean", "String", "Object"],
    correctAnswer: 1
  },
  // {
  //   id: 6,
  //   question: "What is the result of typeof null?",
  //   options: ["null", "object", "undefined", "boolean"],
  //   correctAnswer: 1
  // },
  // {
  //   id: 7,
  //   question: "Which operator is used for strict equality?",
  //   options: ["==", "=", "===", "!="],
  //   correctAnswer: 2
  // },
  // {
  //   id: 8,
  //   question: "Which loop executes at least once?",
  //   options: ["for", "while", "do...while", "foreach"],
  //   correctAnswer: 2
  // },
  // {
  //   id: 9,
  //   question: "Which method converts JSON into a JavaScript object?",
  //   options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
  //   correctAnswer: 0
  // },
  // {
  //   id: 10,
  //   question: "Which method converts a JavaScript object into JSON?",
  //   options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
  //   correctAnswer: 1
  // },
  // {
  //   id: 11,
  //   question: "Which keyword is used to declare a constant?",
  //   options: ["const", "constant", "let", "static"],
  //   correctAnswer: 0
  // },
  // {
  //   id: 12,
  //   question: "Which method adds an element to the end of an array?",
  //   options: ["pop()", "shift()", "push()", "unshift()"],
  //   correctAnswer: 2
  // },
  // {
  //   id: 13,
  //   question: "Which method removes the last element from an array?",
  //   options: ["pop()", "push()", "shift()", "slice()"],
  //   correctAnswer: 0
  // },
  // {
  //   id: 14,
  //   question: "Which DOM method selects an element by its ID?",
  //   options: [
  //     "querySelectorAll()",
  //     "getElementById()",
  //     "getElementsByClassName()",
  //     "querySelector()"
  //   ],
  //   correctAnswer: 1
  // },
  // {
  //   id: 15,
  //   question: "Which keyword is used to create a function?",
  //   options: ["method", "function", "define", "func"],
  //   correctAnswer: 1
  // },
  // {
  //   id: 16,
  //   question: "Which method removes the first element from an array?",
  //   options: ["pop()", "shift()", "splice()", "slice()"],
  //   correctAnswer: 1
  // },
  // {
  //   id: 17,
  //   question: "Which event occurs when a button is clicked?",
  //   options: ["mouseover", "onclick", "keydown", "change"],
  //   correctAnswer: 1
  // },
  // {
  //   id: 18,
  //   question: "Which operator is used for logical AND?",
  //   options: ["||", "&&", "&", "AND"],
  //   correctAnswer: 1
  // },
  // {
  //   id: 19,
  //   question: "Which operator is used for logical OR?",
  //   options: ["&&", "||", "|", "OR"],
  //   correctAnswer: 1
  // },
  // {
  //   id: 20,
  //   question: "Which array method creates a new array by filtering elements?",
  //   options: ["map()", "find()", "filter()", "reduce()"],
  //   correctAnswer: 2
  // },
  // {
  //   id: 21,
  //   question: "Which array method is used to transform every element?",
  //   options: ["map()", "filter()", "find()", "every()"],
  //   correctAnswer: 0
  // },
  // {
  //   id: 22,
  //   question: "Which keyword exits a loop immediately?",
  //   options: ["continue", "stop", "break", "exit"],
  //   correctAnswer: 2
  // },
  // {
  //   id: 23,
  //   question: "Which statement skips the current iteration of a loop?",
  //   options: ["break", "continue", "return", "skip"],
  //   correctAnswer: 1
  // },
  // {
  //   id: 24,
  //   question: "Which function displays a popup with an OK button?",
  //   options: ["prompt()", "alert()", "confirm()", "popup()"],
  //   correctAnswer: 1
  // },
  // {
  //   id: 25,
  //   question: "Which function asks the user for input?",
  //   options: ["alert()", "confirm()", "prompt()", "input()"],
  //   correctAnswer: 2
  // },
  // {
  //   id: 26,
  //   question: "Which method is used to join array elements into a string?",
  //   options: ["concat()", "join()", "split()", "merge()"],
  //   correctAnswer: 1
  // },
  // {
  //   id: 27,
  //   question: "Which method converts a string into an array?",
  //   options: ["slice()", "split()", "join()", "splice()"],
  //   correctAnswer: 1
  // },
  // {
  //   id: 28,
  //   question: "Which object stores key-value pairs in JavaScript?",
  //   options: ["Array", "Object", "String", "Number"],
  //   correctAnswer: 1
  // },
  // {
  //   id: 29,
  //   question: "Which keyword refers to the current object in JavaScript?",
  //   options: ["self", "this", "current", "object"],
  //   correctAnswer: 1
  // },
  // {
  //   id: 30,
  //   question: "Which method is used to add HTML inside an element?",
  //   options: ["textContent", "innerHTML", "innerText", "value"],
  //   correctAnswer: 1
  // }
];