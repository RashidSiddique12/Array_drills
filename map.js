// Do NOT use .map, to complete this function.
// How map works: Map calls a provided callback function once for each element in an array,
// in order, and functionructs a new array from the res .
// Produces a new array of values by mapping each value in list through a transformation function (iteratee).
// Return the new array.

const items = [1, 2, 3, 4, 5, 5];

function map(elements, cb) {
  const newarr = [];
  for (let i = 0; i < elements.length; i++) {
    newarr.push(cb(elements[i]));
  }
  return newarr;
}

const newarr = map(items, (element) => element * 3);

console.log(newarr);
