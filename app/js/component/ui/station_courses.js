define(function (require) {
    var defineComponent = require('flight/lib/component');
    var templates = require('js/templates'),
        template = templates['trainer/courses'];

    return defineComponent(stations);

    function stations() {
        this.defaultAttrs();

        this.renderStationCourses = function () {
            var courses = this.attr.stationCourses;
            var html = template.render(courses);
            $('#app').html(html).fadeIn();
        };



        this.after('initialize', function () {
            this.renderStationCourses();
        });
    }
});
