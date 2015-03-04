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
                console.log('获取courses成功');
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
            //var id = event.target.id;
            //console.log( 'id' + id);
            //console.log('接下来获取' + id + '课程信息');
            //$.ajax('/api/users/courses/' + id, {
            //    method: 'get'
            //}).fail(function () {
            //    console.log('获取id为' + id + '的课程失败');
            //}).done(function (data) {
            //    console.log(data);
            //    console.log('获取课程成功');
                self.trigger('uiSwitchPage',
                    {
                        name: 'course'
                    });
            //});
        };

        this.after('initialize', function () {
            this.on(document, 'click',
                {'courseName': this.serveCourse});
            this.renderCourses();
        });
    }
});
