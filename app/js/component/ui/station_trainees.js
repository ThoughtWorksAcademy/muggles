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
            var trainees = this.attr.trainees;
            var html = template.render({trainees: trainees});
            $('#app').html(html).fadeIn();
        };

        this.serveTraineeCourses = function () {
            var self = this;
            var id = event.target.id;
            $.ajax('/api/trainees/' + id + '/courses/', {
                method: 'get'

            }).fail(function () {
                console.log('获取id为' + id + '的学生的所有课程失败');

            }).done(function (data) {
                self.trigger('uiSwitchPage',
                    {
                        name: 'coursesOfTrainee',
                        data: data
                    });
            });
        };

        this.after('initialize', function () {
            this.on(document, 'click',
                {'traineeCourses': this.serveTraineeCourses});
            this.renderStationCourses();
        });
    }
});
