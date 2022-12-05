const quizDB = [
  {
    question: "What is the full form of HTML?",
    a: "Hello To my Land",
    b: "HyperText Markup language",
    c: "Hey Text Markup Language",
    d: "HyperText Makeup Language",
    ans: "b",
  },
  {
    question: "What is the full form of CSS?",
    a: "Cascade sheets style",
    b: "Color and style sheets",
    c: "Cascading style sheets",
    d: "Coded Style Sheet",
    ans: "c",
  },
  {
    question: "What is a correct syntax to output 'Hello World' in Python?",
    a: "Print('Hello world')",
    b: "printer('Hello world')",
    c: "Printf('hello world')",
    d: "printing('Hello world')",
    ans: "a",
  },
];

const questions = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submitQuiz = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");

let questionCount = 0;
let total = quizDB.length;
let right = 0;
let wrong = 0;

const loadQuestion = () => {
  if (questionCount === total) {
    return endQuiz();
  }
  reset();
  let questionList = quizDB[questionCount];
  questions.innerHTML = `${questionCount + 1}) ${questionList.question}`;
  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};

submitQuiz.addEventListener("click", () => {
  let questionList = quizDB[questionCount];
  const answ = getAnswer();
  if (answ == questionList.ans) {
    right++;
  } else {
    wrong++;
  }
  questionCount++;
  loadQuestion();
  return;
});

//
const getAnswer = () => {
  let answerValue;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answerValue = curAnsElem.value;
    }
  });
  console.log(answerValue);
  return answerValue;
};

// reset after one question
const reset = () => {
  answers.forEach((curAnsElem) => {
    curAnsElem.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("container").innerHTML = `
    <h2>Your Score is ${right}/${total}.<br> <br>Thanks For Playing the Quiz
    </h2>
     `;
};
loadQuestion();
