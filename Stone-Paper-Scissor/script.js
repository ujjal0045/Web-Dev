const buttons = document.querySelectorAll('.btn');
const userMoveDisplay = document.getElementById('user-move');
const computerMoveDisplay = document.getElementById('computer_move');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');

let score = { win: 0, tie: 0, lose: 0 };

const moves = [
  { name: 'Stone', emoji: '🪨' },
  { name: 'Paper', emoji: '📄' },
  { name: 'Scissor', emoji: '✂️' }
];

function updateScoreboard() {
  scoreDisplay.textContent = `Win: ${score.win} • Tie: ${score.tie} • Lose: ${score.lose}`;
}

function resetScore() {
  score = { win: 0, tie: 0, lose: 0 };
  updateScoreboard();
  userMoveDisplay.textContent = 'Your move: —';
  computerMoveDisplay.textContent = 'Computer move: —';
  resultDisplay.textContent = 'Winner: —';
}

function playRound(userChoice) {
  const computerChoice = moves[Math.floor(Math.random() * moves.length)];
  let outcome = 'Tie!';

  if (
    (userChoice.name === 'Stone' && computerChoice.name === 'Scissor') ||
    (userChoice.name === 'Paper' && computerChoice.name === 'Stone') ||
    (userChoice.name === 'Scissor' && computerChoice.name === 'Paper')
  ) {
    outcome = 'You win!';
    score.win += 1;
  } else if (userChoice.name === computerChoice.name) {
    outcome = 'Tie!';
    score.tie += 1;
  } else {
    outcome = 'Computer wins!';
    score.lose += 1;
  }

  userMoveDisplay.textContent = `Your move: ${userChoice.name} ${userChoice.emoji}`;
  computerMoveDisplay.textContent = `Computer move: ${computerChoice.name} ${computerChoice.emoji}`;
  resultDisplay.textContent = `Winner: ${outcome}`;
  updateScoreboard();
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const userChoice = moves.find((move) => move.name === button.dataset.move);
    if (userChoice) {
      playRound(userChoice);
    }
  });
});

updateScoreboard();