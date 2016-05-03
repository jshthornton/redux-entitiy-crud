import * as api from '../api';

describe('api', function() {
  describe('::removeTrailingSlash', function() {
    it('should remove trailing slash', function() {
      expect(api.removeTrailingSlash('/hello/')).toBe('/hello');
    });
  });
});