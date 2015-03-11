define(function (require) {
    var defineComponent = require('flight/lib/component');
    var templates = require('js/templates'),
        template = templates['trainer/trainees'];

    return defineComponent(stations);

    function stations() {
        this.defaultAttrs({
            traineeCourses: '.trainee-courses'
        });

        this.renderStationCourses = function () {
            var trainees = this.attr.data.trainees;
            console.log(trainees);
            var html = template.render({trainees: trainees});
            $('#app').html(html).fadeIn();
        };

        this.serveTraineesCourses = function () {
            var self = this;
            var id = event.target.id;
            var courseId = self.attr.data.courseId;

            $.ajax('/api/trainees/' + id + '/courses/' + courseId, {
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
                {'traineeCourses': this.serveTraineesCourses});
            this.renderStationCourses();
        });
    }
});
