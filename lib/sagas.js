'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchEntity = fetchEntity;
exports.createEntity = createEntity;
exports.updateEntity = updateEntity;
exports.deleteEntity = deleteEntity;

var _reduxSaga = require('redux-saga');

var _effects = require('redux-saga/effects');

var _http = require('complication/lib/http');

var _marked = [fetchEntity, createEntity, updateEntity, deleteEntity].map(regeneratorRuntime.mark);

// Errors / Exceptions


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

          if (!(response.status === 404)) {
            _context.next = 10;
            break;
          }

          throw new _http.NotFoundHttpError(config.entityName + ' not found');

        case 10:
          if (!(response.status === 400)) {
            _context.next = 12;
            break;
          }

          throw new _http.BadRequestHttpError(config.entityName + ' bad request');

        case 12:
          _context.next = 14;
          return (0, _effects.put)(config.entityActions.fetchSuccess(config.parser(json, options.parserOptions)));

        case 14:
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context['catch'](2);
          _context.next = 20;
          return (0, _effects.put)(config.entityActions.fetchFailure(_context.t0));

        case 20:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[2, 16]]);
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

          if (!(response.status === 404)) {
            _context2.next = 10;
            break;
          }

          throw new _http.NotFoundHttpError(config.entityName + ' not found');

        case 10:
          if (!(response.status === 400)) {
            _context2.next = 12;
            break;
          }

          throw new _http.BadRequestHttpError(config.entityName + ' bad request');

        case 12:
          _context2.next = 14;
          return (0, _effects.put)(config.entityActions.createSuccess(config.parser(json, options.parserOptions)));

        case 14:
          _context2.next = 20;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2['catch'](2);
          _context2.next = 20;
          return (0, _effects.put)(config.entityActions.createFailure(_context2.t0));

        case 20:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[2, 16]]);
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

          if (!(response.status === 404)) {
            _context3.next = 10;
            break;
          }

          throw new _http.NotFoundHttpError(config.entityName + ' not found');

        case 10:
          if (!(response.status === 400)) {
            _context3.next = 12;
            break;
          }

          throw new _http.BadRequestHttpError(config.entityName + ' bad request');

        case 12:
          _context3.next = 14;
          return (0, _effects.put)(config.entityActions.updateSuccess(config.parser(json, options.parserOptions)));

        case 14:
          _context3.next = 20;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3['catch'](2);
          _context3.next = 20;
          return (0, _effects.put)(config.entityActions.updateFailure(_context3.t0));

        case 20:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this, [[2, 16]]);
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

          if (!(response.status === 404)) {
            _context4.next = 10;
            break;
          }

          throw new _http.NotFoundHttpError(config.entityName + ' not found');

        case 10:
          if (!(response.status === 400)) {
            _context4.next = 12;
            break;
          }

          throw new _http.BadRequestHttpError(config.entityName + ' bad request');

        case 12:
          _context4.next = 14;
          return (0, _effects.put)(config.entityActions.deleteSuccess(config.parser(json, options.parserOptions)));

        case 14:
          _context4.next = 20;
          break;

        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4['catch'](2);
          _context4.next = 20;
          return (0, _effects.put)(config.entityActions.deleteFailure(_context4.t0));

        case 20:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this, [[2, 16]]);
};
