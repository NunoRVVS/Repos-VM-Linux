// DOM elements
//buttons
const inputVal = document.getElementById('input');
//expression eg. 3 + 5
const expressiotInp = document.querySelector(`input[id='expression']`);
//result of the expression
const resultInp = document.querySelector(`input[id='result']`);

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
    switch(action) {
        case 'number':
            addValue(value);
            break;
        case 'clear':
            clear();
            break;
        case 'backspace':
            backspace();
            break;
        case 'addition':
        case 'subtraction':
        case 'multiplication':
        case 'division':
            if (expression === '' && result != '') {
                startFromResult(value);
                //!isLastCharOperator is controlling the operator Char so it can only 
                // be inserted once after a number is input
            } else if (expression !== '' && !isLastCharOperator()) {
                addValue(value);
            }
        break;
        case 'submit':
            submit();
        break;
        case 'negate':
            negate();
        break;
        case 'percentage':
            percentage();
        break;
        case 'decimal':
            decimal(value);
        break;
    } 
    
    //update display
    updateDisplay(expression, result);
}

inputVal.addEventListener('click', buttonClick);

function addValue(value) {
    //add value to expression
    // expression += value;
    if(value === '.') {
        //find the last index of the last operator in 
        //the expression
        const lastOperatorIndex = expression.search(/[+\-*/]/);
        //find the last index of the last decimal in 
        //the expression
        const lastDecimalIndex = expression.lastIndexOf('.');
        //find the last index of the last number in 
        //the expression
        const lastNumberIndex = Math.max(
            expression.lastIndexOf('+'),
            expression.lastIndexOf('-'),
            expression.lastIndexOf('*'),
            expression.lastIndexOf('/')
        );
        //check if this is the 1st decimal in the 
        //current number or if the expresion is empty
        if( 
        (lastDecimalIndex < lastOperatorIndex || 
            lastDecimalIndex < lastNumberIndex ||
            lastDecimalIndex === -1) && 
            (expression === '' || expression.slice
            (lastNumberIndex + 1).indexOf('-') === -1)
        ) {
          expression += value;
        }
    } else {
        expression += value;
    }
}

function updateDisplay(expression, result) {
    expressiotInp.value = expression;
    resultInp.value = result;
}

function clear() {
    expression = '';
    result = '';
}

function backspace() {
    expression = expression.slice(0, -1);
}

function isLastCharOperator() {
    return isNaN(parseInt(expression.slice(-1)));
} 

function startFromResult(value) {
    expression += result + value;
}

function submit() {
    result = evaluateExpresion();
    expression = '';
}

function evaluateExpresion() {
    const evalResult = eval(expression);
    //checks if evalResult is not a number or if it is infinite
    return isNaN(evalResult) || !isFinite(evalResult)
    ? ' '
    : evalResult < 1 
    ? parseFloat(evalResult.toFixed(10))
    : parseFloat(evalResult.toFixed(2));
} 

function negate() {
    //negate the result if expression is empty 
    //and result is present
    if(expression === '' && result !== '') {
        result = -result;
    //toggle the sign of the expression if its not already negative 
    //and its not empty
    } else if (!expression.startsWith('-') && expression !=='') {
        expression = '-' + expression;
        //remove the negative sign from the expression if its 
        // already negative    
    } else if (expression.startsWith('-')) {
        expression = expression.slice(1);
    } 
}

function percentage() {
    //evaluate the expression, else it will take the % of the 
    //1st number only
    if(expression !== '') {
        result = evaluateExpresion();
        expression = '';
        if(!isNaN(result) && isFinite(result)) {
            result /= 100;
        } else {
            result = '';
        }
    } else if (result !== '') {
        //if expression is empty but the result exists, divide by 100
        result = parseFloat(result)/ 100;
    }
}

function decimal(value) {
    if(!expression.endsWith('.') && !isNaN(expression.slice(-1))) {
        addValue(value);
    }
}
