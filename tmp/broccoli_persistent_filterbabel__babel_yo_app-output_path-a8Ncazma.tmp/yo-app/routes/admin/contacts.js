define('yo-app/routes/admin/contacts', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return this.store.findAll('contact'); // return all contacts      
        }
    });
});