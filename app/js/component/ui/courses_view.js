define(function (require) {
    var defineComponent = require('flight/lib/component');
    var templates = require('js/templates'),
        template = templates['courses_table'];

    return defineComponent(courses);

    function courses() {
        this.defaultAttrs({
            coursePanel: '.courses-tbody',
            courseName: '.course_name'
        });


        this.serveCourses = function (callback) {
            $.ajax('/api/users/courses', {
                method: 'get'
            }).fail(function () {
                console.log('获取courses失败');
                console.log(data);

            }).done(function (data) {
                console.log('获取courses成功');
                console.log(data);
                callback(data);
            });
        };

        this.renderCourses = function () {
            var self = this;

            this.serveCourses(function (data) {
                console.log(data);
                var html = template.render({courses: data});

                self.select('coursePanel').append(html);
            });
        };


        this.serveCourse = function () {
            console.log(this.node);
            console.log('接下来获取'+ this.node.id +'课程信息');
        };

        this.after('initialize', function () {
            this.on(document, 'click',
                { 'courseName' :this.serveCourse});
            this.renderCourses();
        });
    }
});
