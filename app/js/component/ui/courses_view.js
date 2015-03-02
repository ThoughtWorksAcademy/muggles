define(function (require) {
    var defineComponent = require('flight/lib/component');
    var templates = require('js/templates'),
        template = templates['courses_table'];

    return defineComponent(courses);

    function courses() {
        this.defaultAttrs({
            coursePanel : '.courses-panel'
        });

        this.renderCourses = function () {
            var courses = [
                {name: '1',
                    trainer:'1',
                    sponsor:'1'},
                {name: '1',
                    trainer:'1',
                    sponsor:'1'},
                {name: '1',
                    trainer:'1',
                    sponsor:'1'}
            ];

            var coursesTemplate = template.render({courses: courses});
            console.log(coursesTemplate);
            this.select('coursePanel').append(coursesTemplate);
        };

        this.after('initialize', function () {
            this.renderCourses();
        });
    }
});
