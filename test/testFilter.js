// Do NOT use .filter, to complete this function.
// Similar to `find` but you will return an array of all elements that passed the truth test
// Return an empty array if no elements pass the truth test
const filterFn = require("../filter");

const items = [1, 2, 3, 4, 5, 5];

const arrFiltered = filterFn(items, (element) => {
  return element > 3;
});

console.log(arrFiltered);
