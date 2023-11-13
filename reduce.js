const reduceFn = function reduce(elements, cb, startingValue) {
  let startingIndex;
  let store;

  if (startingValue !== undefined) {
    store = startingValue;
    startingIndex = 0;
  } else {
    store = elements[0];
    startingIndex = 1;
  }

  for (let i = startingIndex; i < elements.length; i++) {
    store = cb(store, elements[i]);
  }
  return store;
}


module.exports = reduceFn;