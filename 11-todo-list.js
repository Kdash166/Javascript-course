const todoList = []; // empty array 
renderTodoList();
function renderTodoList(){
letTodoListHTML='';

for (i = 0;  i < todoList.length; i++){
const todo = todoList[i];
const html = `<p>${todo}</p>` 
// this is called generating the html 
// this is done dynamically rather than statically
letTodoListHTML += html;
}
console.log(letTodoListHTML)

document.querySelector('.js-todo-list').innerHTML = letTodoListHTML;
}
function addTodo(){
const inputElement = document.querySelector('.js-name-input');
const name1 = inputElement.value;

todoList.push(name1);
// updates array
console.log(todoList);
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
