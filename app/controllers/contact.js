import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Message from Contact form',
  emailContact: '',
  message: '',

  isValidEmail: Ember.computed.match('emailContact', /^.+@.+\..+$/),
  messageValid: Ember.computed.notEmpty('message'),
  isAllValid: Ember.computed.and('isValidEmail', 'message'),
  isDisabled: Ember.computed.not('isAllValid'), // if email and message is invalid 

  actions: {
    sendMessage() {

      const email = this.get('emailContact');
      const message = this.get('message');

      const newMessage = this.store.createRecord('contact', {
        email: email,
        message: message
      });

      newMessage.save().then((response) => {
        this.set('responseMessage', `Message sent successfully, using the email : ${this.get('emailContact')}`);
        this.set('emailContact', '');
        this.set('message', '');
      });

    }
  }

});