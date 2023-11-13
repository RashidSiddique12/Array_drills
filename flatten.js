// Flattens a nested array (the nesting can be to any depth).
// Hint: You can solve this using recursion.
// Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

const nestedArray = [1, [2], [[3]], [[[4]]]];

function flatten(nestedArray) {
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

const flatArray = flatten(nestedArray);
console.log(flatArray);
