define(function (require) {
    var CourseView = require('component/ui/course_view'),
        CourseOfTrainee = require('component/ui/course_of_trainee'),
        CoursesView = require('component/ui/courses_view'),
        CoursesOfTrainee = require('component/ui/courses_of_trainee'),
        StationsView = require('component/ui/stations_view'),
        StationsCourses = require('component/ui/station_courses'),
        StationsTrainees = require('component/ui/station_trainees'),
        TraineesOfCourse = require('component/ui/trainees_of_course');



    var templates = require('../js/templates');
    var pages = {};

    pages.login = function (data) {
        $('#app').fadeOut(function () {
            $('#app').html(templates['login'].render()).fadeIn();
        });
    };

    pages.course = function (data) {
        $('#app').fadeOut(function () {
            CourseView.attachTo('#app', {course: data.course, data: data});
        });
    };

    pages.courseOfTrainee = function (data) {
        $('#app').fadeOut(function () {
            CourseOfTrainee.attachTo('#app', {course: data.data.course, data: data, traineeId: data.traineeId});
        });
    };

    pages.courses = function (data) {
        $('#app').fadeOut(function () {
            $('#app').html(template).fadeIn();
            CoursesView.attachTo('#app');
        });
    };

    pages.coursesOfTrainee = function (data) {
        $('#app').fadeOut(function () {
            CoursesOfTrainee.attachTo('#app', {coursesOfTrainee: data.data, traineeId: data.traineeId});
        });
    };

    pages.station = function (data) {
        $('#app').fadeOut(function () {
            var template = templates['trainer/stations'].render();
            $('#app').html(template).fadeIn();
            StationsView.attachTo('#app');
        });
    };

    pages.stationCourses = function (data) {
        $('#app').fadeOut(function () {
            StationsCourses.attachTo('#app', {stationCourses: data.data, id: data.id});
        });
    };

    pages.stationTrainees = function (data) {
        $('#app').fadeOut(function () {
            StationsTrainees.attachTo('#app', {trainees: data.data, stationName: data.stationName});
        });
    };

    pages.traineesOfCourse = function (data) {
        $('#app').fadeOut(function () {
            TraineesOfCourse.attachTo('#app', {trainees: data.data, courseId: data.id});
        });
    };

    return pages;
});