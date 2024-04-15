const add = function(number1, number2) {
	const sum= number1+number2;
  return sum;
};

const subtract = function(number1, number2) {
  const subtract= number1-number2;
  return subtract;
	
};

const sum = function(array) {
  let sum= 0;
  array.forEach(number => {
    sum+= number;
    
  });
  return sum;
	
};

const multiply = function(array) {
  return array.reduce((total,curr)=> total*curr)
};

const power = function() {
  
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
