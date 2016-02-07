/* =====================
  # Lab 1, Part 2 — Functions as Values

  Functions can be passed as values to other functions. Each exercise here builds on that theme.
===================== */

/* =====================
Instructions: Write a function that *always* returns the number 1.
===================== */

var justOne = function() {
  return 1;
};

console.log('justOne success:', justOne() === 1);

/* =====================
Instructions: Write a function that returns true if a number is even.
===================== */

var isEven = function(value) {
  if (value % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
};

console.log('isEven success:', isEven(2) === true && isEven(3) === false);

/* =====================
Instructions: Write a function that *always* returns false.
              Use functions "justOne" and "isEven" somehow in the definition.
===================== */

var justFalse = function(x) {
  return isEven(justOne(x));
};

console.log('justFalse success:', justFalse() === false);

/* =====================
Instructions: Write a function that takes a boolean value and returns its opposite.
===================== */

var not = function(boolean) {
  return !boolean;
};

console.log('not success:', not(true) === false);

/* =====================
Instructions: Write a function that returns true if a number is odd
              Use functions "isEven" and "not" somehow in the definition.
===================== */

var isOdd = function(x) {
  return not(isEven(x));
};

console.log('isOdd success:', isOdd(4) === false);

/* =====================
Instructions: Write a function that takes a list of numbers and returns a list with only numbers above 10
===================== */

var filterOutLessThan10 = function(x) {
  var arr = [];
  for(var i = 0; i < x.length; i++) {
    if(x[i] > 10) {
      arr.push(x[1]);
    }
  }
  return arr;
};

console.log('filterOutLessThan10 success:', filterOutLessThan10([4, 11]).length === 1);

/* =====================
Stretch goal — NOT required
Instructions: Let's bring it all together. Write a function that returns only odd numbers. It takes:
1. a list of numbers
2. a function that takes a number and returns true or false (isOdd, let's say)
===================== */

var filter = function(array, func) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (isOdd(array[i]) === true) {
      arr.push(array[i]);
    }
  }
  return arr;
};

console.log('filter success:', filter([4, 11], isOdd).length === 1);
