define(function(require) {
    var templates = require('../js/templates');
    var pages = {};

    pages.login = function () {
        $('#app').fadeOut(function () {
            $('#app').html(templates['login'].render()).fadeIn();
        });
    };

    return pages;
});