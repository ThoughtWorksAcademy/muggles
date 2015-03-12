define(function (require) {
    var defineComponent = require('flight/lib/component');
    var templates = require('js/templates'),
        template = templates['trainer/trainees_of_course'];

    return defineComponent(stations);

    function stations() {
        this.defaultAttrs({
            traineeCourses: '.traineeOfCourse'
        });

        this.renderTraineesOfCourse = function () {
            var trainees = this.attr.trainees;
            var html = template.render({trainees: trainees});
            $('#app').html(html).fadeIn();
        };

        this.serveTraineeCourses = function () {
            var self = this;
            var id = event.target.id;
            var courseId = this.attr.id;
            console.log(courseId);
            $.ajax('/api/users/courses/' + courseId, {
                method: 'get'

            }).fail(function () {
                console.log('获取id为' + id + '的课程失败');

            }).done(function (data) {
                self.trigger('uiSwitchPage',
                    {
                        name: 'courseOfTrainee',
                        data: data
                    });
            });
        };

        this.after('initialize', function () {
            this.on(document, 'click',
                {'traineeCourses': this.serveTraineeCourses});
            this.renderTraineesOfCourse();
        });
    }
});
