define('yo-app/routes/admin/contacts', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('contact'); // return all contacts
    },
    actions: {

      deleteContact: function deleteContact(contact) {
        var confirmation = confirm('Are you sure?');

        if (confirmation) {
          contact.destroyRecord();
        }
      }
    }
  });
});