define('yo-app/tests/helpers/resolver', ['exports', 'yo-app/resolver', 'yo-app/config/environment'], function (exports, _yoAppResolver, _yoAppConfigEnvironment) {

  var resolver = _yoAppResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _yoAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _yoAppConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});