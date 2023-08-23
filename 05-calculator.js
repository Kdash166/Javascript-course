
let calculation = JSON.parse(localStorage.getItem("calculation")) || "";

const par = document.getElementById("display");
par.innerHTML = calculation;

function updateDisplay() {
 par.innerHTML = calculation;
}

function addToCalculation(value) {
 calculation += value;
 updateDisplay();
 localStorage.setItem("calculation", JSON.stringify(calculation));

}

function printLength(string) {
 console.log(string.length);

}
function calculateResult() {
 calculation = eval(calculation);
 updateDisplay();
 localStorage.setItem("calculation", JSON.stringify(calculation));

}

function clearCalculation() {
 calculation = "";
 updateDisplay();
 localStorage.setItem("calculation", JSON.stringify(calculation));

}

localStorage.setItem("calculation", JSON.stringify(calculation));
