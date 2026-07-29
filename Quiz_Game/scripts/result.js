let score = localStorage.getItem('score');
let totalQuestions = localStorage.getItem('totalQuestion');

updateData();

console.log(score)
console.log(totalQuestions);

function updateData(){
  const final_Score = document.querySelector('.finalScore');
  const total_Questions = document.querySelector('.totalQuestion');
  const accuracyRate = Math.round((score / totalQuestions) * 100);

  final_Score.innerText = score;
  total_Questions.innerText = totalQuestions;
  document.querySelector('.rate').innerText = accuracyRate;
}

let btn = document.querySelector('.restartbtn');

btn.addEventListener( 'click' ,() => {
  localStorage.clear();
});