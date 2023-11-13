const filterFn = function filter(elements, cb) {
  let store = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) == true) {
      store.push(elements[i]);
    }
  }
  return store;
};

module.exports = filterFn;
