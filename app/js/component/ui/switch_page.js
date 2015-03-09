define(function (require) {
    'use strict';

    var defineComponent = require('flight/lib/component'),
        loginPage = require('../../page/login_page'),
        courses = require('../../page/courses'),
        course = require('../../page/course'),
        station = require('../../page/station'),
        station_students = require('../../page/station_students'),
        station_courses = require('../../page/station_courses');
    return defineComponent(switchPage);

    function switchPage() {

        this.defaultAttrs({
            'loginPage': loginPage,
            'courses': courses,
            'course': course,
            'station': station,
            'stationStudents' : station_students,
            'stationCourses' : station_courses
        });

        this.after('initialize', function () {
            this.on('uiSwitchPage', function (e, page) {
                this.attr[page.name](page.data);
            })
        });
    }
});