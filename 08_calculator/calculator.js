const add = function (firstN, secondN) {
  return firstN + secondN;
};

const subtract = function (firstN, secondN) {
  return firstN - secondN;
};

const sum = function (arr) {
  let final = 0;
  for (i = 0; i < arr.length; i++) {
    final += arr[i];
  }
  return final;
};

const multiply = function (arr) {
  let final = 1;
  for (i = 0; i < arr.length; i++) {
    final *= arr[i];
  }
  return final;
};

const power = function (num, pow) {
  let final = num;
  for (let i = 1; i < pow; i++) {
    final *= num;
  }

  return final;
};

const factorial = function (num) {
  let final = 1;
  for (let i = 1; i <= num; i++) {
    final *= i;
  }

  return final;
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
