define(function (require) {
    var defineComponent = require('flight/lib/component');
    var templates = require('js/templates'),
        template = templates['trainer/courses_of_trainee'];
    var _ = require('lodash/lodash');

    return defineComponent(stations);

    function stations() {
        this.defaultAttrs({
        });

        this.renderCheckpoints = function () {
            var courses = this.attr.coursesOfTrainee;
            console.log(courses);
            var html = template.render({courses: courses});
            $('#app').html(html).fadeIn();
        };

        this.after('initialize', function () {
            this.renderCheckpoints();
        });
    }
});
