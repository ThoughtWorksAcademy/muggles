define(function (require) {
    'use strict';

    var templates = require('js/templates'),
        template = templates['trainer/stations'].render(),
        StationsTrainees = require('component/ui/station_trainees');

    return initialize;

    function initialize() {
        $('#app').fadeOut(function () {
            $('#app').html(template).fadeIn();

            StationsTrainees.attachTo('#app');
        });
    }
});