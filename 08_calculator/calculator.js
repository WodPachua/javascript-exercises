const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, num) => total + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total * num, 1)
};

const power = function(num, power) {
	return Math.pow(num, power);
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  } else { 
    // num * factorial(num -1)
    let result = 1;
    for (num; num > 0; num--) {
      result *= num;
    }

    return result;
  };
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
