/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
  
    modulePrefix: 'yo-app',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',

    firebase: {
      apiKey: "AIzaSyBGyZLr2IB4oHsyHDnI7KYIW-32qREdWXQ",
      authDomain: "yoapp-21b53.firebaseapp.com",
      databaseURL: "https://yoapp-21b53.firebaseio.com",
      projectId: "yoapp-21b53",
      storageBucket: "yoapp-21b53.appspot.com",
      messagingSenderId: "981020605687"
    },

    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
