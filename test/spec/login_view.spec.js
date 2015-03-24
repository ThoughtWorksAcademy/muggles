/*global describeComponent, setupComponent*/

define(function (require) {
    'use strict';

    var expect = require('chai').expect;
    var defineComponent = require('flight/lib/component');
    var Example = require('ui/login_view');

    describeComponent('ui/login_view', function () {
        describe('this.Component', function () {
            it('should be an Example component', function () {
                expect(this.Component).to.equal(Example);
            });
        });
        //
        //describe('bar', function() {
        //    it('bar() returns bar!', function() {
        //        expect(bar.bar()).to.be('bar!');
        //    });
        //    it('baz() returns baz!', function() {
        //        expect(bar.baz()).to.be('baz!');
        //    });
        //});

    });
});
