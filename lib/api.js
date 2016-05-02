'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateFormData = exports.createFormData = exports.fetchFormData = exports.serializeFormDataBody = exports.deleteJSON = exports.updateJSON = exports.createJSON = exports.getJSON = exports.fetchJSON = exports.serializeJSONBody = exports.fetcher = undefined;

var fetcher = exports.fetcher = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(url, options) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(buildURL(url, options.params), options);

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            _context.t0 = _context.sent;
            _context.t1 = response;
            return _context.abrupt('return', {
              json: _context.t0,
              response: _context.t1
            });

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetcher(_x, _x2) {
    return ref.apply(this, arguments);
  };
}();

exports.removeTrailingSlash = removeTrailingSlash;
exports.normalizeParams = normalizeParams;
exports.buildURL = buildURL;

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function removeTrailingSlash(url) {
  if (_lodash2.default.endsWith(url, '/')) {
    return url.slice(0, -1);
  }
  return url;
};

function normalizeParams(params) {
  if (_lodash2.default.isString(params)) {
    return '?' + params;
  } else if (_lodash2.default.isObject(params)) {
    return '?' + _queryString2.default.stringify(params);
  } else {
    return '';
  }
};

function buildURL(url, parma) {
  // Remove trailing slash as it doesn't support it
  return removeTrailingSlash(url) + normalizeParams(params);
}

;

// JSON

var serializeJSONBody = exports.serializeJSONBody = function serializeJSONBody(body) {
  if (_lodash2.default.isString(body)) {
    return body;
  } else {
    return JSON.stringify(body);
  }
};

var fetchJSON = exports.fetchJSON = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(url, overrideOptions) {
    var options;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _lodash2.default.defaultsDeep({
              body: serializeJSONBody(overrideOptions.body)
            }, overrideOptions, {
              credentials: 'include',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            });
            return _context2.abrupt('return', fetcher(url, options));

          case 2:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function fetchJSON(_x3, _x4) {
    return ref.apply(this, arguments);
  };
}();

var getJSON = exports.getJSON = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(url, params) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetchJSON(url, {
              method: 'GET',
              params: params
            });

          case 2:
            return _context3.abrupt('return', _context3.sent);

          case 3:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getJSON(_x5, _x6) {
    return ref.apply(this, arguments);
  };
}();

var createJSON = exports.createJSON = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(url, data, params) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return fetchJSON(url, {
              method: 'POST',
              params: params,
              body: data
            });

          case 2:
            return _context4.abrupt('return', _context4.sent);

          case 3:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function createJSON(_x7, _x8, _x9) {
    return ref.apply(this, arguments);
  };
}();

var updateJSON = exports.updateJSON = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(url, data, params) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return fetchJSON(url, {
              method: 'POST', // Because our current system does not support PUT ~_~
              params: params,
              body: data
            });

          case 2:
            return _context5.abrupt('return', _context5.sent);

          case 3:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function updateJSON(_x10, _x11, _x12) {
    return ref.apply(this, arguments);
  };
}();

var deleteJSON = exports.deleteJSON = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(url, params) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return fetchJSON(url, {
              method: 'DELETE',
              params: params
            });

          case 2:
            return _context6.abrupt('return', _context6.sent);

          case 3:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function deleteJSON(_x13, _x14) {
    return ref.apply(this, arguments);
  };
}();

// FormData

var serializeFormDataBody = exports.serializeFormDataBody = function serializeFormDataBody(data) {
  var formData = new FormData();

  _lodash2.default.forOwn(data, function (value, key) {
    formData.set(key, value);
  });

  return formData;
};

var fetchFormData = exports.fetchFormData = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(url, overrideOptions) {
    var options;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            options = _lodash2.default.defaultsDeep({
              body: serializeFormDataBody(overrideOptions.body)
            }, overrideOptions, {
              credentials: 'include',
              headers: {
                'Accept': 'application/json'
              }
            });
            return _context7.abrupt('return', fetcher(url, options));

          case 2:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function fetchFormData(_x15, _x16) {
    return ref.apply(this, arguments);
  };
}();

var createFormData = exports.createFormData = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(url, data, params) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return fetchFormData(url, {
              method: 'POST',
              params: params,
              body: data
            });

          case 2:
            return _context8.abrupt('return', _context8.sent);

          case 3:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function createFormData(_x17, _x18, _x19) {
    return ref.apply(this, arguments);
  };
}();

var updateFormData = exports.updateFormData = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(url, data, params) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return fetchFormData(url, {
              method: 'POST',
              params: params,
              body: data
            });

          case 2:
            return _context9.abrupt('return', _context9.sent);

          case 3:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));

  return function updateFormData(_x20, _x21, _x22) {
    return ref.apply(this, arguments);
  };
}();
