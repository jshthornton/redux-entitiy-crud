'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseJSON = undefined;

var parseJSON = exports.parseJSON = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(response) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', response.json());

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function parseJSON(_x) {
    return ref.apply(this, arguments);
  };
}();

exports.statusChecker = statusChecker;
exports.apiInvoker = apiInvoker;
exports.apiWrapper = apiWrapper;
exports.runtimeApiWrapper = runtimeApiWrapper;

var _reduxSaga = require('redux-saga');

var _effects = require('redux-saga/effects');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _http = require('complication/lib/http');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [apiWrapper].map(regeneratorRuntime.mark);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

// Errors / Exceptions


function statusChecker(response, config) {
  var status = response.status;

  if (status >= 400) {
    throw new _http.HttpError(status, config.entityName);
  }
}

function apiInvoker(config) {
  return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return config.apiFn({
              url: config.url,
              id: config.id,
              params: config.params,
              data: config.data
            });

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
}

function apiWrapper(config) {
  var apiFn, response, body, parsedBody;
  return regeneratorRuntime.wrap(function apiWrapper$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          config = _lodash2.default.assign({}, {
            apiInvoker: apiInvoker,
            bodyParser: parseJSON,
            responseChecker: statusChecker
          }, config);

          _context3.next = 3;
          return (0, _effects.put)(config.actions.request({
            url: config.url,
            id: config.id
          }));

        case 3:
          _context3.prev = 3;
          _context3.next = 6;
          return (0, _effects.call)(config.apiInvoker, config);

        case 6:
          apiFn = _context3.sent;
          _context3.next = 9;
          return (0, _effects.call)(apiFn);

        case 9:
          response = _context3.sent;
          _context3.next = 12;
          return (0, _effects.call)(config.bodyParser, response);

        case 12:
          body = _context3.sent;
          _context3.next = 15;
          return (0, _effects.call)(config.responseChecker, response, config);

        case 15:
          _context3.next = 17;
          return (0, _effects.call)(config.parser, body, config.parserOptions);

        case 17:
          parsedBody = _context3.sent;
          _context3.next = 20;
          return (0, _effects.put)(config.actions.success(parsedBody));

        case 20:
          _context3.next = 26;
          break;

        case 22:
          _context3.prev = 22;
          _context3.t0 = _context3['catch'](3);
          _context3.next = 26;
          return (0, _effects.put)(config.actions.failure(_context3.t0));

        case 26:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[0], this, [[3, 22]]);
}

function runtimeApiWrapper(config) {
  return function (overideConfig) {
    var mergedConfig = _lodash2.default.assign({}, config, overideConfig);

    return apiWrapper(mergedConfig);
  };
}
