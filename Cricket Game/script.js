
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
  } else if (
    (c === 'bat' && u === 'ball') ||
    (c === 'ball' && u === 'stamp') ||
    (c === 'stamp' && u === 'bat')
  ) {
    resultMsg = 'Computer has Won...';
  } else {
    resultMsg = 'User has Won...';
  }

  console.log(resultMsg);
  return resultMsg;
}

function playGame(userChoice) {
  console.log(`You have chosen ${userChoice}`);
  const computerChoice = generateComputerChoice();
  const resultMessage = getResult(userChoice, computerChoice);
  const statusText = document.getElementById('statusText');
  const resultText = document.getElementById('resultText');

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
