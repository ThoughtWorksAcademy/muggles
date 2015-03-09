define(function (require) {
    'use strict';

    var expect = require('chai').expect;
    var defineComponent = require('flight/lib/component');
    var login_page = require('component/ui/login_page');

    describeComponent('component/ui/login_view', function () {
        describe('this.Component', function () {
            it('should be a login_view component', function () {
                expect(this.Component).to.equal(login_page)
            });
        })
    });
});