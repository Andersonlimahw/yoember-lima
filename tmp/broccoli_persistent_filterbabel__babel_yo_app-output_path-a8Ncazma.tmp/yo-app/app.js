define('yo-app/app', ['exports', 'ember', 'yo-app/resolver', 'ember-load-initializers', 'yo-app/config/environment'], function (exports, _ember, _yoAppResolver, _emberLoadInitializers, _yoAppConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _yoAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _yoAppConfigEnvironment['default'].podModulePrefix,
    Resolver: _yoAppResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _yoAppConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});