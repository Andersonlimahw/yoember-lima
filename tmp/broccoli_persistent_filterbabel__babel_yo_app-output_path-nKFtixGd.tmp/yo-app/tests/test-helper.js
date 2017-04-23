define('yo-app/tests/test-helper', ['exports', 'yo-app/tests/helpers/resolver', 'ember-qunit'], function (exports, _yoAppTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_yoAppTestsHelpersResolver['default']);
});