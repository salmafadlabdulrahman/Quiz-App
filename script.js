const quizData = [
  {
    question: "Joseph Smith was the founder of what religion?",
    a: "Buddhism",
    b: "Christianity",
    c: "Hinduism",
    d: "Mormonism",
    correct: "c",
  },
  {
    question:
      "What is the name of the US Navy spy ship which was attacked and captured by North Korean forces in 1968?",
    a: "USS North Carolina",
    b: "USS Pueblo",
    c: "USS Constitution",
    d: "USS Indianapolis",
    correct: "b",
  },
  {
    question: "What number does the Roman numeral &quot;D&quot; stand for?",
    a: "50",
    b: "1000",
    c: "100",
    d: "500",
    correct: "d",
  },
  {
    question:
      "Which of these countries was sea charted in 1500 by the Portuguese maritime explorations?",
    a: "Brazil",
    b: "India",
    c: "Madagascar",
    d: "Mozambique",
    correct: "a",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const question = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const nextBtn = document.querySelector(".next-btn");
const options = document.querySelector(".options");
const quiz = document.querySelector('.quiz')

const a = document.getElementById("a-text");
const b = document.getElementById("b-text");
const c = document.getElementById("c-text");
const d = document.getElementById("d-text");

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuestion = quizData[currentQuestionIndex];
  question.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`
  a.innerText = currentQuestion.a;
  b.innerText = currentQuestion.b;
  c.innerText = currentQuestion.c;
  d.innerText = currentQuestion.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

nextBtn.addEventListener("click", function () {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuestionIndex].correct) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuiz();
    } else {
      question.innerHTML = `You finished your quiz :)`;
      options.style.display = "none";
      nextBtn.style.display = "none";
      quiz.innerHTML += `<h3>You scored ${score} out of 4</h3>
      <button class="btn" onclick="location.reload()">Retake The Quiz ?</button>`
    }
  }
});
