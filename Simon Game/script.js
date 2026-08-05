let gameSeq = [];
let userSeq = [];
let started = false;
let btns = ["red","blue","orange","green"];
let level = 0;
let allbtns = document.querySelectorAll('.box');
let showLevel = document.querySelector("p");

// step 1 koi bhi key press krna pad game start ho jayega
document.addEventListener("keypress", ()=>{
  if(started == false){
    started = true;
    levelUp();
  }
});


function gameFlash(btn){
  btn.classList.add("flash");

  setTimeout( ()=>{
    btn.classList.remove("flash");
  }, 200);
}

function levelUp(){
  userSeq= [];
  level++;

  showLevel.innerText = `Level ${level}`;

  let randomIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randomIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  gameFlash(randBtn);
};

function userFlash(btn){
  btn.classList.add("userflash");

  setTimeout( ()=>{
    btn.classList.remove("userflash");
  }, 200);
}

function checkAnswer(i){
  console.log(userSeq, gameSeq);
  if(userSeq[i] === gameSeq[i]){
    if(userSeq.length == gameSeq.length){
      setTimeout( levelUp, 1000);
    }
  }else{
    showLevel.innerHTML =`Game Over! your score: <b> ${level} </b> press any key to start...`;
    reset();
  }
}

function btnPress(){
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAnswer(userSeq.length-1);
}

allbtns.forEach((btn) =>{
  btn.addEventListener("click",btnPress);
})

function reset(){
  level = 0;
  started = false;
  gameSeq = []
  userSeq = [];
}
