import Ember from 'ember';

export default Ember.Controller.extend({

  emailContact: '',
  message: '',

  isValidEmail: Ember.computed.match('emailContact', /^.+@.+\..+$/),   
  messageValid: Ember.computed.notEmpty('message'),
  isAllValid: Ember.computed.and('isValidEmail','message'),
  isDisabled: Ember.computed.not('isAllValid'), // if email and message is invalid 
  
  actions: {
    sendMessage() {      
      this.set('responseMessage', `Message sent successfully, using the email : ${this.get('emailContact')}`);
      this.set('emailContact', '');
      this.set('message', '');
    }    
  }

});