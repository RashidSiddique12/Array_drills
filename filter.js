// Do NOT use .filter, to complete this function.
// Similar to `find` but you will return an array of all elements that passed the truth test
// Return an empty array if no elements pass the truth test

const items = [1, 2, 3, 4, 5, 5];

function filter(elements, cb) {
  let store = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) == true) {
      store.push(elements[i]);
    }
  }
  return store;
}

const arrFiltered = filter(items, (element) => {
  return element > 3;
});

console.log(arrFiltered);
