define(function (require) {
    'use strict';

    var defineComponent = require('flight/lib/component'),
        loginPage = require('../../page/login_page'),
        courses = require('../../page/courses'),
        course = require('../../page/course');

    return defineComponent(switchPage);

    function switchPage() {

        this.defaultAttrs({
            'loginPage' : loginPage,
            'courses' : courses,
            'course' : course
        });

        this.after('initialize', function () {
           this.on('uiSwitchPage', function(e, page) {
               this.attr[page.name](page.data);
           })
        });
    }
});