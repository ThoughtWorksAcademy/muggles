define(function (require) {
    var defineComponent = require('flight/lib/component');
    var templates = require('js/templates'),
        template = templates['course'];

    return defineComponent(course);

    function course() {
        this.defaultAttrs({
            app: '#app',
            courseName: '.course_name'
        });
        this.renderCourse = function () {

            var html = template.render(this.attr.course);
            $('#app').html(html).fadeIn();
            this.select('app').append(html).fadeIn();
        };


        this.after('initialize', function () {
            this.renderCourse();
        });
    }
});
