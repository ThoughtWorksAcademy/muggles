define(function (require) {
    'use strict';

    var defineComponent = require('flight/lib/component');

    return defineComponent(authenticate);

    function authenticate() {

        this.isAuthenticatedUser = function () {
            this.trigger('uiSwitchPage', {name: 'loginPage'});
        };

        this.after('initialize', function () {
            this.isAuthenticatedUser();
        })
    }
});