let todoList = JSON.parse(localStorage.getItem("todoList")) || []; // empty array 
// a good idea is to make this into an array of objects like
// const todoList = [{
//     todo:"make dinner";
//     dueDate:"30/08/23"
//... }]
renderTodoList();
function renderTodoList(){
letTodoListHTML='';
todoList.forEach(function(todoObject, index){
    // const name = todoObject.name;
    // const dueDate = object.dueDate;
    let { name, dueDate } = todoObject;
    // this is called object destructuring and is used when 
    // the varaible has the same name as the object value 
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-btn" onclick="
    todoList.splice(${index}, 1);
    renderTodoList();
    ">Delete</button>`;
    letTodoListHTML += html;
    
});
localStorage.setItem("todoList", JSON.stringify(todoList));
    document.querySelector('.js-todo-list').innerHTML = letTodoListHTML;
}
function addTodo(){
const inputElement = document.querySelector('.js-name-input');
const name = inputElement.value;
const dateInputElement = document.querySelector('.js-date-input');
const dueDate = dateInputElement.value;

todoList.push({
    // name:name,
    // dueDate: dueDate
// shortcut you can just type the value out once if it is = to the property
// in a js object this is called short hand property syntax.
name,
dueDate
});
// updates array

// displays it in the text box
inputElement.value ='';
// updates the value back to an empty string
renderTodoList();
};

//  my code before watching walkthrough
// function addTodo(){
   
//    const todoValue = document.querySelector(".todo-item").value;
   
//    todoList.push(todoValue)
//    document.querySelector(
// '.display-todo-list'
// ).innerHTML = todoList

// }

// function todoListRemover(){
//    todoList.pop()
//    document.querySelector(
// '.display-todo-list'
// ).innerHTML = todoList;
// }
