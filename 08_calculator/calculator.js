const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	return numArray.reduce((total,num) => total + num,0);
};

const multiply = function(numArray) {
  return numArray.reduce((total,num) => total * num, 1);
};

const power = function(num,power) {
	return num ** power;
};

const factorial = function(num) {
  if (num === 0) return 1
  else {
    let fact = num;
    for (let index = num - 1; index > 0; index--) {
      fact *= index;
    }
    return fact;
  }
	
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
