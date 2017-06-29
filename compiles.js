const _extends = Object.assign || function (target) {
  for (let i = 1; i < arguments.length; i++) {
    const source = arguments[i];
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};

const text = require('./hello');
(function () {
  console.log('es6');
}());
let mike = {
  name: 'mike',
  sex: 'male',
};
mike = _extends({}, mike, {
  age: 20,
});
console.log(mike);
require('./index.css');
console.log('print text', text);
