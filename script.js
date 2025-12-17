





const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: 1
  }
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;

  answerBtns.forEach((btn, index) => {
    btn.textContent = q.answers[index];
    btn.disabled = false;
    btn.style.backgroundColor = "";
  });

  resultEl.textContent = "";
  nextBtn.style.display = "none";
}

function checkAnswer(index) {
  const correctIndex = questions[currentQuestion].correct;

  if (index === correctIndex) {
    resultEl.textContent = "Correct!";
    answerBtns[index].style.backgroundColor = "#8bc34a";
  } else {
    resultEl.textContent = "Wrong!";
    answerBtns[index].style.backgroundColor = "#f44336";
  }

  answerBtns.forEach(btn => btn.disabled = true);
  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz finished!";
    document.querySelector(".answers").style.display = "none";
    nextBtn.style.display = "none";
  }
}

loadQuestion();
