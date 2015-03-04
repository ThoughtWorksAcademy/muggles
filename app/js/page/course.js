define(function (require) {
    'use strict';

    var templates = require('js/templates'),
        CourseView = require('component/ui/course_view');

    return initialize;

    function initialize(data) {
        $('#app').fadeOut(function () {
            CourseView.attachTo('#app', {course: data});
        });
    }
});