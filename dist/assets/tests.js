'use strict';

define('yo-app/tests/adapters/application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nadapters/application.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('yo-app/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 6, col 1, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 13, col 3, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('yo-app/tests/components/library-item-form.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/library-item-form.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/library-item-form.js should pass jshint.\ncomponents/library-item-form.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/library-item-form.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/library-item-form.js: line 8, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('yo-app/tests/components/library-item.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/library-item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/library-item.js should pass jshint.\ncomponents/library-item.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/library-item.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('yo-app/tests/components/nav-link-to.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/nav-link-to.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/nav-link-to.js should pass jshint.\ncomponents/nav-link-to.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/nav-link-to.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('yo-app/tests/components/number-box.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/number-box.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/number-box.js should pass jshint.\ncomponents/number-box.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/number-box.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('yo-app/tests/controllers/contact.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/contact.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/contact.js should pass jshint.\ncontrollers/contact.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/contact.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/contact.js: line 15, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/contact.js: line 17, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/contact.js: line 18, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/contact.js: line 20, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/contact.js: line 25, col 39, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/contact.js: line 26, col 37, \'template literal syntax\' is only available in ES6 (use \'esversion: 6\').\n\n8 errors');
  });
});
define('yo-app/tests/controllers/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/index.js should pass jshint.\ncontrollers/index.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/index.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/index.js: line 14, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/index.js: line 15, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/index.js: line 17, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/index.js: line 21, col 42, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/index.js: line 22, col 37, \'template literal syntax\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('yo-app/tests/helpers/create-offline-ref', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = createOfflineRef;

  /**
   * Creates an offline firebase reference with optional initial data and url.
   *
   * Be sure to `stubfirebase()` and `unstubfirebase()` in your tests!
   *
   * @param  {!Object} [initialData]
   * @param  {string} [url]
   * @param  {string} [apiKey]
   * @return {!firebase.database.Reference}
   */

  function createOfflineRef(initialData) {
    var url = arguments.length <= 1 || arguments[1] === undefined ? 'https://emberfire-tests-2c814.firebaseio.com' : arguments[1];
    var apiKey = arguments.length <= 2 || arguments[2] === undefined ? 'AIzaSyC9-ndBb1WR05rRF1msVQDV6EBqB752m6o' : arguments[2];

    if (!_firebase['default']._unStub) {
      throw new Error('Please use stubFirebase() before calling this method');
    }

    var config = {
      apiKey: apiKey,
      authDomain: 'emberfire-tests-2c814.firebaseapp.com',
      databaseURL: url,
      storageBucket: ''
    };

    var app = undefined;

    try {
      app = _firebase['default'].app();
    } catch (e) {
      app = _firebase['default'].initializeApp(config);
    }

    var ref = app.database().ref();

    app.database().goOffline(); // must be called after the ref is created

    if (initialData) {
      ref.set(initialData);
    }

    return ref;
  }
});
define('yo-app/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('yo-app/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('yo-app/tests/helpers/destroy-firebase-apps', ['exports', 'ember', 'firebase'], function (exports, _ember, _firebase) {
  exports['default'] = destroyFirebaseApps;
  var run = _ember['default'].run;

  /**
   * Destroy all Firebase apps.
   */

  function destroyFirebaseApps() {
    var deletions = _firebase['default'].apps.map(function (app) {
      return app['delete']();
    });
    _ember['default'].RSVP.all(deletions).then(function () {
      return run(function () {
        // NOOP to delay run loop until the apps are destroyed
      });
    });
  }
});
define('yo-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'yo-app/tests/helpers/start-app', 'yo-app/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _yoAppTestsHelpersStartApp, _yoAppTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _yoAppTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _yoAppTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('yo-app/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('yo-app/tests/helpers/replace-app-ref', ['exports'], function (exports) {
  exports['default'] = replaceAppRef;
  /**
   * Updates the supplied app adapter's Firebase reference.
   *
   * @param  {!Ember.Application} app
   * @param  {!firebase.database.Reference} ref
   * @param  {string} [model]  The model, if overriding a model specific adapter
   */

  function replaceAppRef(app, ref) {
    var model = arguments.length <= 2 || arguments[2] === undefined ? 'application' : arguments[2];

    app.register('service:firebaseMock', ref, { instantiate: false, singleton: true });
    app.inject('adapter:firebase', 'firebase', 'service:firebaseMock');
    app.inject('adapter:' + model, 'firebase', 'service:firebaseMock');
  }
});
define('yo-app/tests/helpers/replace-firebase-app-service', ['exports'], function (exports) {
  exports['default'] = replaceFirebaseAppService;
  /**
   * Replaces the `firebaseApp` service with your own using injection overrides.
   *
   * This is usually not needed in test modules, where you can re-register over
   * existing names in the registry, but in acceptance tests, some registry/inject
   * magic is needed.
   *
   * @param  {!Ember.Application} app
   * @param  {!Object} newService
   */

  function replaceFirebaseAppService(app, newService) {
    app.register('service:firebaseAppMock', newService, { instantiate: false, singleton: true });
    app.inject('torii-provider:firebase', 'firebaseApp', 'service:firebaseAppMock');
    app.inject('torii-adapter:firebase', 'firebaseApp', 'service:firebaseAppMock');
  }
});
define('yo-app/tests/helpers/resolver', ['exports', 'yo-app/resolver', 'yo-app/config/environment'], function (exports, _yoAppResolver, _yoAppConfigEnvironment) {

  var resolver = _yoAppResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _yoAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _yoAppConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('yo-app/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('yo-app/tests/helpers/start-app', ['exports', 'ember', 'yo-app/app', 'yo-app/config/environment'], function (exports, _ember, _yoAppApp, _yoAppConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _yoAppConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _yoAppApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('yo-app/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('yo-app/tests/helpers/stub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = stubFirebase;

  /**
   * When a reference is in offline mode it will not call any callbacks
   * until it goes online and resyncs. The ref will have already
   * updated its internal cache with the changed values so we shortcut
   * the process and call the supplied callbacks immediately (asynchronously).
   */

  function stubFirebase() {
    // check for existing stubbing
    if (!_firebase['default']._unStub) {
      var originalSet = _firebase['default'].database.Reference.prototype.set;
      var originalUpdate = _firebase['default'].database.Reference.prototype.update;
      var originalRemove = _firebase['default'].database.Reference.prototype.remove;

      _firebase['default']._unStub = function () {
        _firebase['default'].database.Reference.prototype.set = originalSet;
        _firebase['default'].database.Reference.prototype.update = originalUpdate;
        _firebase['default'].database.Reference.prototype.remove = originalRemove;
      };

      _firebase['default'].database.Reference.prototype.set = function (data, cb) {
        originalSet.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase['default'].database.Reference.prototype.update = function (data, cb) {
        originalUpdate.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase['default'].database.Reference.prototype.remove = function (cb) {
        originalRemove.call(this);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };
    }
  }
});
define('yo-app/tests/helpers/unstub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = unstubFirebase;

  function unstubFirebase() {
    if (typeof _firebase['default']._unStub === 'function') {
      _firebase['default']._unStub();
      delete _firebase['default']._unStub;
    }
  }
});
define('yo-app/tests/integration/components/library-item-form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('library-item-form', 'Integration | Component | library item form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'JOg7eL9y',
      'block': '{"statements":[["append",["unknown",["library-item-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'CMgTL9/Y',
      'block': '{"statements":[["text","\\n"],["block",["library-item-form"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('yo-app/tests/integration/components/library-item-form-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/library-item-form-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/library-item-form-test.js should pass jshint.');
  });
});
define('yo-app/tests/integration/components/library-item-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('library-item', 'Integration | Component | library item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '3++r69oI',
      'block': '{"statements":[["append",["unknown",["library-item"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'miLzSvs1',
      'block': '{"statements":[["text","\\n"],["block",["library-item"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('yo-app/tests/integration/components/library-item-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/library-item-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/library-item-test.js should pass jshint.');
  });
});
define('yo-app/tests/integration/components/nav-link-to-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('nav-link-to', 'Integration | Component | nav link to', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'XihGobDw',
      'block': '{"statements":[["append",["unknown",["nav-link-to"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'MntjeuzC',
      'block': '{"statements":[["text","\\n"],["block",["nav-link-to"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('yo-app/tests/integration/components/nav-link-to-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/nav-link-to-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nav-link-to-test.js should pass jshint.');
  });
});
define('yo-app/tests/integration/components/number-box-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('number-box', 'Integration | Component | number box', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '7aiNiK9F',
      'block': '{"statements":[["append",["unknown",["number-box"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'nXY+jjZQ',
      'block': '{"statements":[["text","\\n"],["block",["number-box"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('yo-app/tests/integration/components/number-box-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/number-box-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/number-box-test.js should pass jshint.');
  });
});
define('yo-app/tests/models/author.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/author.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/author.js should pass jshint.\nmodels/author.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/author.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('yo-app/tests/models/book.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/book.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/book.js should pass jshint.\nmodels/book.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/book.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('yo-app/tests/models/contact.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/contact.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/contact.js should pass jshint.\nmodels/contact.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/contact.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('yo-app/tests/models/invitation.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/invitation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/invitation.js should pass jshint.\nmodels/invitation.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/invitation.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('yo-app/tests/models/library.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/library.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/library.js should pass jshint.\nmodels/library.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/library.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('yo-app/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'resolver.js should pass jshint.\nresolver.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nresolver.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('yo-app/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nrouter.js: line 23, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
  });
});
define('yo-app/tests/routes/about.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/about.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/about.js should pass jshint.\nroutes/about.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/about.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('yo-app/tests/routes/admin/contacts.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/admin/contacts.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/contacts.js should pass jshint.\nroutes/admin/contacts.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/admin/contacts.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/admin/contacts.js: line 4, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/admin/contacts.js: line 9, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/admin/contacts.js: line 10, col 7, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n5 errors');
  });
});
define('yo-app/tests/routes/admin/invitations.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/admin/invitations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/invitations.js should pass jshint.\nroutes/admin/invitations.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/admin/invitations.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/admin/invitations.js: line 4, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/admin/invitations.js: line 9, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/admin/invitations.js: line 10, col 7, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n5 errors');
  });
});
define('yo-app/tests/routes/admin/seeder.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/admin/seeder.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/seeder.js should pass jshint.\nroutes/admin/seeder.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/admin/seeder.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/admin/seeder.js: line 5, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/admin/seeder.js: line 10, col 7, Missing semicolon.\nroutes/admin/seeder.js: line 13, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n5 errors');
  });
});
define('yo-app/tests/routes/contact.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/contact.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/contact.js should pass jshint.\nroutes/contact.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/contact.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('yo-app/tests/routes/libraries/edit.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/libraries/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/libraries/edit.js should pass jshint.\nroutes/libraries/edit.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/edit.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/edit.js: line 5, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/edit.js: line 9, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/edit.js: line 16, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/edit.js: line 22, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/edit.js: line 23, col 31, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/edit.js: line 26, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/edit.js: line 27, col 7, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/edit.js: line 30, col 9, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n10 errors');
  });
});
define('yo-app/tests/routes/libraries/form.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/libraries/form.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/libraries/form.js should pass jshint.\nroutes/libraries/form.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/form.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('yo-app/tests/routes/libraries/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/libraries/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/libraries/index.js should pass jshint.\nroutes/libraries/index.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/index.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/index.js: line 5, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/index.js: line 11, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/index.js: line 12, col 7, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n5 errors');
  });
});
define('yo-app/tests/routes/libraries/new.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/libraries/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/libraries/new.js should pass jshint.\nroutes/libraries/new.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/new.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/new.js: line 16, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/new.js: line 22, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/new.js: line 23, col 31, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/new.js: line 26, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/new.js: line 27, col 7, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n7 errors');
  });
});
define('yo-app/tests/test-helper', ['exports', 'yo-app/tests/helpers/resolver', 'ember-qunit'], function (exports, _yoAppTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_yoAppTestsHelpersResolver['default']);
});
define('yo-app/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('yo-app/tests/unit/controllers/contact-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:contact', 'Unit | Controller | contact', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('yo-app/tests/unit/controllers/contact-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/contact-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/contact-test.js should pass jshint.');
  });
});
define('yo-app/tests/unit/controllers/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:index', 'Unit | Controller | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('yo-app/tests/unit/controllers/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass jshint.');
  });
});
define('yo-app/tests/unit/models/author-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('author', 'Unit | Model | author', {
    // Specify the other units that are required for this test.
    needs: ['model:book']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('yo-app/tests/unit/models/author-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/author-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/author-test.js should pass jshint.');
  });
});
define('yo-app/tests/unit/models/book-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('book', 'Unit | Model | book', {
    // Specify the other units that are required for this test.
    needs: ['model:library', 'model:author']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('yo-app/tests/unit/models/book-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/book-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/book-test.js should pass jshint.');
  });
});
define('yo-app/tests/unit/models/contact-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('contact', 'Unit | Model | contact', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('yo-app/tests/unit/models/contact-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/contact-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/contact-test.js should pass jshint.');
  });
});
define('yo-app/tests/unit/models/invitation-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('invitation', 'Unit | Model | invitation', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('yo-app/tests/unit/models/invitation-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/invitation-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/invitation-test.js should pass jshint.');
  });
});
define('yo-app/tests/unit/models/library-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('library', 'Unit | Model | library', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('yo-app/tests/unit/models/library-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/library-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/library-test.js should pass jshint.');
  });
});
define('yo-app/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('yo-app/tests/unit/routes/about-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/about-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass jshint.');
  });
});
define('yo-app/tests/unit/routes/admin/contacts-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:admin/contacts', 'Unit | Route | admin/contacts', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('yo-app/tests/unit/routes/admin/contacts-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/admin/contacts-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/admin/contacts-test.js should pass jshint.');
  });
});
define('yo-app/tests/unit/routes/admin/invitations-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:admin/invitations', 'Unit | Route | admin/invitations', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('yo-app/tests/unit/routes/admin/invitations-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/admin/invitations-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/admin/invitations-test.js should pass jshint.');
  });
});
define('yo-app/tests/unit/routes/admin/seeder-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:admin/seeder', 'Unit | Route | admin/seeder', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('yo-app/tests/unit/routes/admin/seeder-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/admin/seeder-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/admin/seeder-test.js should pass jshint.');
  });
});
define('yo-app/tests/unit/routes/contact-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:contact', 'Unit | Route | contact', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('yo-app/tests/unit/routes/contact-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/contact-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass jshint.');
  });
});
define('yo-app/tests/unit/routes/libraries/edit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:libraries/edit', 'Unit | Route | libraries/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('yo-app/tests/unit/routes/libraries/edit-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/libraries/edit-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/libraries/edit-test.js should pass jshint.');
  });
});
define('yo-app/tests/unit/routes/libraries/form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:libraries/form', 'Unit | Route | libraries/form', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('yo-app/tests/unit/routes/libraries/form-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/libraries/form-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/libraries/form-test.js should pass jshint.');
  });
});
define('yo-app/tests/unit/routes/libraries/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:libraries/index', 'Unit | Route | libraries/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('yo-app/tests/unit/routes/libraries/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/libraries/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/libraries/index-test.js should pass jshint.');
  });
});
define('yo-app/tests/unit/routes/libraries/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:libraries/new', 'Unit | Route | libraries/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('yo-app/tests/unit/routes/libraries/new-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/libraries/new-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/libraries/new-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('yo-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
