define('yo-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'yo-app/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _yoAppConfigEnvironment) {
  var _config$APP = _yoAppConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});