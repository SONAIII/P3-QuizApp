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
const answerBtns = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next");

let score = 0;
let currentQuestionIndex = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;

  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
};

const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.status === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtns.childNodes).forEach((btn) => {
    if (btn.dataset.status === "true") {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });
  nextBtn.style.display = "block";
};

const showQuestion = () => {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNumber}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    console.log(answer.text);
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtns.appendChild(button);
    if (answer.status) {
      button.dataset.status = answer.status;
    }
    button.addEventListener("click", selectAnswer);
  });
};

const resetState = () => {
  nextBtn.style.display = "none";
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
};

startQuiz();

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  } else {
    startQuiz();
  }
});

const showScore = () => {
  resetState();
  questionElement.innerHTML = `Your score is ${score}/${questions.length}`;
  nextBtn.innerHTML = "Play again";
  nextBtn.style.display = "block";
};
