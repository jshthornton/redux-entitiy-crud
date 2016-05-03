import { call, put, take, fork, select } from 'redux-saga/effects';
import * as sagas from '../sagas';
import _ from 'lodash';

describe('sagas', function() {
  describe('::fetchEntity', function() {
    it('should', function() {
      const generator = sagas.fetchEntity({
        entityName: 'Brand',
        entityActions: {
          fetchRequest: function() {
            return {
              type: 'FOO'
            }
          },
          fetchSuccess: function() {},
          fetchFailure: function() {}
        },
        apiFn: function() {},
        parser: function() {}
      }, {
        id: 1
      });

      
      expect(_.isEqual(generator.next().value, put({
        type: 'FOO'
      })));
    });
  });
});