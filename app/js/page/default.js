define(function (require) {

    'use strict';

    var LoginView = require('component/ui/login_view');
    var LoginData = require('component/data/login_data');

    var SignUpView = require('component/ui/signup_view');
    var SignUpData = require('component/data/signup_data');

    var CheckPointView = require('component/ui/checkpoint_view');
    var CheckPointData = require('component/data/checkpoint_data');

    return initialize;

    function initialize() {

        LoginView.attachTo('.js-login');
        LoginData.attachTo(document);
        
        CheckPointData.attachTo(document);
        CheckPointView.attachTo('.js-checkpoint');



        SignUpView.attachTo('.js-signup');
        SignUpData.attachTo(document);

    }

});
