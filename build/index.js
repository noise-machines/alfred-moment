'use strict';

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _alfy = require('alfy');

var _alfy2 = _interopRequireDefault(_alfy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var input = _alfy2.default.input.trim();
var hours = _moment2.default.duration(input).asHours();
_alfy2.default.output([{
  title: hours + ' hours',
  subtitle: 'Action this to copy the number of hours',
  arg: hours
}]);