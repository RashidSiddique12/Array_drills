// Flattens a nested array (the nesting can be to any depth).
// Hint: You can solve this using recursion.
// Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
const flattenFn = require("../flatten");

const nestedArray = [1, [2], [[3]], [[[4]]]];

const flatArray = flattenFn(nestedArray);
console.log(flatArray);
