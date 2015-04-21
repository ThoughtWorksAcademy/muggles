
define(function (require) {
    'use strict';
    var defineComponent = require('flight/lib/component');
    var Example = require('mock/example');

    describeComponent('', function () {
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
