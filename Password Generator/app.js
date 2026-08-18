const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*";

const Genbtn = document.querySelector(".generate-btn");
const copybtn = document.getElementById("copy-btn");


const lengthSlider = document.getElementById("length");
const lengthValue = document.querySelector("#length-value");

lengthSlider.addEventListener("input", () =>{
  lengthValue.innerText = lengthSlider.value;
});


function generatePassword(length, pool,score){
  let passwordStatus = document.getElementById("strength-text");
  const bars = document.querySelectorAll(".strength-bars span");

  bars.forEach(bar => {
    bar.classList.remove("weak", "medium", "strong");
  });


  let pass = "";
  for(let i=0;i<length;i++){
    let idx = Math.floor(Math.random() * pool.length);
    pass += pool[idx];
  }

  let scoreValue = score <= 2 ? "Weak" : score <= 4 ? "Medium" : "Strong";
  
  if(scoreValue === "Weak"){
    passwordStatus.innerText = scoreValue;
    passwordStatus.style.color = "red";

     bars[0].classList.add("weak");
    
  } else if(scoreValue === "Medium"){
    passwordStatus.innerText = scoreValue;
    passwordStatus.style.color = "orange";

    bars[0].classList.add("medium");
    bars[1].classList.add("medium");
  } else{
    passwordStatus.style.color = "#3bd477";
    passwordStatus.innerText = scoreValue;
    bars[0].classList.add("strong");
    bars[1].classList.add("strong");
    bars[2].classList.add("strong");
  }

  document.getElementById("password").innerText = pass;
}


Genbtn.addEventListener("click",() =>{

  let score = 0;
  let charPool = "";
  let length = lengthSlider.value;

  const uppercaseBox = document.getElementById("uppercase");
  const lowercaseBox = document.getElementById("lowercase");
  const numbersBox = document.getElementById("numbers");
  const symbolsBox = document.getElementById("symbols");


  if(uppercaseBox.checked){
    charPool += uppercase;
    score +=1;
  }
  if(lowercaseBox.checked) {
    score += 1;
    charPool += lowercase;
  }
  if(numbersBox.checked) {
    score +=1;
    charPool += numbers;
  }
  if(symbolsBox.checked) {
    score +=1;
    charPool += symbols;
  }
  if(length < 8) score += 0;
  if(length > 8 ) score += 1;

  
  generatePassword(length,charPool,score);

});


copybtn.addEventListener("click", ()=>{
  const pass = document.getElementById("password").innerText;
  if(pass){
    navigator.clipboard.writeText(pass);
    document.querySelector(".copy-popup").classList.add("show");
    setTimeout(()=>{
      document.querySelector(".copy-popup").classList.remove("show");
    },2400);


    console.log("data");
  } else{
    console.log("No data have");
  }
});