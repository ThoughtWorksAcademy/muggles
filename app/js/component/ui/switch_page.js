define(function (require) {
    'use strict';

    var defineComponent = require('flight/lib/component'),
        //appPage = require('page/app_page'),
        loginPage = require('../../page/login_page');

    return defineComponent(switchPage);

    function switchPage() {

        this.defaultAttrs({
            'loginPage' : loginPage
            //'appPage' : appPage
        });

        this.after('initialize', function () {
           this.on('uiSwitchPage', function(e, page) {
               this.attr[page.name]();
           })
        });
    }
});