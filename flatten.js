const flattenFn = function flatten(nestedArray) {
  let store = [];

  function flating(nestedArray) {
    for (let i = 0; i < nestedArray.length; i++) {
      if (Array.isArray(nestedArray[i])) {
        flating(nestedArray[i]);
      } else {
        store.push(nestedArray[i]);
      }
    }
  }
  flating(nestedArray);
  return store;
}

module.exports = flattenFn;
