'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateActions = undefined;

var _reduxActions = require('redux-actions');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _async = require('./async');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateActions = exports.generateActions = function generateActions(name, operations) {
  if (operations == null) {
    operations = ['create', 'fetch', 'update', 'delete', 'count'];
  }

  return _lodash2.default.reduce(operations, function (result, operation) {
    return _lodash2.default.assign({}, result, (0, _async.generateActions)(operation, name));
  }, {});
};
