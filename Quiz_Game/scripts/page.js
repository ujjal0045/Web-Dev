let quizIndex = 0;
const totalQuestions = quizData.length;
let score=0;
onload();

function onload(){
  displayQuestion();

}


function updateButtons() {
  const preBtn = document.querySelector('.previsiousQuestion');
  const Nextbtn = document.querySelector('.nextQuestion');
  if(quizIndex === 0){
    preBtn.style.display='none';
  } else{
    preBtn.style.display='block';
  }
  if(quizIndex=== quizData.length-1){
    Nextbtn.style.display='none';
  } else{
    Nextbtn.style.display='block';
  }
}

function optionClicked(optionNumber) {
  const question = quizData[quizIndex];
  if(optionNumber === question.correctAnswer){
    score++;
  }

  
  displayQuestion();
}




function displayNextQuestion(){
  quizIndex++;
  displayQuestion();
}

function displayPreviousQuestion(){
  const btn = document.querySelector('.previsiousQuestion');
  if(quizIndex <= 0){
    button.disabled = false;
  } else{
    quizIndex--;
  }
  displayQuestion();
}

function displayQuestion(){
  let quizContainer = document.querySelector('.quiz-container');
  const question = quizData[quizIndex];
  quizContainer.innerHTML = `<h2 class="Header">Interactive JavaScript Quiz</h2>

    <div class="quiz-header">

      <div class="top-info">
        <p class="question-count">Question <span id="currentQuestion">1</span> of <span id="totalQuestions">10</span></p>

        <p class="score">⭐ <span id="score">${score}</span>/${totalQuestions}</p>
      </div>

      <div class="progress-container">
        <div class="progress-bar"></div>
      </div>

    </div>
    
    <p class="quiz-question">${question.question}</p>
    <div class="option-container">
      <button class="btn option1">${question.options[0]}</button>
      <button class="btn option2">${question.options[1]}</button>
      <button class="btn option3">${question.options[2]}</button>
      <button class="btn option4">${question.options[3]}</button>
    </div>
    <div class="swap-questions">
      <button class="Butn previsiousQuestion" onclick="displayPreviousQuestion()">Previous</button>
      <button  class="Butn nextQuestion" onclick='displayNextQuestion()'>Next</button>
    </div>
  `;
  const buttons = document.querySelectorAll(".btn");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    optionClicked(index);
  });

});
document.getElementById("currentQuestion").textContent = quizIndex + 1;
document.getElementById("totalQuestions").textContent = quizData.length;
document.getElementById("score").textContent = score;

document.querySelector(".progress-bar").style.width =
`${((quizIndex + 1) / quizData.length) * 100}%`;
updateButtons()
}

