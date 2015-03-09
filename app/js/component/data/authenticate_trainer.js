define(function (require) {
    'use strict';

    var defineComponent = require('flight/lib/component');
    var trainerLogin = require('../../page/trainer_login_page');
    return defineComponent(authenticate);

    function authenticate() {

        this.isAuthenticatedUser = function () {
            this.trigger('uiSwitchPageTrainer', {
                name: 'trainerLoginPage',
                page: trainerLogin
            });
        };

        this.authenticateUser = function () {
            console.log('got');
        };

        this.after('initialize', function () {
            this.on('dataUserLogin', this.authenticateUser);
            this.isAuthenticatedUser();
        })
    }
});