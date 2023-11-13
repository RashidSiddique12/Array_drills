const findFn = function find(elements, cb, data) {
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i], data) === true) {
      return elements[i];
    }
  }
  return undefined;
}

module.exports = findFn;
