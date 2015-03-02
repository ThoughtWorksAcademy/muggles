define(function (require) {
    var defineComponent = require('flight/lib/component');
    var templates = require('js/templates'),
        template = templates['courses_table'];

    return defineComponent(courses);

    function courses() {
        this.defaultAttrs({
            coursePanel: '.courses-tbody'
        });

        this.renderCourses = function () {
            var courses = [
                {
                    name: '1',
                    trainer: '1',
                    sponsor: '1'
                },
                {
                    name: '1',
                    trainer: '1',
                    sponsor: '1'
                },
                {
                    name: '1',
                    trainer: '1',
                    sponsor: '1'
                }
            ];

            var html = template.render({courses: courses});

            this.select('coursePanel').append(html);
        };

        this.after('initialize', function () {
            this.renderCourses();
        });
    }
});
