QUnit.module('JSHint | routes/libraries/edit.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/libraries/edit.js should pass jshint.\nroutes/libraries/edit.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/edit.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/edit.js: line 5, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/edit.js: line 9, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/edit.js: line 16, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/edit.js: line 22, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/edit.js: line 23, col 31, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/edit.js: line 26, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/edit.js: line 27, col 7, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/edit.js: line 30, col 9, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n10 errors');
});