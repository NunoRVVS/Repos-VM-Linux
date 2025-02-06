// DOM elemnts
const inputVal = document.getElementById('input');
const expressionDiv = document.getElementById('expression');
const resultDiv = document.getElementById('result');

//Define expression and result variable
let expression = '';
let result = '';

//Define event handler for BTN clicks

function buttonClick(event) {
    //get values from clicked btn
    const target = event.target;
    const action = target.dataset.action;
    const value = target.dataset.value;

    //SWITCH case to control calculator
}

inputVal.addEventListener('click', buttonClick);


// function appendToDisplay(val) { 
//     document.getElementById("display").value += val;
// }

// function clearDisplay() {
//     document.getElementById("display").value = "";
// }

// function deleteValue() {
//     document.getElementById("display").value = document.getElementById("display").value(0, -1);
// }

// function calculate() {
//     document.getElementById("display").value = [];
//     let op = ["-","+","*","/"]

// }
