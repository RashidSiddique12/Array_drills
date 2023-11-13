const mapFn = function map(elements, cb) {
  const newarr = [];
  for (let i = 0; i < elements.length; i++) {
    newarr.push(cb(elements[i]));
  }
  return newarr;
}


module.exports = mapFn;