'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var text = require('./hello');
(function () {
  console.log('es6');
})();
var mike = {
  name: 'mike',
  sex: 'male'
};
mike = _extends({}, mike, {
  age: 20
});
console.log(mike);
require('./index.css');
console.log('print text', text);
