define(function (require) {
    var defineComponent = require('flight/lib/component');
    var templates = require('js/templates'),
        template = templates['trainer/students'];

    return defineComponent(stations);

    function stations() {
        this.defaultAttrs();

        this.renderStationCourses = function () {
            var students = this.attr.stationStudents;
            var html = template.render(students);
            $('#app').html(html).fadeIn();
        };

        this.after('initialize', function () {
            this.renderStationCourses();
        });
    }
});
