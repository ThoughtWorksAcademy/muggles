define(function (require) {
    'use strict';

    var templates = require('js/templates'),
        template = templates['trainer/stations'].render(),
        StationsView = require('component/ui/stations_view');

    return initialize;

    function initialize() {
        $('#app').fadeOut(function () {
            $('#app').html(template).fadeIn();

            StationsView.attachTo('#app');
        });
    }
});