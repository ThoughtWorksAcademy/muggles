define(function (require) {
    var defineComponent = require('flight/lib/component');
    var templates = require('js/templates'),
        template = templates['course'];

    return defineComponent(course);

    function course() {
        this.defaultAttrs({
            app : '#app',
            courseName: '.course_name'
        });
        this.renderCourse = function () {
            var self = this;
            var data = {
                name: '测试课程',
                trainer: 'sigh ',
                sponsor: '重新填写sponsor',
                checkpoints :[
                    {name: 'i'},
                    {name: 'i'}
                ]
            };
            console.log(this.attr.course);
            var html = template.render(this.attr.course);
            $('#app').html(html).fadeIn();
            self.select('app').append(html).fadeIn();
        };


        this.after('initialize', function () {
            this.renderCourse();
        });
    }
});
