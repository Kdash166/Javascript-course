const testButton =  document.querySelector(".js-button")
.classList.contains('js-button');
// could be used to see if classes have been assigned or not during DOM manipulation
console.log(testButton);


function toggleButtons(selector){
const toggleButton =  document.querySelector(selector);
// the function is passed the selector which = a spercific class 
// the class selector is then assigned to a variable


if(toggleButton.classList.contains("is-toggled")){
   toggleButton.classList.remove("is-toggled");     
   
// the if statement checks if the classList containes is toggled
// if it does it removes this
} else {
    turnOffPreviousButton();
    toggleButton.classList.add("is-toggled");
// if the class list doesnt contain is toggled it adds it
   
}

}
function turnOffPreviousButton(){
const previousButton = document.querySelector(".is-toggled")

// this assigns the selector for .is-toggled to a variable


if(previousButton){
//if the  class has already been assigned (a button has been clicked) the previous button 
// with the class has it removed and the class is  then added
// to the clicked button. This occurs during the toggles button function
// if you remove this function the buttons will just toggle and undtoggle.
    previousButton.classList.remove("is-toggled");
}

}
