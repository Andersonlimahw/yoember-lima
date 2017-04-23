define('yo-app/controllers/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    headerMessage: 'Message from Contact form',
    emailContact: '',
    message: '',

    isValidEmail: _ember['default'].computed.match('emailContact', /^.+@.+\..+$/),
    messageValid: _ember['default'].computed.notEmpty('message'),
    isAllValid: _ember['default'].computed.and('isValidEmail', 'message'),
    isDisabled: _ember['default'].computed.not('isAllValid'), // if email and message is invalid

    actions: {
      sendMessage: function sendMessage() {
        var _this = this;

        var email = this.get('emailContact');
        var message = this.get('message');

        var newMessage = this.store.createRecord('contact', {
          email: email,
          message: message
        });

        newMessage.save().then(function (response) {
          _this.set('responseMessage', 'Message sent successfully, using the email : ' + _this.get('emailContact'));
          _this.set('emailContact', '');
          _this.set('message', '');
        });
      }
    }

  });
});