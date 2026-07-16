// make a array to store to-do add.
let todos = JSON.parse(localStorage.getItem("todos") || "[]");
displayTodos();

// create a fucntion that helps to push the data into to-do array
function getData() {

    // Get values from the input boxes
    const taskInput = document.querySelector("#todo-input");
    const dateInput = document.querySelector("#todo-date");
    const task = taskInput.value.trim();
    const date = dateInput.value;

    // agar task me data nhi hoga to ek alert box aayega
    if(!task){
      alert("Please enter your task first!");
      return;
    }

    // Create an object
    const todoObject = {
        task: task,
        date: date
    };

    // Add object into array
    todos.push(todoObject);

    localStorage.setItem('todos', JSON.stringify(todos));

    taskInput.value = '';
    dateInput.value = '';
    displayTodos();
}

// deleting row
function deleteData(index){
  todos.splice(index,1);
  localStorage.setItem('todos', JSON.stringify(todos));
  displayTodos();
}

function displayTodos(){
  const box = document.querySelector('.todo-container');
  if(todos.length === 0) {
    box.innerHTML = `<p class="Empty-string">No task Avilable, First write your task! </p>`;
    return;
  }

  let data = '';
  for(let i = 0; i < todos.length; i++){
    const task = todos[i].task;
    const dueDate = todos[i].date || 'No deadline';

    data += `
        <div class="para">
          <p>${task}</p>
          <p>${dueDate}</p>
          <button onclick="deleteData(${i})">Delete</button>
        </div>
    `;
  }
  box.innerHTML = data;
}