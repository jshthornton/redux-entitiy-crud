'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _normalizr = require('normalizr');

var stdParser = function stdParser(schema, data, options) {
  if (_.isArray(data)) {
    return (0, _normalizr.normalize)(data, (0, _normalizr.arrayOf)(schema));
  }

  return (0, _normalizr.normalize)(data, schema);
};

exports.default = stdParser;
