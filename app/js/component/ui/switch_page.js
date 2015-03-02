define(function (require) {
    'use strict';

    var defineComponent = require('flight/lib/component'),
        loginPage = require('../../page/login_page'),
        appPage = require('../../page/app_page');

    return defineComponent(switchPage);

    function switchPage() {

        this.defaultAttrs({
            'loginPage' : loginPage,
            'appPage' : appPage
        });

        this.after('initialize', function () {
           this.on('uiSwitchPage', function(e, page) {
               console.log(page.name);
               this.attr[page.name]();
           })
        });
    }
});