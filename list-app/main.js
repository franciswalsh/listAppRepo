// Select the input element with the id 'todoInput' and store in a variable `todoInput`.

// Select the ordered list element with the id 'todoList' and store in a variable `todoList`.


// Add a keypress event listener to `todoInput`.
// Pass an anonymous function as the second argument to the event listener.
// Don't forget to provide the anonymous function with an `event` argument.

  // Within the function body check to see if the event's `keyCode` property is equal to 13
  // (This checks for [Enter] key press)

    // Within the conditional statement
    // Get the event target element's value and store it in a variable `todoContent`.

    // Set the event tartget element's value to empty string.

    // Create a new list item element and store it in a variable `newTodoLi`.

    // Set the new list item's text content to `todoContent`.

    // Append the new list item to `todoList`


  // Outside of the conditional
  // Return the event object



// var todoInput = document.querySelector("#todoInput");
// var todoList = document.querySelector("#todoList");
//
// todoInput.addEventListener("keydown", checkEnter);
// todoInput.addEventListener("keyup", changeColor);
//
// function changeColor (e){
//   if (e.keyCode == 13){
//       todoInput.style.backgroundColor = "yellow"
//   }
// }
//
//
// function checkEnter (random){
//   let todoContent = todoInput.value
//   if (random.keyCode == 13){
//     todoInput.style.backgroundColor = "red";
//     let newTodoLi = document.createElement("li");
//     newTodoLi.textContent = todoContent
//     todoList.appendChild(newTodoLi);
//     todoInput.value = ""
//   }
// }
//
// console.log(todoInput);

var todoInput = document.querySelector(".todoInput");

var todoList = document.getElementById("todoList");


todoInput.addEventListener("keypress", checkEnter);
todoInput.addEventListener("click", checkEnter1);

function checkEnter(e){

  let todoContent = todoInput.value;

  if (e.keyCode == 13){
    todoInput.style.backgroundColor = "red";
    let newTodoLi = document.createElement("li");
    newTodoLi.textContent = todoContent;
    todoList.appendChild(newTodoLi);
    todoInput.value = "please enter new";
  }
}
function checkEnter1(){

  let todoContent = todoInput.value;

    todoInput.style.backgroundColor = "red";
    let newTodoLi = document.createElement("li");
    newTodoLi.textContent = todoContent;
    todoList.appendChild(newTodoLi);
    todoInput.value = "please enter new";
  }
