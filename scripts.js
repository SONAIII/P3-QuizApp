const questions = [
  {
    question: "Which animal is the largest?",
    answers: [
      { text: "Shark", status: false },
      { text: "Giraffe", status: false },
      { text: "Elephant", status: true },
      { text: "Dog", status: false },
    ],
  },
  {
    question: "Which animal is the smallest?",
    answers: [
      { text: "Girafee", status: false },
      { text: "Hippo", status: false },
      { text: "Dog", status: true },
      { text: "Blue Whale", status: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementsByClassName("next");

let score = 0;
let currentQuestionIndex = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;

  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
};

const showQuestion = () => {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNumber}. ${currentQuestion.question}`;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHtml = answer.text;
    button.classList.add("btn");
    answerBtn.appendChild(button);
  });
};

startQuiz();
