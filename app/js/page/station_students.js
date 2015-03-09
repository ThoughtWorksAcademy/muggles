define(function (require) {
    'use strict';

    var templates = require('js/templates'),
        template = templates['trainer/stations'].render(),
        StationsStudents = require('component/ui/station_students');

    return initialize;

    function initialize() {
        $('#app').fadeOut(function () {
            $('#app').html(template).fadeIn();

            StationsStudents.attachTo('#app');
        });
    }
});