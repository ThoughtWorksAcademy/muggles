define(function (require) {
    'use strict';

    var defineComponent = require('flight/lib/component'),
        loginPage = require('../../page/login_page'),
        courses = require('../../page/courses');

    return defineComponent(switchPage);

    function switchPage() {

        this.defaultAttrs({
            'loginPage' : loginPage,
            'courses' : courses
        });

        this.after('initialize', function () {
           this.on('uiSwitchPage', function(e, page) {
               this.attr[page.name]();
           })
        });
    }
});