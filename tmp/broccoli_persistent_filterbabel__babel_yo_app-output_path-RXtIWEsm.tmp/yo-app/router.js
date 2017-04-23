define('yo-app/router', ['exports', 'ember', 'yo-app/config/environment'], function (exports, _ember, _yoAppConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _yoAppConfigEnvironment['default'].locationType
  });

  Router.map(function () {

    this.route('about');
    this.route('contact');

    this.route('admin', function () {
      this.route('invitations');
      this.route('contacts');
    });

    this.route('libraries', function () {
      this.route('new');
      this.route('edit', { path: '/:library_id/edit' });
    });
  });

  exports['default'] = Router;
});