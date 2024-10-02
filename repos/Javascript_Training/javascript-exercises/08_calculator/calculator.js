const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(newArray) {
	let total = 0;
    for (let i = 0; i < newArray.length; i++) {
        total += newArray[i];
    }
    return total;
}

const multiply = function(newArray) {
	let result = 1;
    for (let i = 0; i < newArray.length; i++) {
        result *= newArray[i];
    }
    return result;
}

const power = function(a, p) {
  let result = Math.pow(a, p);
  for (let i = 0; i < 0; i++);
  if (p < 1) { 
    return 'ERROR';
  }
    return result;
};

const factorial = function(number) {
  if (number < 0) {
    return -1;
  } 
  else if (number == 0) {
    return 1;
  } 
  else {
      return (number * factorial(number - 1))
};
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
