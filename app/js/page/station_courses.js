define(function (require) {
    'use strict';

    var templates = require('js/templates'),
        template = templates['trainer/stations'].render(),
        StationsCourses = require('component/ui/station_courses');

    return initialize;

    function initialize(data) {
        $('#app').fadeOut(function () {
            $('#app').html(template).fadeIn();
            StationsCourses.attachTo('#app', {stationCourses: data.data, id: data.id});
        });
    }
});