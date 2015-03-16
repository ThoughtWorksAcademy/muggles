'use strict';

mocha.setup('mocha-flight');

requirejs.config({
    baseUrl: '/base',

    paths: {
        'jquery': 'app/bower_components/jquery/dist/jquery',
        'flight': 'app/bower_components/flight',
        'lodash': 'app/bower_components/lodash',
        'ui': 'app/js/component/ui',
        'chai': 'app/bower_components/chai/chai',
        'mock': 'test/mock',
        'lib': 'app/lib'
    },

    // ask Require.js to load these files (all dependent libs and our tests)
    deps: (function () {
        var libs = ['jquery'],
            tests = Object.keys(window.__karma__.files).filter(function (file) {
                return (/\.spec\.js$/.test(file));
            });

        return Array.prototype.concat(libs, tests);
    }()),

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
