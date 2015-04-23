define(function (require) {
    'use strict';

    var templates = require('js/templates'),
        template = templates['trainer/course'].render(),
        CourseOfTrainee = require('component/ui/course_of_trainee');

    return initialize;

    function initialize(data) {
        $('#app').fadeOut(function () {
            //$('#app').html(template).fadeIn();
            CourseOfTrainee.attachTo('#app', {course: data.data.course, data: data, traineeId: data.traineeId});
        });
    }
});