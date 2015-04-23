define(function (require) {
    'use strict';

    var defineComponent = require('flight/lib/component'),
        loginPage = require('../../page/login_page'),
        courses = require('../../page/courses'),
        course = require('../../page/course'),
        station = require('../../page/station'),
        stationTraineesPage = require('../../page/station_trainees_page'),
        stationCourses = require('../../page/station_courses'),
        coursesOfTrainee = require('../../page/courses_of_trainee'),
        courseOfTrainee = require('../../page/course_of_trainee'),
        traineesOfCourse = require('../../page/trainees_of_course');
    var pages = require('../../page/page');
    return defineComponent(switchPage);

    function switchPage() {

        this.defaultAttrs({
            'loginPage': loginPage,
            'courses': courses,
            'course': course,
            'station': station,
            'stationTrainees': stationTraineesPage,
            'stationCourses': stationCourses,
            'coursesOfTrainee': coursesOfTrainee,
            'courseOfTrainee': courseOfTrainee,
            'traineesOfCourse': traineesOfCourse,
            'loginInit': pages.login
        });

        this.after('initialize', function () {
            this.on('uiSwitchPage', function (e, page) {
                this.attr[page.name](page.data);
            });
        });
    }
});