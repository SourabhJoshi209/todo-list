const todoInput = document.getElementById("todo-input");
const addItemBtn = document.getElementById("add-item");
const todoList = document.getElementById("todo-list");

// Event Listeners
addItemBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", removeTodo);

// functions
function createNode(){
    const newTodo = document.createElement("li");
    newTodo.innerHTML = '<span class="update-btn">&#9444;</span>' + todoInput.value + ' <span class="remove-btn">x</span>';
    return newTodo;
}
// function to add todo item
function addTodo(event) {
  event.preventDefault(); //to prevent reload
  if (todoInput.value === "") {
    alert("WARNING>>You must enter something");
  } else {
    const newTodo=createNode();
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

//function to update todo item
todoList.addEventListener("click",function(){
  const clickedItem = event.target;
  if(clickedItem.classList.contains("update-btn")) {
    const todoItem = clickedItem.parentElement;
    const nodeItem= createNode();
    if(todoInput.value!==""){
    todoList.replaceChild(nodeItem, todoItem);
    todoInput.value="";
    }
    else{
      alert("UPDATE: Please Type in inputBox that you want and then click U button to update the item.")
    }
  }
});
 
