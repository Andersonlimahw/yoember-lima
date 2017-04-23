define('yo-app/tests/helpers/start-app', ['exports', 'ember', 'yo-app/app', 'yo-app/config/environment'], function (exports, _ember, _yoAppApp, _yoAppConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _yoAppConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _yoAppApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});