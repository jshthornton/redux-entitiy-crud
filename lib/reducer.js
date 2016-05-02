'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.del = exports.update = exports.read = exports.create = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var create = exports.create = function create(state, action) {
  var idKey = arguments.length <= 2 || arguments[2] === undefined ? 'id' : arguments[2];

  if (action.error === true) {
    return state;
  }

  if (_lodash2.default.isArray(action.payload) === true) {
    return _lodash2.default.assign({}, state, _lodash2.default.keyBy(action.payload, idKey));
  }

  return _lodash2.default.assign({}, state, _defineProperty({}, action.payload.id, action.payload));
};

var read = exports.read = function read(state, action) {
  var idKey = arguments.length <= 2 || arguments[2] === undefined ? 'id' : arguments[2];

  if (action.error === true) {
    return state;
  }

  if (_lodash2.default.isArray(action.payload) === true) {
    return _lodash2.default.assign({}, state, _lodash2.default.keyBy(action.payload, idKey));
  }

  return _lodash2.default.assign({}, state, _defineProperty({}, action.payload.id, action.payload));
};

var update = exports.update = function update(state, action) {
  var idKey = arguments.length <= 2 || arguments[2] === undefined ? 'id' : arguments[2];

  if (action.error === true) {
    return state;
  }

  if (_lodash2.default.isArray(action.payload) === true) {
    return _lodash2.default.merge({}, state, _lodash2.default.keyBy(action.payload, idKey));
  }

  return _lodash2.default.merge({}, state, _defineProperty({}, action.payload.id, action.payload));
};

var del = exports.del = function del(state, action) {
  var idKey = arguments.length <= 2 || arguments[2] === undefined ? 'id' : arguments[2];

  if (action.error === true) {
    return state;
  }

  if (_lodash2.default.isArray(action.payload) === true) {
    return _lodash2.default.omit(_lodash2.default.clone(state), _lodash2.default.map(action.payload, idKey));
  }

  return _lodash2.default.omit(_lodash2.default.clone(state), action.payload.id);
};

var reducer = function reducer(_reducer, config) {
  if (!_lodash2.default.isArray(config.create)) {
    config.create = [config.create];
  }

  if (!_lodash2.default.isArray(config.read)) {
    config.read = [config.read];
  }

  if (!_lodash2.default.isArray(config.update)) {
    config.update = [config.update];
  }

  if (!_lodash2.default.isArray(config.delete)) {
    config.delete = [config.delete];
  }

  return function (state, action) {

    if (state == null) {
      return _reducer(state, action);
    }

    if (_lodash2.default.includes(config.create, action.type)) {
      return create(state, action, config.path, config.idKey);
    }

    if (_lodash2.default.includes(config.read, action.type)) {
      return read(state, action, config.path, config.idKey);
    }

    if (_lodash2.default.includes(config.update, action.type)) {
      return update(state, action, config.path, config.idKey);
    }

    if (_lodash2.default.includes(config.delete, action.type)) {
      return del(state, action, config.path, config.idKey);
    }

    return _reducer(state, action);
  };
};

exports.default = reducer;
