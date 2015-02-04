define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  // var MyComponent = require('component/my_component');
  var Login = require('component/ui/login');
  var LoginData = require('component/data/loginData');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    Login.attachTo('.js-login');
    LoginData.attachTo(document);
    // MyComponent.attachTo(document);
  }

});
