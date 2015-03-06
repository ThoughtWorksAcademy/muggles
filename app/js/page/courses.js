define(function (require) {
    'use strict';

    var templates = require('js/templates'),
        template = templates['courses'].render(),
        CoursesView = require('component/ui/courses_view');

    return initialize;

    function initialize() {
        $('#app').fadeOut(function () {
            $('#app').html(template).fadeIn();
            CoursesView.attachTo('#app');
        });
    }
});