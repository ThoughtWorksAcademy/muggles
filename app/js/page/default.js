define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  // var MyComponent = require('component/my_component');
  var Login = require('component/login');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    Login.attachTo('.js-login');
    // MyComponent.attachTo(document);
  }

});
