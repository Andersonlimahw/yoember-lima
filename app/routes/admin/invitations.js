import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.findAll('invitation'); // invitaion is our model for invitations
    }
});
