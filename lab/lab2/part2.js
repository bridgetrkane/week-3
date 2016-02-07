/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */

/*

ORIG

var countItem = function(array,val) {
  var n = 0;
  for (i=0; i<array.length; i++) {
    if (array[i]===val) {
      n++;
    }
  }
return n;
};

console.log('countItem success:', countItem([1, 2, 3, 4, 5, 4, 4], 4) === 3);

*/

var countItem = function(array,val) {
  var n = 0;
  _.each(array, function(x) {
    if (x===val) {
      n++;
    }
  });
  return n;
};

console.log('countItem success:', countItem([1, 2, 3, 4, 5, 4, 4], 4) === 3);


/*

ORIG

var filterOutLessThan10 = function(array) {
  var arr = [];
  for(var i = 0; i < array.length; i++) {
    if(array[i] > 10) {
      arr.push(array[1]);
    }
  }
  return arr.length;
};

console.log('filterOutLessThan10 success:', filterOutLessThan10([4, 11]) === [11]);

*/


var filterOutLessThan10 = function(array) {
  var arr = [];
  _.each(array,function(num) {
    if(num > 10) {
      arr.push(num);
    }
  });
  return arr;
};

console.log('filterOutLessThan10 success:', filterOutLessThan10([4, 11]).length === 1);
