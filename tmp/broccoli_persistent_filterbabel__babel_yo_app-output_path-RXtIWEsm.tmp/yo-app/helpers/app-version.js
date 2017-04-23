define('yo-app/helpers/app-version', ['exports', 'ember', 'yo-app/config/environment'], function (exports, _ember, _yoAppConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _yoAppConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});