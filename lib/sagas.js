'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statusChecker = statusChecker;
exports.fetchEntity = fetchEntity;
exports.createEntity = createEntity;
exports.updateEntity = updateEntity;
exports.deleteEntity = deleteEntity;
exports.countEntity = countEntity;

var _reduxSaga = require('redux-saga');

var _effects = require('redux-saga/effects');

var _http = require('complication/lib/http');

var _marked = [fetchEntity, createEntity, updateEntity, deleteEntity, countEntity].map(regeneratorRuntime.mark);

// Errors / Exceptions


function statusChecker(entityName, status) {
  if (status >= 400) {
    throw new _http.HttpError(status, entityName);
  }
}

function fetchEntity(config, options) {
  var _ref, json, response;

  return regeneratorRuntime.wrap(function fetchEntity$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.put)(config.entityActions.fetchRequest(options.url || options.id));

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return (0, _effects.call)(config.apiFn, options.url || options.id, options.params);

        case 5:
          _ref = _context.sent;
          json = _ref.json;
          response = _ref.response;


          statusChecker(response.status);

          _context.next = 11;
          return (0, _effects.put)(config.entityActions.fetchSuccess(config.parser(json, options.parserOptions)));

        case 11:
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context['catch'](2);
          _context.next = 17;
          return (0, _effects.put)(config.entityActions.fetchFailure(_context.t0));

        case 17:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[2, 13]]);
};

function createEntity(config, options) {
  var _ref2, json, response;

  return regeneratorRuntime.wrap(function createEntity$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.put)(config.entityActions.createRequest(options.url || options.id));

        case 2:
          _context2.prev = 2;
          _context2.next = 5;
          return (0, _effects.call)(config.apiFn, options.data, options.params);

        case 5:
          _ref2 = _context2.sent;
          json = _ref2.json;
          response = _ref2.response;


          statusChecker(response.status);

          _context2.next = 11;
          return (0, _effects.put)(config.entityActions.createSuccess(config.parser(json, options.parserOptions)));

        case 11:
          _context2.next = 17;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2['catch'](2);
          _context2.next = 17;
          return (0, _effects.put)(config.entityActions.createFailure(_context2.t0));

        case 17:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[2, 13]]);
};

function updateEntity(config, options) {
  var _ref3, json, response;

  return regeneratorRuntime.wrap(function updateEntity$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.put)(config.entityActions.updateRequest(options.url || options.id));

        case 2:
          _context3.prev = 2;
          _context3.next = 5;
          return (0, _effects.call)(config.apiFn, options.url || options.id, options.data, options.params);

        case 5:
          _ref3 = _context3.sent;
          json = _ref3.json;
          response = _ref3.response;


          statusChecker(response.status);

          _context3.next = 11;
          return (0, _effects.put)(config.entityActions.updateSuccess(config.parser(json, options.parserOptions)));

        case 11:
          _context3.next = 17;
          break;

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3['catch'](2);
          _context3.next = 17;
          return (0, _effects.put)(config.entityActions.updateFailure(_context3.t0));

        case 17:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this, [[2, 13]]);
};

function deleteEntity(config, options) {
  var _ref4, json, response;

  return regeneratorRuntime.wrap(function deleteEntity$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.put)(config.entityActions.deleteRequest(options.url || options.id));

        case 2:
          _context4.prev = 2;
          _context4.next = 5;
          return (0, _effects.call)(config.apiFn, options.url || options.id, options.params);

        case 5:
          _ref4 = _context4.sent;
          json = _ref4.json;
          response = _ref4.response;


          statusChecker(response.status);

          _context4.next = 11;
          return (0, _effects.put)(config.entityActions.deleteSuccess(config.parser(json, options.parserOptions)));

        case 11:
          _context4.next = 17;
          break;

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4['catch'](2);
          _context4.next = 17;
          return (0, _effects.put)(config.entityActions.deleteFailure(_context4.t0));

        case 17:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this, [[2, 13]]);
};

function countEntity(config, options) {
  var _ref5, json, response;

  return regeneratorRuntime.wrap(function countEntity$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.put)(config.entityActions.countRequest());

        case 2:
          _context5.prev = 2;
          _context5.next = 5;
          return (0, _effects.call)(config.apiFn, options.params, options.url);

        case 5:
          _ref5 = _context5.sent;
          json = _ref5.json;
          response = _ref5.response;


          statusChecker(response.status);

          _context5.next = 11;
          return (0, _effects.put)(config.entityActions.countSuccess(config.parser(json, options.parserOptions)));

        case 11:
          _context5.next = 17;
          break;

        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5['catch'](2);
          _context5.next = 17;
          return (0, _effects.put)(config.entityActions.countFailure(_context5.t0));

        case 17:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this, [[2, 13]]);
};
