define('yo-app/models/contact', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    email: _emberData['default'].attr('string'),
    message: _emberData['default'].attr('string')
  });
});