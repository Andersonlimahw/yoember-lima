"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('yo-app/adapters/application', ['exports', 'emberfire/adapters/firebase'], function (exports, _emberfireAdaptersFirebase) {
  exports['default'] = _emberfireAdaptersFirebase['default'].extend({});
});
define('yo-app/app', ['exports', 'ember', 'yo-app/resolver', 'ember-load-initializers', 'yo-app/config/environment'], function (exports, _ember, _yoAppResolver, _emberLoadInitializers, _yoAppConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _yoAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _yoAppConfigEnvironment['default'].podModulePrefix,
    Resolver: _yoAppResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _yoAppConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('yo-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
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
define('yo-app/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    headerMessage: 'Coming Soon',
    responseMessage: '',
    emailAddress: '',

    isValid: _ember['default'].computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: _ember['default'].computed.not('isValid'),

    actions: {

      saveInvitation: function saveInvitation() {
        var _this = this;

        var email = this.get('emailAddress');

        var newInvitation = this.store.createRecord('invitation', {
          email: email
        });

        newInvitation.save().then(function (response) {
          _this.set('responseMessage', 'Thank you! We saved your email address with the following id: ' + response.get('id'));
          _this.set('emailAddress', '');
        });
      }
    }

  });
});
define('yo-app/helpers/app-version', ['exports', 'ember', 'yo-app/config/environment'], function (exports, _ember, _yoAppConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _yoAppConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('yo-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('yo-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('yo-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'yo-app/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _yoAppConfigEnvironment) {
  var _config$APP = _yoAppConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('yo-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('yo-app/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('yo-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('yo-app/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfireInitializersEmberfire) {
  exports['default'] = _emberfireInitializersEmberfire['default'];
});
define('yo-app/initializers/export-application-global', ['exports', 'ember', 'yo-app/config/environment'], function (exports, _ember, _yoAppConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_yoAppConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _yoAppConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_yoAppConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('yo-app/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('yo-app/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('yo-app/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("yo-app/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('yo-app/models/contact', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    email: _emberData['default'].attr('string'),
    message: _emberData['default'].attr('string')
  });
});
define('yo-app/models/invitation', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    email: _emberData['default'].attr('string')
  });
});
define('yo-app/models/library', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    address: _emberData['default'].attr('string'),
    phone: _emberData['default'].attr('string')
  });
});
define('yo-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
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
    });
  });

  exports['default'] = Router;
});
define('yo-app/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('yo-app/routes/admin/contacts', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return this.store.findAll('contact'); // return all contacts      
        }
    });
});
define('yo-app/routes/admin/invitations', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return this.store.findAll('invitation'); // invitaion is our model for invitations
        }
    });
});
define('yo-app/routes/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('yo-app/routes/libraries/index', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return this.store.findAll('library');
        }

    });
});
define('yo-app/routes/libraries/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.createRecord('library');
    },

    actions: {

      saveLibrary: function saveLibrary(newLibrary) {
        var _this = this;

        newLibrary.save().then(function () {
          return _this.transitionTo('libraries');
        });
      },

      willTransition: function willTransition() {
        // rollbackAttributes() removes the record from the store
        // if the model 'isNew'
        this.controller.get('model').rollbackAttributes();
      }
    }
  });
});
define('yo-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('yo-app/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _emberfireServicesFirebaseApp) {
  exports['default'] = _emberfireServicesFirebaseApp['default'];
});
define('yo-app/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _emberfireServicesFirebase) {
  exports['default'] = _emberfireServicesFirebase['default'];
});
define("yo-app/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "c9MVB38U", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"About page\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "yo-app/templates/about.hbs" } });
});
define("yo-app/templates/admin/contacts", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "z9lviqQU", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"List of contacts\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-6 col-md-4 no-padding-left\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"panel-title\"],[\"flush-element\"],[\"text\",\"Contact from YoApp\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Email: \"],[\"append\",[\"unknown\",[\"contact\",\"email\"]],false],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Message: \"],[\"append\",[\"unknown\",[\"contact\",\"message\"]],false],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[\"contact\"]}],\"hasPartials\":false}", "meta": { "moduleName": "yo-app/templates/admin/contacts.hbs" } });
});
define("yo-app/templates/admin/invitations", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "a3cTZ0IW", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Invitations\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"table\",[]],[\"static-attr\",\"class\",\"table table-bordered table-striped\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"thead\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"ID\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"E-mail\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"tbody\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"invitation\",\"id\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"invitation\",\"email\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"invitation\"]}],\"hasPartials\":false}", "meta": { "moduleName": "yo-app/templates/admin/invitations.hbs" } });
});
define("yo-app/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "E0HdysRe", "block": "{\"statements\":[[\"partial\",\"navbar\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"    \\n    \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":true}", "meta": { "moduleName": "yo-app/templates/application.hbs" } });
});
define("yo-app/templates/contact", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "tdRFBcX8", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Contact page\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron text-center\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Contact Us\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Contact Us, using the form below\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"contact-form form-horizontal form-group form-group-lg row center-block\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"form-group has-feedback \",[\"helper\",[\"if\"],[[\"get\",[\"isValidEmail\"]],\"has-success\"],null]]]],[\"flush-element\"],[\"text\",\"\\n                \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"class\",\"placeholder\",\"autofocus\"],[\"email\",[\"get\",[\"emailContact\"]],\"form-control\",\"* Please type your e-mail address.\",\"autofocus\"]]],false],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"get\",[\"isValidEmail\"]],\"glyphicon glyphicon-ok form-control-feedback\"],null]]]],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"form-group has-feedback \",[\"helper\",[\"if\"],[[\"get\",[\"messageValid\"]],\"has-success\"],null]]]],[\"flush-element\"],[\"text\",\"\\n                \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"class\",\"placeholder\",\"rows\",\"value\"],[\"form-control\",\"* say something\",\"7\",[\"get\",[\"message\"]]]]],false],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"get\",[\"messageValid\"]],\"glyphicon glyphicon-ok form-control-feedback\"],null]]]],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-4 pull-right \"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"btn btn-lg btn-block \",[\"helper\",[\"if\"],[[\"get\",[\"isAllValid\"]],\"btn-success\",\"btn-primary\"],null],\" \"]]],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"isDisabled\"]],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"sendMessage\"]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\tSend message\\n\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"responseMessage\"]]],null,0],[\"text\",\"\\n\\t\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"     \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-success\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"responseMessage\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "yo-app/templates/contact.hbs" } });
});
define("yo-app/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "pBVt7KYO", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Home page\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron text-center\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Coming Soon\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Don't miss our launch date, request an invitation now.\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-horizontal form-group form-group-lg row\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-1 col-md-5 col-md-offset-2\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"class\",\"placeholder\",\"autofocus\"],[\"email\",[\"get\",[\"emailAddress\"]],\"form-control\",\"Please type your e-mail address.\",\"autofocus\"]]],false],[\"text\",\"\\n\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-4 col-md-3\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-lg btn-block\"],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"isDisabled\"]],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveInvitation\"]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\tRequest invitation\\n\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"responseMessage\"]]],null,0],[\"text\",\"\\n\\t\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"     \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-success\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"responseMessage\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "yo-app/templates/index.hbs" } });
});
define("yo-app/templates/libraries", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "SPOFUWCa", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Libraries\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"well\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav nav-pills\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"block\",[\"link-to\"],[\"libraries.index\"],[[\"tagName\"],[\"li\"]],1],[\"text\",\"\\n    \"],[\"block\",[\"link-to\"],[\"libraries.new\"],[[\"tagName\"],[\"li\"]],0],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"text\",\"Add new\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"text\",\"List all\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "yo-app/templates/libraries.hbs" } });
});
define("yo-app/templates/libraries/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "JSMJElGn", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"List od libraries\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"panel-title\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"library\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Address: \"],[\"append\",[\"unknown\",[\"library\",\"address\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Phone: \"],[\"append\",[\"unknown\",[\"library\",\"phone\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"library\"]}],\"hasPartials\":false}", "meta": { "moduleName": "yo-app/templates/libraries/index.hbs" } });
});
define("yo-app/templates/libraries/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "N2w198U1", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Add a new local Library\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-horizontal\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"col-sm-2 control-label\"],[\"flush-element\"],[\"text\",\"Name\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-10\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"class\",\"placeholder\"],[\"text\",[\"get\",[\"model\",\"name\"]],\"form-control\",\"The name of the Library\"]]],false],[\"text\",\"\\n\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"col-sm-2 control-label\"],[\"flush-element\"],[\"text\",\"Address\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-10\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"class\",\"placeholder\"],[\"text\",[\"get\",[\"model\",\"address\"]],\"form-control\",\"The address of the Library\"]]],false],[\"text\",\"\\n\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"col-sm-2 control-label\"],[\"flush-element\"],[\"text\",\"Phone\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-10\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"class\",\"placeholder\"],[\"text\",[\"get\",[\"model\",\"phone\"]],\"form-control\",\"The phone number of the Library\"]]],false],[\"text\",\"\\n\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-offset-2 col-sm-10\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary btn-lg btn-block\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveLibrary\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"\\n            Add to library list\\n        \"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "yo-app/templates/libraries/new.hbs" } });
});
define("yo-app/templates/navbar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "TU56tsIP", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-inverse navbar-fixed-top\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"navbar-toggle collapsed\"],[\"static-attr\",\"data-toggle\",\"collapse\"],[\"static-attr\",\"data-target\",\"#main-navbar\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\"],[\"navbar-brand\"]],6],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"collapse navbar-collapse\"],[\"static-attr\",\"id\",\"main-navbar\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"block\",[\"link-to\"],[\"index\"],[[\"tagName\"],[\"li\"]],5],[\"text\",\"\\n        \"],[\"block\",[\"link-to\"],[\"about\"],[[\"tagName\"],[\"li\"]],4],[\"text\",\"\\n        \"],[\"block\",[\"link-to\"],[\"libraries\"],[[\"tagName\"],[\"li\"]],3],[\"text\",\"\\n        \"],[\"block\",[\"link-to\"],[\"contact\"],[[\"tagName\"],[\"li\"]],2],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav navbar-right\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"dropdown\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"dropdown-toggle\"],[\"static-attr\",\"data-toggle\",\"dropdown\"],[\"static-attr\",\"role\",\"button\"],[\"static-attr\",\"aria-haspopup\",\"true\"],[\"static-attr\",\"aria-expanded\",\"false\"],[\"flush-element\"],[\"text\",\"\\n            Admin\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"caret\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"dropdown-menu\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"block\",[\"link-to\"],[\"admin.invitations\"],[[\"tagName\"],[\"li\"]],1],[\"text\",\"\\n          \"],[\"block\",[\"link-to\"],[\"admin.contacts\"],[[\"tagName\"],[\"li\"]],0],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"text\",\"Contacts\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"text\",\"Invitations\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"text\",\"Contact\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"text\",\"Libaries\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"text\",\"About\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"text\",\"Home\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Library App\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "yo-app/templates/navbar.hbs" } });
});
define('yo-app/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _emberfireToriiProvidersFirebase) {
  exports['default'] = _emberfireToriiProvidersFirebase['default'];
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('yo-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'yo-app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("yo-app/app")["default"].create({"LOG_RESOLVER":true,"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"yo-app","version":"0.0.0+b38b466a"});
}

/* jshint ignore:end */
//# sourceMappingURL=yo-app.map
