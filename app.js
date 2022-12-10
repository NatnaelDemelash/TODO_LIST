//SELECTOR
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filiterOption = document.querySelector(".filiter-todo");

//#EVENT LISTNER

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filiterOption.addEventListener("click", filiterTodo);

//FUNCTION

function addTodo(e) {
  e.preventDefault();
  //TODO DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //NEW TODO LIST
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value.toUpperCase();
  todoDiv.appendChild(newTodo);

  //CHECK BUTTON
  const completedButton = document.createElement("button");
  completedButton.classList.add("completed-btn");
  completedButton.innerHTML = '<i class = "fas fa-check"></i>';
  todoDiv.appendChild(completedButton);
  //TRASH BUTTON
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
  todoDiv.appendChild(trashButton);
  //APPEND DIV to the Ul
  todoList.appendChild(todoDiv);

  //CLEAR INPUT FIELD
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //DELETE TODO
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //ANIMATION
    todo.classList.add("fall");
    //EXCUTE TODO REMOE AFTER THE ANIMATION FINISHES
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //CHECK COMPLETED TASKS
  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filiterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
      default:
        break;
    }
  });
}
