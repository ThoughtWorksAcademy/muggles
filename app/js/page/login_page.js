define(function (require) {
   'use strict';

    var templates = require('js/templates'),
        template = templates['login'];

    return initialize;

    function initialize() {
        $('#app').fadeOut(function() {
            console.log(template);
            $('#app').html(template).fadeIn();
        });
    }
});