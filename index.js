const text = require('./hello');
(() => {
  console.log('es6');
})();
let mike = {
  name: 'mike',
  sex: 'male',
};
mike = { ...mike,
  age: 20,
};
console.log(mike);
require('./index.css');
console.log('print text', text);
