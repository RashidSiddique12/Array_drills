const eachfn = require('../each');

const items = [1, 2, 3, 4, 5, 5];

eachfn(items, (element, i) => console.log(`${i} -> ${element}`));