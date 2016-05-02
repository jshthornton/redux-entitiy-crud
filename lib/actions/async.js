'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateActions = exports.generateActionType = exports.generateFunctionName = undefined;

var _reduxActions = require('redux-actions');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateFunctionName = exports.generateFunctionName = function generateFunctionName(actionNamePrefix, variant) {
  return actionNamePrefix + _lodash2.default.capitalize(variant);
};

var generateActionType = exports.generateActionType = function generateActionType(actionTypePrefix, actionNamePrefix, variant) {
  return (0, _lodash2.default)([actionTypePrefix, actionNamePrefix]).tap(function (array) {
    if (variant.length > 0) {
      array.push(variant);
    }
  }).map(_lodash2.default.snakeCase).thru(function (value) {
    return _lodash2.default.join(value, '_');
  }).thru(_lodash2.default.toUpper).value();
};

var generateActions = exports.generateActions = function generateActions(actionNamePrefix, actionTypePrefix, variations) {
  if (variations == null) {
    variations = ['', 'request', 'success', 'failure'];
  }

  return _lodash2.default.reduce(variations, function (result, variation) {
    // Make the function name (action name)
    var fnName = generateFunctionName(actionNamePrefix, variation);

    // Make the action type
    var type = generateActionType(actionTypePrefix, actionNamePrefix, variation);

    // Make the action
    result[fnName] = (0, _reduxActions.createAction)(type);
    result[type] = type;

    return result;
  }, {});
};
