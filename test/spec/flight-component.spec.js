"use strict";
/*global describeComponent, setupComponent*/

define(function (require) {
    'use strict';

    var expect = require('chai').expect;
    var defineComponent = require('flight/lib/component');
    var Example = require('ui/login_view');

    describeComponent('ui/login_view', function() {
        describe('this.Component', function () {
            it('should be an Example component', function () {
                expect(this.Component).to.equal(Example);
                console.log(this.Component + 'hijkjkkj');
            });
        });
        console.log(Example);
    });
});

