import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.findAll('invitation'); // invitaion is our model for invitations
    },
    actions: {

    deleteInvitation(invitation) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        invitation.destroyRecord();
      }
    }
  }
});
