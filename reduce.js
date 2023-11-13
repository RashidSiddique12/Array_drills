// Do NOT use .reduce to complete this function.
// How reduce works: A reduce function combines all elements into a single value going from left to right.
// Elements will be passed one by one into `cb` along with the `startingValue`.
// `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
// `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.

const items = [1, 2, 3, 4, 5, 5];

function reduce(elements, cb, startingValue) {
  let store = startingValue;
  for (let i = 0; i < elements.length; i++) {
    store = cb(store, elements[i]);
  }
  return store;
}

const sumOfItems = reduce(items,(acc, curr) => {
    return acc + curr;
  },0);

console.log(sumOfItems);
