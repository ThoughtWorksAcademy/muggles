define(function (require) {
    'use strict';

    var defineComponent = require('flight/lib/component'),
        loginPage = require('../../page/login_page'),
        courses = require('../../page/courses'),
        course = require('../../page/course'),
        station = require('../../page/station'),
        stationTraineesPage = require('../../page/station_trainees_page'),
        stationCourses = require('../../page/station_courses'),
        courseOfTrainee = require('../../page/course_of_trainee');
    return defineComponent(switchPage);

    function switchPage() {

        this.defaultAttrs({
            'loginPage': loginPage,
            'courses': courses,
            'course': course,
            'station': station,
            'stationTrainees' : stationTraineesPage,
            'stationCourses' : stationCourses,
            'courseOfTrainee' : courseOfTrainee
        });

        this.after('initialize', function () {
            this.on('uiSwitchPage', function (e, page) {
                this.attr[page.name](page.data);
            })
        });
    }
});