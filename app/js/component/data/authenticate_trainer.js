define(function (require) {
    'use strict';

    var defineComponent = require('flight/lib/component');

    return defineComponent(authenticate);

    function authenticate() {

        this.isAuthenticatedUser = function () {
            this.trigger('uiSwitchPage', {name: 'trainerLoginPage'});
            console.log('trainerLoginPage');
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