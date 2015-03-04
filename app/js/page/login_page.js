define(function (require) {
    'use strict';

    var templates = require('js/templates'),
        template = templates['login'].render();

    return initialize;

    function initialize() {
        $('#app').fadeOut(function () {
            $('#app').html(template).fadeIn();
        });
    }
});