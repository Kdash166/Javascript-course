// let todoList = JSON.parse(localStorage.getItem("todoList")) || []; // empty array
// // a good idea is to make this into an array of objects like
// // const todoList = [{
// //     todo:"make dinner";
// //     dueDate:"30/08/23"
// //... }]
// renderTodoList();
// function renderTodoList(){
//  let todoListHTML='';

// todoList.forEach((todoObject, index) => {
// // arrow function placed.
//     // const name = todoObject.name;
//     // const dueDate = object.dueDate;
//     let { name, dueDate } = todoObject;
//     // this is called object destructuring and is used when
//     // the varaible has the same name as the object value
//     const html = `
//     <div>${name}</div>
//     <div>${dueDate}</div>
//     <button class="delete-btn js-delete-todo-btn" >Delete</button>`;
//     todoListHTML += html;

// document.querySelectorAll('.js-delete-todo-btn')
// .forEach((deleteButton, index) => {
// deleteButton.addEventListener('click', () => {
// todoList.splice(index, 1);
// renderTodoList();
//     });
// });

// });
// localStorage.setItem("todoList", JSON.stringify(todoList));
//     document.querySelector('.js-todo-list')
//     .innerHTML = todoListHTML;
// }

// document.querySelector('.js-add-todo-button').addEventListener('click',() => {
//     addTodo();
// });
// function addTodo(){
// const inputElement = document.querySelector('.js-name-input');
// const name = inputElement.value;
// const dateInputElement = document.querySelector('.js-date-input');
// const dueDate = dateInputElement.value;

// todoList.push({
//     // name:name,
//     // dueDate: dueDate
// // shortcut you can just type the value out once if it is = to the property
// // in a js object this is called short hand property syntax.
// name,
// dueDate
// });
// // updates array

// // displays it in the text box
// inputElement.value ='';
// // updates the value back to an empty string
// renderTodoList();
// };

// //  my code before watching walkthrough
// // function addTodo(){

// //    const todoValue = document.querySelector(".todo-item").value;

// //    todoList.push(todoValue)
// //    document.querySelector(
// // '.display-todo-list'
// // ).innerHTML = todoList

// // }

// // function todoListRemover(){
// //    todoList.pop()
// //    document.querySelector(
// // '.display-todo-list'
// // ).innerHTML = todoList;
// // }

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-btn js-delete-todo-btn" data-index="${index}">Delete</button>`;
    todoListHTML += html;
  });

  localStorage.setItem("todoList", JSON.stringify(todoList));
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

// Attach event listeners for delete buttons
document.querySelector(".js-todo-list").addEventListener("click", (event) => {
  if (event.target.classList.contains("js-delete-todo-btn")) {
    const index = event.target.dataset.index;
    todoList.splice(index, 1);
    renderTodoList();
  }
});

renderTodoList();

document.querySelector(".js-add-todo-button").addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({ name, dueDate });
  inputElement.value = "";
  renderTodoList();
}

