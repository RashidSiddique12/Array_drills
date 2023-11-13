// Do NOT use .includes, to complete this function.
// Look through each value in `elements` and pass each element to `cb`.
// If `cb` returns `true` then return that element.
// Return `undefined` if no elements pass the truth test.
const findFn = require("../find");

const items = [1, 2, 3, 4, 5, 5];

const isPresent = findFn(
  items,
  (element, data) => {
    if (element === data) return true;
  },
  4
);

console.log(isPresent);
