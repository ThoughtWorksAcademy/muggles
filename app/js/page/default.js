define(function (require) {

    'use strict';
    var SwitchPage = require('component/ui/switch_page');
    var Authenticate = require('component/data/authenticate_user');

    var LoginView = require('component/ui/login_view');
    var LoginData = require('component/data/login_data');

    var SignUpView = require('component/ui/signup_view');
    var SignUpData = require('component/data/signup_data');

    var CheckPointView = require('component/ui/checkpoint_view');
    var CheckPointData = require('component/data/checkpoint_data');

    var SwitchPageTrainer = require('component/ui/switch_page_trainer');
    return initialize;

    function initialize() {
        LoginView.attachTo('#app');

        SwitchPageTrainer.attachTo(document);
        SwitchPage.attachTo(document);
        Authenticate.attachTo(document);

        LoginData.attachTo(document);

        CheckPointData.attachTo(document);
        CheckPointView.attachTo('.js-checkpoint');


        SignUpView.attachTo('.js-signup');
        SignUpData.attachTo(document);
    }
});
