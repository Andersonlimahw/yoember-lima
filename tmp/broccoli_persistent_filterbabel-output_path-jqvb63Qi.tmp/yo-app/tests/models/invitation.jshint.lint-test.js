define('yo-app/tests/models/invitation.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/invitation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/invitation.js should pass jshint.\nmodels/invitation.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/invitation.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});