const STORAGE_KEY = 'cricketGameScore';

let scoreBoard = {
  win: 0,
  lost: 0,
  tie: 0,
};

function saveScoreBoard() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scoreBoard));
  } catch (error) {
    console.warn('Could not save score to localStorage', error);
  }
}

function loadScoreBoard() {
  try {
    const savedScore = localStorage.getItem(STORAGE_KEY);
    if (savedScore) {
      const parsedScore = JSON.parse(savedScore);
      scoreBoard.win = Number(parsedScore.win) || 0;
      scoreBoard.lost = Number(parsedScore.lost) || 0;
      scoreBoard.tie = Number(parsedScore.tie) || 0;
    }
  } catch (error) {
    console.warn('Could not load score from localStorage', error);
  }
}

function generateComputerChoice() {
  const randomNumber = Math.random() * 3;
  let computerChoice = '';

  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = 'Bat';
    console.log('Computer choice is Bat...');
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = 'Ball';
    console.log('Computer choice is Ball...');
  } else {
    computerChoice = 'Stamp';
    console.log('Computer choice is Stamp...');
  }

  return computerChoice;
}

function getResult(user, computer) {
  const u = String(user).toLowerCase();
  const c = String(computer).toLowerCase();
  let resultMsg = '';

  if (u === c) {
    resultMsg = "It's a tie";
    scoreBoard.tie++;
  } else if (
    (c === 'bat' && u === 'ball') ||
    (c === 'ball' && u === 'stamp') ||
    (c === 'stamp' && u === 'bat')
  ) {
    resultMsg = 'Computer has Won...';
    scoreBoard.lost++;
  } else {
    resultMsg = 'User has Won...';
    scoreBoard.win++;
  }

  console.log(resultMsg);
  return resultMsg;
}

function updateScoreBoard() {
  const wins = document.getElementById('winsCount');
  const losses = document.getElementById('lossesCount');
  const ties = document.getElementById('tiesCount');

  if (wins) wins.textContent = scoreBoard.win;
  if (losses) losses.textContent = scoreBoard.lost;
  if (ties) ties.textContent = scoreBoard.tie;

  saveScoreBoard();
}

function resetScore() {
  scoreBoard.win = 0;
  scoreBoard.lost = 0;
  scoreBoard.tie = 0;
  updateScoreBoard();

  const statusText = document.getElementById('statusText');
  const resultText = document.getElementById('resultText');

  if (statusText) {
    statusText.textContent = 'Pick a move to start the game.';
  }

  if (resultText) {
    resultText.textContent = 'Your result will appear here.';
    resultText.className = 'result';
  }
}

function playGame(userChoice) {
  console.log(`You have chosen ${userChoice}`);
  const computerChoice = generateComputerChoice();
  const resultMessage = getResult(userChoice, computerChoice);
  const statusText = document.getElementById('statusText');
  const resultText = document.getElementById('resultText');

  updateScoreBoard();

  if (statusText) {
    statusText.textContent = `You picked ${userChoice} • Computer picked ${computerChoice}`;
  }

  if (resultText) {
    resultText.textContent = resultMessage;
    resultText.className = 'result';

    if (resultMessage.includes('tie')) {
      resultText.classList.add('tie');
    } else if (resultMessage.includes('Computer')) {
      resultText.classList.add('lose');
    } else {
      resultText.classList.add('win');
    }
  }
}

loadScoreBoard();
updateScoreBoard();
