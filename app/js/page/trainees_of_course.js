define(function (require) {
    'use strict';

    var templates = require('js/templates'),
        template = templates['trainer/trainees_of_course'].render(),
        CoursesOfTrainee = require('component/ui/trainees_of_course');

    return initialize;

    function initialize(data) {
        $('#app').fadeOut(function () {
            $('#app').html(template).fadeIn();
            CoursesOfTrainee.attachTo('#app', {trainees: data});
        });
    }
});