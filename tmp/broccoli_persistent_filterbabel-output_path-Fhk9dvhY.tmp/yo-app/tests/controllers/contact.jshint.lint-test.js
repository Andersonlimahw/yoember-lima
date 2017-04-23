define('yo-app/tests/controllers/contact.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/contact.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/contact.js should pass jshint.\ncontrollers/contact.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/contact.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/contact.js: line 15, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/contact.js: line 17, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/contact.js: line 18, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/contact.js: line 20, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/contact.js: line 25, col 39, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/contact.js: line 26, col 37, \'template literal syntax\' is only available in ES6 (use \'esversion: 6\').\n\n8 errors');
  });
});