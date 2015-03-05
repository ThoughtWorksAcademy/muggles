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

            }).done(function (data) {
                callback(data);
            });
        };

        this.renderCourses = function () {
            var self = this;

            this.serveCourses(function (data) {
                var html = template.render({courses: data});

                self.select('coursePanel').append(html);
            });
        };


        this.serveCourse = function (event) {
            var self = this;
            var id = event.target.id;
            $.ajax('/api/users/courses/' + id, {
                method: 'get'
            }).fail(function () {
                console.log('获取id为' + id + '的课程失败');
            }).done(function (data) {
                self.trigger('uiSwitchPage',
                    {
                        name: 'course',
                        data: data
                    });
            });
        };

        this.after('initialize', function () {
            this.on(document, 'click',
                {'courseName': this.serveCourse});
            this.renderCourses();
        });
    }
});
