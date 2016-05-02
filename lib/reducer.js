'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.del = exports.update = exports.read = exports.create = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var create = exports.create = function create(state, action, path) {
  var idKey = arguments.length <= 3 || arguments[3] === undefined ? 'id' : arguments[3];

  if (action.error === true) {
    return state;
  }

  return state.merge(Immutable.fromJS(_lodash2.default.get(action, path)));
};

var read = exports.read = function read(state, action, path) {
  var idKey = arguments.length <= 3 || arguments[3] === undefined ? 'id' : arguments[3];

  if (action.error === true) {
    return state;
  }

  return state.merge(Immutable.fromJS(_lodash2.default.get(action, path)));
};

var update = exports.update = function update(state, action, path) {
  var idKey = arguments.length <= 3 || arguments[3] === undefined ? 'id' : arguments[3];

  if (action.error === true) {
    return state;
  }

  return state.merge(Immutable.fromJS(_lodash2.default.get(action, path)));
};

var del = exports.del = function del(state, action, path) {
  var idKey = arguments.length <= 3 || arguments[3] === undefined ? 'id' : arguments[3];

  if (action.error === true) {
    return state;
  }

  return state.filterNot(function (entity) {
    var id = entity.get(idKey);
    return _lodash2.default.includes(_lodash2.default.get(action, path), id);
  });
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
