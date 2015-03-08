define(function (require) {
    'use strict';

    var templates = require('js/templates'),
        template = templates['trainer/login'].render();

    return initialize;

    function initialize() {
        $('#app').fadeOut(function () {
            $('#app').html(template).fadeIn();
        });
    }
});