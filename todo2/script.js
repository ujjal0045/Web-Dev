let input = document.querySelector('input');
let addBtn = document.querySelector('.task-btn');
let taskContainer = document.querySelector('ul');


addBtn.addEventListener('click', () => {
  const li = document.createElement("li");

  const delBtn = document.createElement('button');
  delBtn.innerText = 'Delete';
  delBtn.classList.add("delete");

  let data = input.value;
  input.value='';

  li.textContent = data;

  li.appendChild(delBtn);
  taskContainer.appendChild(li);
});

// here we event in a function isse fayda kya hoga issa hum kis button me click kr raha hai wo pta chalte hai. jo bahot helpfull hota hai pahchana me ki kon sa button click hua hai
taskContainer.addEventListener("click", (event) =>{
  console.dir(event.target);
  if(event.target.nodeName == 'BUTTON'){
    let listItem = event.target.parentElement;
    listItem.remove(); 
  }
  

})