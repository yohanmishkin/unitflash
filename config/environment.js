/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'unitflash',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    
    firebase: {
      apiKey: "AIzaSyA0sgMTYf4DbADdW3V-6V-05jt8Mz7ejJ8",
      authDomain: "unitflash-47e81.firebaseapp.com",
      databaseURL: "https://unitflash-47e81.firebaseio.com",
      storageBucket: "unitflash-47e81.appspot.com",
      messagingSenderId: "167793532926"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
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
