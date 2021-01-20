const todoInput = document.getElementById("todo-input");
const addItemBtn = document.getElementById("add-item");
const todoList = document.getElementById("todo-list");

// Event Listeners
addItemBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", removeTodo);

// functions

// function to add todo item
function addTodo(event) {
  event.preventDefault(); //to prevent reload
  if (todoInput.value === "") {
    alert("You must enter something");
  } else {
    const newTodo = document.createElement("li");

    newTodo.innerHTML = todoInput.value + ' <span class="remove-btn">x</span>';

    todoList.appendChild(newTodo);
    todoInput.value = "";
  }
}

// function to remove todo item
function removeTodo(event) {
  const clickedItem = event.target; //to get clicked item
  //   checking whether clicked thing has remove-btn class
  if (clickedItem.classList.contains("remove-btn")) {
    const todoItem = clickedItem.parentElement;
    todoItem.remove();
  }
}
