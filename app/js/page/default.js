define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  // var MyComponent = require('component/my_component');
  var LoginView = require('component/ui/login_view');
  var LoginData = require('component/data/login_data');

    var SignUpView = require('component/ui/signup_view');
    var SignUpData = require('component/data/signup_data');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    LoginView.attachTo('.js-login');
    LoginData.attachTo(document);

  SignUpView.attachTo('.js-signup');
  SignUpData.attachTo(document);

      // MyComponent.attachTo(document);
  }

});
