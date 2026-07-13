function play(user){
  const ComputerMove = generateComputerMove();
  const result = FindResult(user,ComputerMove);
  displayResult(user,ComputerMove,result);
}
let scoreSet = localStorage.getItem('score');
let score = JSON.parse(scoreSet) || {
  won: 0,
  lose: 0,
  tie:0
};
score.displayScore = function () {
  return `Win : ${score.won} • Tie: ${score.tie} • Lose: ${score.lose}`;
};
// Generate computer Move 
function generateComputerMove(){
  let computer_move = Math.floor(Math.random()*3);
  console.log(computer_move);
  if(computer_move === 0){
    computer_move = 'Stone';
  } else if(computer_move === 1){
    computer_move = 'Paper';
  }else {
    computer_move = 'Scissor';
  }
  console.log(computer_move);
  return computer_move;
}

function FindResult(user, computer){
  const u = user.toLowerCase();
  const c = computer.toLowerCase();
  let result;
  if(u == c){
    result = 'Its a Tie';
    score.tie++;
  } else if(u == 'stone' && c == 'scissor' || 
    u == 'paper' && c == 'stone' || 
    u == 'scissor' && c == 'paper'
  ) {
   result = 'User has Won';
   score.won++;
  } else{
    result = 'Computer has win';
    score.lose++;
  }
  localStorage.setItem('score',JSON.stringify(score));
  return result;
}

// Final result printing
function displayResult(user,computer,result){
  document.querySelector('#user-move').textContent = `Your move: ${user}`;
  document.querySelector('#computer_move').innerText = `Computer move: ${computer}`;
  document.querySelector('#result').innerText = `Winning: ${result}`;
  updateScoreDisplay();
  console.log(user,computer,result);
}


function updateScoreDisplay() {
  document.querySelector('#score').innerText = score.displayScore();
}
document.addEventListener('DOMContentLoaded', updateScoreDisplay);


 function resetScore(){
  score = {
     won: 0,
    lose: 0,
    tie:0,
  };
  score.displayScore = function () {
    return `win : ${score.won}, tie: ${score.tie}, lose: ${score.lose}`;
  };
  localStorage.setItem('score',JSON.stringify(score));
  updateScoreDisplay();
  document.querySelector('#user-move').textContent = `Your move: -`;
  document.querySelector('#computer_move').innerText = `Computer move: -`;
  document.querySelector('#result').innerText = `Winning: -`;
}