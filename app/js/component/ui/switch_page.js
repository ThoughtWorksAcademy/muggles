define(function (require) {
    'use strict';

    var defineComponent = require('flight/lib/component');
    var pages = require('../../page/page');
    return defineComponent(switchPage);

    function switchPage() {

        this.defaultAttrs({
            'loginPage': pages.loginPage,
            'courses': pages.courses,
            'course': pages.course,
            'station': pages.station,
            'stationTrainees': pages.stationTrainees,
            'stationCourses': pages.stationCourses,
            'coursesOfTrainee': pages.coursesOfTrainee,
            'courseOfTrainee': pages.courseOfTrainee,
            'traineesOfCourse': pages.traineesOfCourse,
            'loginInit': pages.login
        });

        this.after('initialize', function () {
            this.on('uiSwitchPage', function (e, page) {
                this.attr[page.name](page.data);
            });
        });
    }
});