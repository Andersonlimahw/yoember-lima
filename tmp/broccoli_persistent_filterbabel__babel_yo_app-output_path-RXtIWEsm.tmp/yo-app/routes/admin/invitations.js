define('yo-app/routes/admin/invitations', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('invitation'); // invitaion is our model for invitations
    },
    actions: {

      deleteInvitation: function deleteInvitation(invitation) {
        var confirmation = confirm('Are you sure?');

        if (confirmation) {
          invitation.destroyRecord();
        }
      }
    }
  });
});