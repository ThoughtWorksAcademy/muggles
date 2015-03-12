define(function (require) {
    'use strict';

    var templates = require('js/templates'),
        template = templates['trainer/courses_of_trainee'].render(),
        CoursesOfTrainee = require('component/ui/courses_of_trainee');

    return initialize;

    function initialize(data) {
        $('#app').fadeOut(function () {
            $('#app').html(template).fadeIn();
            CoursesOfTrainee.attachTo('#app', {coursesOfTrainee: data});
        });
    }
});